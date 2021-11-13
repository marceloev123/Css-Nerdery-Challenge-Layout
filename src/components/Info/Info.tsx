import React from "react";
import "./Info.css";
import { RecentFiles } from "./RecentFiles/RecentFiles";
import { RecentlyUsed } from "./RecentlyUsed/RecentlyUsed";
import { SharedWithMe } from "./SharedWithMe/SharedWithMe";

type InfoProps = {
  className: string;
};

export const Info = ({ className }: InfoProps) => {
  return (
    <div className={`display-content ${className}`}>
      <div className="display-recent">
        <div className="search-bar">
          <div
            style={{
              width: "15px",
              height: "15px",
              border: "1px solid #BCBECA",
              marginLeft: "12px",
              marginRight: "7px",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          />
          <span
            style={{
              color: "#BCBECA",
              fontWeight: 400,
              fontSize: "12px",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            Search
          </span>
        </div>
        <RecentlyUsed />
        <RecentFiles />
        <SharedWithMe />
      </div>
    </div>
  );
};
