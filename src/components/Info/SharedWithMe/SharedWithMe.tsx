import React from "react";
import "./SharedWithMe.css";
import { SharedCard } from "./SharedCard/SharedCard";

export const SharedWithMe = () => {
  const sharedWithMeList = [
    { id: 1, title: "Landing Page", createdDate: "20.02.2020" },
    {
      id: 2,
      title: "Illustration Pack",
      createdDate: "28.02.2020",
    },
    {
      id: 3,
      title: "CV Desgin",
      createdDate: "4.03.2020",
    },
  ];
  return (
    <section className="shared-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "14px",
        }}
      >
        <h2>Shared with me</h2>
        <h3>View All</h3>
      </div>

      <div className="shared-cards-container">
        {sharedWithMeList.map(sharedItem => (
          <SharedCard sharedItem={sharedItem} />
        ))}
      </div>
    </section>
  );
};
