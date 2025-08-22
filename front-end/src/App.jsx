import Builder from './components/Builder';
import Output from './components/Output';
import axios from 'axios'
// import FormBuilder from './components/FormBuilder';
import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [multiline, setMultiline] = useState(false); // Changed to boolean
  const [replaceText, setReplaceText] = useState("");
  // const [showBox, setShowBox] = useState(false);

  const apiCall = () => {
    axios.get('http://espansobuilder.niemergk.com:8080').then((data) => {
      console.log(data);
    })
  }

  const handlePostData = () => {
    const dataToSend = {
      triggerText: text,
      multiline: multiline,
      replaceText: replaceText
    };

    console.log(dataToSend);

    axios.post('http://espansobuilder.niemergk.com:8080/data', dataToSend)
      .then(response => {
        console.log('Data sent sucessfully:', response.data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
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
      </div>
    </div>
  )
}

export default App;
