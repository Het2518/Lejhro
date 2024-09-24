import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LejhroBlogUI from './components/LejhroBlogs';

function App() {
  return (
    <Router>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/*" element={<LejhroBlogUI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;