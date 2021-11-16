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
        <Route
          path="/my-files"
          element={
            <div>
              <h2>My files</h2>
            </div>
          }
        />
        <Route
          path="/recent-files"
          element={
            <div>
              <h2>Recent files</h2>
            </div>
          }
        />
        <Route
          path="/shared-field"
          element={
            <div>
              <h2>Shared Field</h2>
            </div>
          }
        />
        <Route
          path="/field-request"
          element={
            <div>
              <h2>Field Request</h2>
            </div>
          }
        />
        <Route
          path="/trash"
          element={
            <div>
              <h2>Trash</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
