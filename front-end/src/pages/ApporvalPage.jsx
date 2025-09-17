import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Output from "../components/Output";
import axios from "axios";
import { toast } from "react-toastify";

const api_url = import.meta.env.VITE_API_URL;

function ApprovalPage() {
  const { id } = useParams();
  const [trigger, setTrigger] = useState(null);

  useEffect(() => {
    axios
      .get(`${api_url}/triggers/approval/${id}`)
      .then((res) => setTrigger(res.data))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load trigger");
      });
  }, [id]);

  const handleApproval = async (value) => {
    try {
      const { data } = await axios.patch(
        `${api_url}/triggers/approval/${trigger._id}`,
        { approved: value }
      );

      setTrigger(data);

      if (value) {
        toast.success("✅ Trigger approved!");
      } else {
        toast.error("❌ Trigger declined.");
      }
    } catch (err) {
      toast.error("⚠️ Failed to update trigger");
    }
  };

  if (!trigger) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-xl flex flex-col items-center space-y-6">
        <h1 className="text-3xl font-extrabold text-white text-center">
          Trigger Review
        </h1>

        {/* Output interface */}
        <div className="w-full">
          <Output
            triggerText={trigger.trigger}
            replaceText={trigger.replaceText}
            multiline={trigger.isMultiline}
          />
        </div>

        {/* Approval buttons */}
        <div className="flex gap-6">
          <button
            onClick={() => handleApproval(true)}
            className="bg-green-600 hover:bg-green-700 text-white rounded-xl py-2 px-6"
          >
            Approve
          </button>
          <button
            onClick={() => handleApproval(false)}
            className="bg-red-600 hover:bg-red-700 text-white rounded-xl py-2 px-6"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApprovalPage;
