import React from "react";
import "./RecentFiles.css";
import { MdOutlineMoreHoriz } from "react-icons/md";

type FileProps = {
  color: string;
  name: string;
  members: number;
  lastModified: string;
};

const File = ({ color, name, members, lastModified }: FileProps) => {
  return (
    <div className="row-files">
      <div className="file-name">
        <div
          className="file-name-icon"
          style={{
            width: "21px",
            height: "21px",
            background: color,
            borderRadius: "5px",
            marginRight: "12px",
          }}
        ></div>
        <h3>{name}</h3>
      </div>

      <h3 className="file-members">{members} members</h3>
      <h3 className="file-last-modified">{lastModified}</h3>
      <div className="file-icon">
        <MdOutlineMoreHoriz style={{ color: "#858A9D" }} />
      </div>
    </div>
  );
};

export const RecentFiles = () => {
  const filesList = [
    {
      id: 1,
      color: "#FF9F00",
      name: "Travel Landing Page",
      members: 5,
      lastModified: "Mar 8, 2020",
    },
    {
      id: 2,
      color: "#4AC29D",
      name: "True Photos",
      members: 12,
      lastModified: "Mar 8, 2020",
    },
    {
      id: 3,
      color: "#FF6860",
      name: "Dashboard Structure",
      members: 10,
      lastModified: "Mar 9, 2020",
    },
    {
      id: 4,
      color: "#FF9F00",
      name: "Character Ilustration",
      members: 3,
      lastModified: "Mar 10, 2020",
    },
  ];
  return (
    <section className="wrapper-files">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "14px",
        }}
      >
        <h2>Recent Files</h2>
        <h3>View All</h3>
      </div>

      <div className="nested-grid ">
        <div className="grid-header">
          <h3 className="grid-header-1">Name</h3>
          <h3 className="grid-header-2">Members</h3>
          <h3 className="grid-header-3">Last Modified</h3>
        </div>
        {filesList.map((file) => (
          <File
            key={file.id}
            color={file.color}
            name={file.name}
            members={file.members}
            lastModified={file.lastModified}
          />
        ))}
      </div>
    </section>
  );
};
