import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SamplePack from './components/SamplePack';
import InTheStudio from './components/InTheStudio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/in-the-studio" element={<InTheStudio />} />
        <Route path="/sample-pack" element={<SamplePack />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;