import React from "react";
import "./Sidebar.css";
import {
  MdAdd,
  MdArticle,
  MdDescription,
  MdHome,
  MdOutlineIosShare,
  MdCloudDownload,
} from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Link, useMatch } from "react-router-dom";

type IndexProps = {
  routeName: string;
  path: string;
  icon: Object;
};

const Index = ({ icon, path, routeName }: IndexProps) => {
  const match = useMatch(path);
  console.log(match);
  return (
    <li className="wrapper-list">
      <Link
        to={path}
        className={match ? "nav-link active-nav-link" : "nav-link"}
      >
        {icon}
        <span className="route-name">{routeName}</span>
      </Link>
    </li>
  );
};

export const Sidebar = () => {
  const listIndex = [
    {
      id: 1,
      routeName: "Home",
      path: "/",
      icon: (
        <MdHome
          style={{
            width: "15px",
            height: "15px",
            color: " #FFFFFF",
          }}
        />
      ),
    },
    {
      id: 2,
      routeName: "My Files",
      path: "/my-files",
      icon: (
        <MdArticle
          style={{
            width: "15px",
            height: "15px",
            color: " #FFFFFF",
          }}
        />
      ),
    },
    {
      id: 3,
      routeName: "Recent Files",
      path: "/recent-files",
      icon: (
        <MdDescription
          style={{
            width: "15px",
            height: "15px",
            color: " #FFFFFF",
          }}
        />
      ),
    },
    {
      id: 4,
      routeName: "Shared Field",
      path: "/shared-field",
      icon: (
        <MdOutlineIosShare
          style={{
            width: "15px",
            height: "15px",
            color: " #FFFFFF",
          }}
        />
      ),
    },
    {
      id: 5,
      routeName: "Field Request",
      path: "/field-request",
      icon: (
        <MdCloudDownload
          style={{
            width: "15px",
            height: "15px",
            color: " #FFFFFF",
          }}
        />
      ),
    },
    {
      id: 6,
      routeName: "Trash",
      path: "/trash",
      icon: (
        <FaTrash
          style={{
            width: "15px",
            height: "15px",
            color: " #FFFFFF",
          }}
        />
      ),
    },
  ];
  return (
    <div className="sidebar-wrapper">
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
            <Index
              key={index.id}
              icon={index.icon}
              path={index.path}
              routeName={index.routeName}
            />
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
