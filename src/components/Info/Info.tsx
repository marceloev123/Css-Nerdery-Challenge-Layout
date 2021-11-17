import React from "react";
import "./Info.css";
import "../../pages/Home/Home.css";
import { RecentFiles } from "./RecentFiles/RecentFiles";
import { RecentlyUsed } from "./RecentlyUsed/RecentlyUsed";
import { SharedWithMe } from "./SharedWithMe/SharedWithMe";
import { MdSearch } from "react-icons/md";

export const Info = () => {
  return (
    <div className="display-content display-col">
      <div className="display-recent">
        <div className="search-wrapper">
          <div className="search-bar">
            <MdSearch
              style={{
                width: "15px",
                height: "15px",
                color: " #BCBECA",
              }}
            />
            <input className=".search-bar-input" placeholder="Search"></input>
          </div>
        </div>
        <RecentlyUsed />
        <RecentFiles />
        <SharedWithMe />
      </div>
    </div>
  );
};
