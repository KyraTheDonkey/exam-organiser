import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  const [Name, setName] = useState('');

  const doTest = () => {
    setName('Hello!');
  };

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1 className="Title">exam-organiser</h1>
      <h2 className="Title">{Name}</h2>
      <div className="Hello">
        <button type="button" onClick={doTest}>
          <span role="img" aria-label="books">
            📚
          </span>
          Run a Test!
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
