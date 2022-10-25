import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import 'tailwindcss/tailwind.css';
import './App.css';

const Hello = () => {
  const [Test, setTest] = useState('');
  const [Counter, setCounter] = useState(0);

  const invokeTest = async () => {
    const s: string = await window.electron.invokeTest();
    // eslint-disable-next-line no-console
    console.log(s);
    setTest(s);
  };

  const doTest = async () => {
    window.electron.printTest();
    setTest('It sent!');
  };

  const getCounter = async () => {
    setCounter(await window.electron.incrementTest());
  };

  return (
    <div>
      <div className="Hello">
        <img
          className="bg-gradient-to-tr from-blue-400 to-pink-500"
          width="200"
          alt="icon"
          src={icon}
        />
      </div>
      <h1 className="Title">exam-organiser</h1>
      <h2 className="text-3xl font-bold underline text-center font-sans">
        Test
      </h2>
      <h2 className="font-italic text-center">{Test}</h2>
      <h2 className="text-center">Counter: {Counter}</h2>
      <div className="space-x-2 mt-2">
        <button
          className="bg-black shadow-2xl mb-2"
          type="button"
          onClick={invokeTest}
        >
          <span role="img" aria-label="books">
            📚
          </span>
          Run an invoke Test!
        </button>
        <button className="bg-black shadow-2xl" type="button" onClick={doTest}>
          <span role="img" aria-label="books">
            📚
          </span>
          Run a different Test!
        </button>
      </div>
      <div className="space-x-2 mt-2 align-middle justify-center flex">
        <button
          className="bg-black shadow-2xl"
          type="button"
          onClick={getCounter}
        >
          Counter Test
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
