import { useEffect, useState } from "react";
import axios from "axios";
import TriggerCard from "../components/TriggerCard";
import Header from "../components/Header";
import Output from "../components/Output";
import TriggerModal from "../components/TriggerModal";

const API_URL = import.meta.env.VITE_API_URL;


function AllTriggers () {

    const [triggers, setTriggers] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedTrigger, setSelectedTrigger] = useState(null);

    useEffect(() => {
        const fetchTriggers = async () => {
            const res = await axios.get(`${API_URL}/triggers/all`);
            setTriggers(res.data)
        };
        fetchTriggers();
    }, []);

    const openModal = (trigger) => {
        setSelectedTrigger(trigger);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedTrigger(null);
    };


    return (
        <div className="h-screen w-screen bg-slate-700">
            <Header />
            <div className="grid grid-cols-6 gap-6 mt-15">
                {triggers
                    .filter(trigger => trigger.approved)
                    .map(trigger => (
                    <TriggerCard
                        key={trigger._id}
                        triggerText={trigger.trigger}
                        replaceText={trigger.replaceText}
                        onOpenModal={() => openModal(trigger)}
                    />
                    ))}
            </div>

            <TriggerModal
                isOpen={modalIsOpen}
                onClose={closeModal}
                title="Trigger Output"
            >
                {selectedTrigger && (
                    <Output
                        triggerText={selectedTrigger.trigger}
                        replaceText={selectedTrigger.replaceText}
                     />
                )}
            </TriggerModal>
        </div>
    );

}


export default AllTriggers;