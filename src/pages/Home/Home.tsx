import React from "react";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { Info } from "../../components/Info/Info";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./Home.css";
export const Home = () => {
  return (
    <div className="wrapper">
      <Sidebar className="sidebar-col" />
      <Info className="display-col" />
      <Dashboard className="dashboard-col" />
    </div>
  );
};
