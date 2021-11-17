import React from "react";


type SharedCardProps = {
  sharedItem: {
    id: number;
    title: string;
    createdDate: string;
  };
};

export const SharedCard = ({ sharedItem }: SharedCardProps) => {
  return (
    <div className="shared-card-container">
      <div
        style={{
          marginTop: "16px",
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
                sharedItem.id === 1
                  ? "1px solid #FF6860"
                  : sharedItem.id === 2
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
          {sharedItem.id === 2 && (
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
        <h3 style={{ marginBottom: "2px" }}>{sharedItem.title}</h3>
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
          Created: {sharedItem.createdDate}
        </p>
      </div>
    </div>
  );
};