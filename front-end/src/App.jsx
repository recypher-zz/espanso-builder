import Builder from './components/Builder';
import Output from './components/Output';
import TriggerCard from './components/TriggerCard'
import axios from 'axios'
// import FormBuilder from './components/FormBuilder';
import { useState, useEffect } from 'react';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [text, setText] = useState("");
  const [multiline, setMultiline] = useState(false); // Changed to boolean
  const [replaceText, setReplaceText] = useState("");
  const [triggers, setTriggers] = useState([]);
  // const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const fetchTriggers = async () => {
      const res = await axios.get(`${API_URL}/data`);
      console.log(res.data);
      setTriggers(res.data);
      console.log(setTriggers)
    };
    fetchTriggers();
  }, []);

  const handlePostData = () => {
    const dataToSend = {
      triggerText: text,
      multiline: multiline,
      replaceText: replaceText
    };

    console.log(dataToSend);

    axios.post(`${API_URL}/data`, dataToSend)
      .then(response => {
        console.log('Data sent sucessfully:', response.data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  }

  const handleGetData = () => {
    axios.get(`${API_URL}/data`)
      .then(response => {
        console.log('Data retrieved: ' + JSON.stringify(response.data, null, 2));
      })
  }

  return (
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
        {/* {showBox && <FormBuilder />} */}
        <Output triggerText={text} multiline={multiline} replaceText={replaceText}></Output>
        <button onClick={handlePostData} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send Data to API
        </button>
        <button onClick={handleGetData} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Retrieve Data from API
        </button>
          {triggers.map(trigger => (
            <TriggerCard
              key={trigger._id}
              triggerText={trigger.trigger}
            >
            </TriggerCard>
          ))}
      </div>
    </div>
  )
}

export default App;
