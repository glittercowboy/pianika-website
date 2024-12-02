import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SamplePack from './components/SamplePack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample-pack" element={<SamplePack />} />
      </Routes>
    </Router>
  );
}

export default App;