import React from "react";
import "./Dashboard.css";

interface DashboardProps {
  className: string;
}

interface DocumentComponentProps {
  id: number;
  color: string;
  name: string;
  filesAmount: number;
  space: number;
}

const DocumentComponent = ({
  id,
  color,
  name,
  filesAmount,
  space,
}: DocumentComponentProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px",
      borderBottom: "1px solid #E0E7F1",
    }}
  >
    <div style={{ display: "flex", gap: "7px" }}>
      <div
        style={{
          height: "28px",
          width: "28px",
          borderRadius: "8px",
          background: color,
        }}
      ></div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "left",
          flexDirection: "column",
        }}
      >
        <h3>{name}</h3>
        <span
          style={{
            fontSize: "9px",
            lineHeight: "9px",
            letterSpacing: "0.05em",
            fontStyle: "normal",
            fontWeight: "normal",
            color: "#858A9D",
            marginTop: "4px",
            marginLeft: "-22px",
            height: "100%",
            alignContent: "center",
          }}
        >
          {filesAmount} files
        </span>
      </div>
    </div>
    <div className="space-wrapper">
      {" "}
      <span
        style={{
          fontSize: "9px",
          lineHeight: "9px",
          letterSpacing: "0.05em",
          fontStyle: "normal",
          fontWeight: "normal",
          color: "#343951",
        }}
      >
        {space} GB
      </span>
    </div>
  </div>
);

export const Dashboard = ({ className }: DashboardProps) => {
  const documents = [
    {
      id: 1,
      color: "#FF9F00",
      name: "Documents",
      filesAmount: 720,
      space: 200,
    },
    {
      id: 2,
      color: "#689FF8",
      name: "Documents",
      filesAmount: 720,
      space: 125,
    },
    {
      id: 3,
      color: "#4AC29D",
      name: "Documents",
      filesAmount: 720,
      space: 75,
    },
    {
      id: 4,
      color: "#BCBECA",
      name: "Documents",
      filesAmount: 720,
      space: 50,
    },
  ];

  return (
    <div className={`wrapper-dashboard ${className}`}>
      <section className="user-info">
        <div
          style={{
            display: "flex",
            gap: "16px",
            padding: "36px 0px 32px 36px",
          }}
        >
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "32px 24px 24px 0px",
          }}
        >
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
            <div className="border"></div>

            <div className="internal-circle">
              <div>85%</div>
              <span>Used</span>
            </div>
          </div>
          <div className="caption">
            <span
              style={{
                fontSize: "9px",
                lineHeight: "9px",
                letterSpacing: "0.05em",
                fontStyle: "normal",
                fontWeight: "normal",
                color: "#858A9D",
              }}
            >
              420.2 GB of 500 GB used
            </span>
          </div>
        </div>
      </section>
      <section className="documents-section">
        {documents.map((document) => (
          <DocumentComponent
            id={document.id}
            color={document.color}
            filesAmount={document.filesAmount}
            space={document.space}
            name={document.name}
          />
        ))}
      </section>
    </div>
  );
};
