import React, { useState } from "react";
import "./Sidebar.css";
import {
  MdAdd,
  MdArticle,
  MdClose,
  MdDescription,
  MdHome,
  MdMenu,
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

  return (
    <li className="wrapper-list">
      <Link
        to={path}
        className={match ? "nav-link active-nav-link" : "nav-link"}
      >
        {icon}
        <text className="route-name">{routeName}</text>
      </Link>
    </li>
  );
};

const Popover = () => {
  return (
    <div className="pop-over">
      <ul className="pop-over-list">
        <li>
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid white",
            }}
          ></div>
          <text>Upload files</text>
        </li>
        <li>
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid white",
            }}
          ></div>
          <text>Upload folder</text>
        </li>
        <li>
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid white",
            }}
          ></div>
          <text>Upload files</text>
        </li>
        <li>
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid white",
            }}
          ></div>
          <text>New folder</text>
        </li>
        <li>
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid white",
            }}
          ></div>
          <text>Home</text>
        </li>
      </ul>
    </div>
  );
};



export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
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
    <div>
      <button className="toggle" onClick={() => setOpenSidebar(true)}>
        <MdMenu style={{ color: "white", margin: "auto", display: "flex" }} />
      </button>
      <div
        className={
          openSidebar
            ? "sidebar-wrapper sidebar-wrapper-open"
            : "sidebar-wrapper"
        }
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
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
            <button
              className="close-button"
              onClick={() => setOpenSidebar(false)}
            >
              <MdClose
                style={{ color: "white", margin: "auto", display: "flex" }}
              />
            </button>
          </div>
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
          {showPopover ? <Popover /> : null}

          <button
            className="btn-container"
            onClick={() => setShowPopover(!showPopover)}
          >
            <p className="btn-text">Create New</p>
            <div className="btn-icon">
              <MdAdd />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
