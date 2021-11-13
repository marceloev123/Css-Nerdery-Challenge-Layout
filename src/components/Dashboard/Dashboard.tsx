import React from "react";
import "./Dashboard.css";

type Dashboard = {
  className: string;
};

export const Dashboard = ({ className }: Dashboard) => {
  return <div className={`wrapper-dashboard ${className}`}>hola</div>;
};
