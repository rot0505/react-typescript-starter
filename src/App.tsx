import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Survey } from "pages/Survey";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Survey />} />
      </Routes>
    </Router>
  );
};

export default App;
