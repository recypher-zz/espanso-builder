import { useState, useEffect } from 'react';
import Builder from '../components/Builder';
import Output from '../components/Output';
import TriggerCard from '../components/TriggerCard'
import Header from '../components/Header';
import axios from 'axios'
import { toast } from "react-toastify";


const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  const [text, setText] = useState("");
  const [multiline, setMultiline] = useState(false);
  const [replaceText, setReplaceText] = useState("");
  const [triggers, setTriggers] = useState([]);

  useEffect(() => {
    const fetchTriggers = async () => {
      const res = await axios.get(`${API_URL}/triggers/all`);
      setTriggers(res.data);
    };
    fetchTriggers();
  }, []);

  const handlePostData = () => {
    const dataToSend = {
      triggerText: text,
      multiline: multiline,
      replaceText: replaceText
    };

    axios.post(`${API_URL}/triggers/approval`, dataToSend)
      .then(response => {
        toast.success("✅ Trigger sent for approval!")
      })
      .catch(error => {
        toast.error("❌ Trigger failed to be sent.")
      });
  }

  return (
    <>
      <Header/>
      <div className="h-screen w-screen bg-slate-700">
        <div className="App">
          <Builder 
            text={text} 
            setText={setText} 
            replaceText={replaceText} 
            setReplaceText={setReplaceText} 
            multiline={multiline}
            setMultiline={setMultiline}
          />

          <Output triggerText={text} multiline={multiline} replaceText={replaceText}></Output>

          <div className="m-3 flex flex-col items-center">
            <div className="flex gap-4 mb-6">
              <button onClick={handlePostData} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send for Approval
              </button>
            </div>
            <div className="mt-20 flex flex-col items-center">
              <h1 className="text-3xl font-extrabold text-white">Most Recently Added</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {triggers
                .filter(trigger => trigger.approved)
                .map(trigger => (
                  <TriggerCard
                    key={trigger._id}
                    triggerText={trigger.trigger}
                    replaceText={trigger.replaceText}
                    setText={setText}
                    setReplaceText={setReplaceText}
                  >
                  </TriggerCard>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;