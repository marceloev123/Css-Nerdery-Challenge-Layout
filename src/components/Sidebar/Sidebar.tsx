import React from "react";
import "./Sidebar.css";
import { MdAdd } from "react-icons/md";

type IndexProps = {
  routeName: string;
};

const Index = ({ routeName }: IndexProps) => {
  return (
    <li>
      <a href="/#">
        <div
          style={{
            width: "15px",
            height: "15px",
            border: "1px solid #FFFFFF",
          }}
        />
        <span className="route-name">{routeName}</span>
      </a>
    </li>
  );
};

type SidebarProps = {
  className: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const listIndex = [
    { id: 1, routeName: "Home" },
    { id: 2, routeName: "My Files" },
    { id: 3, routeName: "Recent Files" },
    { id: 4, routeName: "Shared Field" },
    { id: 5, routeName: "Field Request" },
    { id: 6, routeName: "Trash" },
  ];
  return (
    <div className={`sidebar-wrapper ${className}`}>
      <div>
        <div
          style={{
            width: "74px",
            height: "21px",
            marginTop: "36px",
            marginLeft: "32px",
            marginBottom: "51px",
            borderRadius: "5px",
            background:
              "linear-gradient(270deg, #689EF8 0%, #FF6860 56.25%, #FF9F00 100%)",
          }}
        ></div>
        <ul className="nav-list">
          {listIndex.map((index) => (
            <Index key={index.id} routeName={index.routeName} />
          ))}
        </ul>
      </div>

      <div className="create-section">
        <button className="btn-container">
          <p className="btn-text">Create New</p>
          <div className="btn-icon">
            <MdAdd />
          </div>
        </button>
      </div>
    </div>
  );
};
