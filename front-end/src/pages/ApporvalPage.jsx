import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Output from "../components/Output";

function ApprovalPage() {
    const { id } = useParams();
    const [trigger, setTrigger] = useState(null)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/triggers/approval/${id}`)
        .then(res => res.json())
        .then(setTrigger)
        .catch(err => console.error(err));
    }, [id]);

    if (!trigger) return <p>Loading...</p>;

    return (
        <div>
            <h1>Trigger Review</h1>
            <Output
                trigger={trigger.trigger}
                replaceText={trigger.replaceText}
                multiline="trigger.isMultiline"
            />
        </div>
    );
}

export default ApprovalPage;