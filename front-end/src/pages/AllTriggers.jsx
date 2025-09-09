import { useEffect, useState } from "react";

import axios from "axios";
import TriggerCard from "../components/TriggerCard";
import Header from "../components/Header";

const API_URL = import.meta.env.VITE_API_URL;

function AllTriggers () {

    const [triggers, setTriggers] = useState([]);

    useEffect(() => {
        const fetchTriggers = async () => {
            const res = await axios.get(`${API_URL}/triggers/all`);
            setTriggers(res.data)
        };
        fetchTriggers();
    }, []);


    return (
        <>
            <Header />
            <div className="grid grid-cols-6 gap-6">
                {triggers
                    .filter(trigger => trigger.approved)
                    .map(trigger => (
                    <TriggerCard
                        key={trigger._id}
                        triggerText={trigger.trigger}
                        replaceText={trigger.replaceText}
                        setText=""
                        setReplaceText=""
                    >
                    </TriggerCard>
                    ))}
            </div>
        </>
    );

}


export default AllTriggers;