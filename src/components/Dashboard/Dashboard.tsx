import React from "react";
import "./Dashboard.css";
import "../../pages/Home/Home.css";
import border from "../../assets/border.svg";
import { Document } from "./Document/Document";

export const Dashboard = () => {
  const documents = [
    {
      id: 1,
      color: "#FF9F00",
      name: "Documents",
      filesAmount: 720,
      storage: 200,
    },
    {
      id: 2,
      color: "#689FF8",
      name: "Documents",
      filesAmount: 720,
      storage: 125,
    },
    {
      id: 3,
      color: "#4AC29D",
      name: "Documents",
      filesAmount: 720,
      storage: 75,
    },
    {
      id: 4,
      color: "#BCBECA",
      name: "Documents",
      filesAmount: 720,
      storage: 50,
    },
  ];

  return (
    <div className="wrapper-dashboard dashboard-col">
      <section className="user-info">
        <div className="user-info-left-data">
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "#C4C4C4",
            }}
          ></div>
          <div
            style={{
              width: " 16px",
              height: "16px",
              backgroundColor: "#C4C4C4",
            }}
          ></div>
        </div>
        <div className="user-info-right-data ">
          <div>Name</div>
          <div
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#C4C4C4",
              borderRadius: "50%",
            }}
          ></div>
        </div>
      </section>
      <section className="storage-section">
        <div>
          <h2>Storage</h2>
          <div className="circle">
            <img alt="border" className="border" src={border}></img>

            <div className="internal-circle">
              <div>85%</div>
              <text>Used</text>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <text className="storage-caption">420.2 GB of 500 GB used</text>
          </div>
        </div>
      </section>
      <section className="documents-section">
        {documents.map(document => (
          <Document document={document} />
        ))}
      </section>
      <section className="buy-section">
        <div className="more-space-section">
          <div className="linear-div"></div>
          <h3
            style={{
              fontSize: "12px",
              lineHeight: "14px",
              marginTop: "0px",
            }}
          >
            Buy more space now!
          </h3>
          <text
            style={{
              fontSize: "8px",
              lineHeight: "9px",
              letterSpacing: "0.05em",
              fontStyle: "normal",
              fontWeight: "normal",
              color: " #858A9D",
            }}
          >
            Upgrade to cloud premium
          </text>

          <button className="upgrade-btn">Upgrade Account!</button>
        </div>
      </section>
    </div>
  );
};
