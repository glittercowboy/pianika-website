import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SamplePack from './components/SamplePack';
import InTheStudio from './components/InTheStudio';
import MailingList from './components/MailingList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soundpack" element={<SamplePack />} />
        <Route path="/in-the-studio" element={<InTheStudio />} />
        <Route path="/mailing-list" element={<MailingList />} />
      </Routes>
    </Router>
  );
}

export default App;