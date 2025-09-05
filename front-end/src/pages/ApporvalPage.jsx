import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Output from "../components/Output";
import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

function ApprovalPage() {
    const { id } = useParams();
    const [trigger, setTrigger] = useState(null)
    useEffect(() => {
        fetch(`${api_url}/triggers/approval/${id}`)
        .then(res => res.json())
        .then(setTrigger)
        .catch(err => console.error(err));
    }, [id]);

    if (!trigger) return <p>Loading...</p>;

    const handleApproval = async (value) => {
        try {
            const { data } = await axios.patch(
                `${api_url}/triggers/approval/${trigger._id}`,
                { approved: value }
            );

            setTrigger(data);

        } catch (err) {
            console.error("Failed to update trigger:", err);
        }
    };

    return (
        <div>
            <h1>Trigger Review</h1>
            <Output
                triggerText={trigger.trigger}
                replaceText={trigger.replaceText}
                multiline={trigger.isMultiline}
            />
            <button onClick={() => handleApproval(true)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Approve</button>
            <button onClick={() => handleApproval(false)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Decline</button>
        </div>
    );
}

export default ApprovalPage;