import React from "react";
import "./RecentlyUsed.css";
import { MdMoreVert } from "react-icons/md";

type UseCardsProps = {
  id: number;
  title: string;
  createdDate: string;
};

const UsedCards = ({ id, title, createdDate }: UseCardsProps) => {
  return (
    <div className="card-container">
      <div
        style={{
          marginTop: "20px",
          marginRight: "16px",
          display: "flex",
          width: "99%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "31px",
              width: "35px",
              backgroundColor: "#FFD999",
              position: "absolute",
              marginTop: "5px",
            }}
          />
          <div
            style={{
              height: "31px",
              width: "35px",
              backgroundColor: "#FF9F00",
              position: "relative",
              marginLeft: "5px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            marginTop: "17px",
            flexBasis: "40%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              border: "1px solid #BEC0C8",
              position: "relative",
              background: "#FFFFFF",
              zIndex: 10,
              marginTop: "auto",
              marginBottom: "auto",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              width: "18px",
              height: "18px",
              border: "1px solid #BEC0C8",
              position: "relative",
              background: "#FFFFFF",
              zIndex: 10,
              marginTop: "auto",
              marginLeft: "-8px",
              marginBottom: "auto",
              borderRadius: "50%",
            }}
          />
          {id === 3 && (
            <div
              style={{
                width: "18px",
                height: "18px",
                border: "1px solid #BEC0C8",
                background: "#FFFFFF",
                position: "relative",
                zIndex: 100,
                marginLeft: "-8px",
                marginTop: "auto",
                marginBottom: "auto",
                borderRadius: "50%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <text style={{ color: "#343951", fontSize: "8px" }}>+3</text>
            </div>
          )}
        </div>
        <div
          style={{
            marginTop: "-9px",
            justifyContent: "center",
          }}
        >
          <MdMoreVert
            style={{
              color: "#C4C4C4",
              width: "1.2rem",
              height: "1.2rem",
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: "29px" }}>
        <h3 style={{ marginBottom: "10px" }}>{title}</h3>
        <p
          style={{
            fontSize: "9px",
            lineHeight: "9px",
            letterSpacing: "0.05em",
            fontStyle: "normal",
            fontWeight: "normal",
            color: "#858A9D",
          }}
        >
          Created: {createdDate}
        </p>
      </div>
    </div>
  );
};

export const RecentlyUsed = () => {
  const recentlyUsedList = [
    { id: 1, title: "App Project", createdDate: "20.02.2020" },
    {
      id: 2,
      title: "Project: Fitbit",
      createdDate: "28.02.2020",
    },
    {
      id: 3,
      title: "Client Documents",
      createdDate: "4.03.2020",
    },
  ];
  return (
    <section className="recent-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>Recently Used</h2>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "15px",
              height: "15px",
              border: "1px solid #BCBECA",
              marginTop: "auto",
              marginBottom: "auto",
              boxSizing: "border-box",
            }}
          />
          <div
            style={{
              width: "15px",
              height: "15px",
              border: "1px solid #BCBECA",
              marginTop: "auto",
              marginBottom: "auto",
              boxSizing: "border-box",
              marginLeft: "10px",
            }}
          />
        </div>
      </div>

      <div className="cards-container">
        {recentlyUsedList.map((recentItem) => (
          <UsedCards
            id={recentItem.id}
            key={recentItem.id}
            title={recentItem.title}
            createdDate={recentItem.createdDate}
          />
        ))}
      </div>
    </section>
  );
};
