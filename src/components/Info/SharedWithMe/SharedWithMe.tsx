import React from "react";
import "./SharedWithMe.css";

type CardsProps = {
  id: number;
  title: string;
  createdDate: string;
};

const Cards = ({ id, title, createdDate }: CardsProps) => {
  console.log(id);
  return (
    <div className="shared-card-container">
      <div
        style={{
          marginTop: "13px",
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "26px",
            width: "30px",
            backgroundColor: "#FF9F00",
            position: "relative",
          }}
        />

        <div
          style={{
            display: "flex",
            position: "relative",

            flexBasis: "40%",
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              border: "1px solid #4AC29D",
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
              border:
                id === 1
                  ? "1px solid #FF6860"
                  : id === 2
                  ? "1px solid  #FF6860"
                  : "1px solid #FF9F00",
              position: "relative",
              background: "#FFFFFF",
              zIndex: 10,
              marginTop: "auto",
              marginLeft: "-8px",
              marginBottom: "auto",
              borderRadius: "50%",
            }}
          />
          {id === 2 && (
            <div
              style={{
                width: "18px",
                height: "18px",
                border: "1px solid #FF9F00",
                background: "#FFFFFF",
                position: "relative",
                zIndex: 100,
                marginLeft: "-8px",
                marginTop: "auto",
                marginBottom: "auto",
                borderRadius: "50%",
              }}
            />
          )}
        </div>
      </div>
      <div style={{ marginTop: "6px" }}>
        <h3 style={{ marginBottom: "2px" }}>{title}</h3>
        <p
          style={{
            fontSize: "9px",
            lineHeight: "10px",
            letterSpacing: "0.05em",
            fontStyle: "normal",
            fontWeight: "normal",
            color: "#858A9D",
            margin: "0",
          }}
        >
          Created: {createdDate}
        </p>
      </div>
    </div>
  );
};

export const SharedWithMe = () => {
  const recentlyUsedList = [
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

      <div className="cards-container">
        {recentlyUsedList.map((recentItem) => (
          <Cards
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
