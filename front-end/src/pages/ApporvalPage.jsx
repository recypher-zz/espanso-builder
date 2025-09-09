import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Output from "../components/Output";
import axios from "axios";
import { toast } from "react-toastify";

const api_url = import.meta.env.VITE_API_URL;

function ApprovalPage() {
    const { id } = useParams();
    const [trigger, setTrigger] = useState(null)
    
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
                toast.error("❌ Trigger declined.")
            }

        } catch (err) {
            toast.error("⚠️ Failed to update trigger");
        }
    };

    if (!trigger) return <p>Loading...</p>;

    return (
        <div className="h-screen w-screen bg-slate-700">
            <div className="m-3 flex flex-col items-center">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight">Trigger Review</h1>
                <Output
                    triggerText={trigger.trigger}
                    replaceText={trigger.replaceText}
                    multiline={trigger.isMultiline}
                />
                <button onClick={() => handleApproval(true)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Approve</button>
                <button onClick={() => handleApproval(false)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Decline</button>
            </div>
        </div>
    );
}

export default ApprovalPage;