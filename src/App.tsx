import React from "react";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-files" element={<div>files</div>} />
        <Route path="/recent-files" element={<div>files</div>} />
        <Route path="/shared-files" element={<div>files</div>} />
        <Route path="/trash" element={<div>trash</div>} />
      </Routes>
    </div>
  );
}

export default App;
