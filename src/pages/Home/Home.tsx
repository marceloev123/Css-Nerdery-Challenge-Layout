import React from "react";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { Info } from "../../components/Info/Info";
import "./Home.css";
export const Home = () => {
  return (
    <div className="wrapper">
      <Info />
      <Dashboard />
    </div>
  );
};
