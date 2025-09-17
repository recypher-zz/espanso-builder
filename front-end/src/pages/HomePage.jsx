import { useState, useEffect } from "react";
import Builder from "../components/Builder";
import Output from "../components/Output";
import TriggerCard from "../components/TriggerCard";
import TriggerModal from "../components/TriggerModal";
import Header from "../components/Header";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  const [text, setText] = useState("");
  const [multiline, setMultiline] = useState(false);
  const [replaceText, setReplaceText] = useState("");
  const [triggers, setTriggers] = useState([]);
  const [selectedTrigger, setSelectedTrigger] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
  const controller = new AbortController();

  const fetchTriggers = async () => {
      try {
        const res = await axios.get(`${API_URL}/triggers/most-recent`, {
          signal: controller.signal,
        });
        setTriggers(res.data);
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.error(err);
        }
      }
    };

    fetchTriggers();
    return () => controller.abort();
  }, []);

  const handlePostData = () => {
    const dataToSend = {
      triggerText: text,
      multiline: multiline,
      replaceText: replaceText,
    };

    axios
      .post(`${API_URL}/triggers/approval`, dataToSend)
      .then(() => {
        toast.success("✅ Trigger sent for approval!");
      })
      .catch(() => {
        toast.error("❌ Trigger failed to be sent.");
      });
  };

  const openModal = (trigger) => {
    setSelectedTrigger(trigger);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedTrigger(null);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-800 to-slate-700 flex flex-col items-center p-4">
        <div className="App w-full mx-auto px-6 py-12">
          {/* Builder & Output Section */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 mb-12">
            <Builder
              text={text}
              setText={setText}
              replaceText={replaceText}
              setReplaceText={setReplaceText}
              multiline={multiline}
              setMultiline={setMultiline}
            />

            <div className="mt-8">
              <Output
                triggerText={text}
                multiline={multiline}
                replaceText={replaceText}
              />
            </div>

            <div className="flex justify-center mt-10">
              <button
                onClick={handlePostData}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-transform hover:scale-105"
              >
                Send for Approval
              </button>
            </div>
          </div>

          {/* Triggers Section */}
          <div className="text-center mb-10 mt-10">
            <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-sm">
              Most Recently Added Triggers
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {triggers
              .filter((trigger) => trigger.approved)
              .map((trigger) => (
                <TriggerCard
                  key={trigger._id}
                  triggerText={trigger.trigger}
                  replaceText={trigger.replaceText}
                  onOpenModal={() => openModal(trigger)}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <TriggerModal isOpen={modalIsOpen} onClose={closeModal} title="Trigger Output">
        {selectedTrigger && (
          <Output
            triggerText={selectedTrigger.trigger}
            replaceText={selectedTrigger.replaceText}
          />
        )}
      </TriggerModal>
    </>
  );
}

export default HomePage;
