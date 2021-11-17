import React from "react";
import "./Document.css";
interface DocumentProps {
  document: {
    id: number;
    color: string;
    name: string;
    filesAmount: number;
    storage: number;
  };
}
export const Document = ({ document }: DocumentProps) => (
  <div className="document-wrapper">
    <div style={{ display: "flex", gap: "8px" }}>
      <div
        style={{
          height: "28px",
          width: "28px",
          borderRadius: "8px",
          background: document.color,
        }}
      ></div>
      <div
       className="document-info-wrapper"
      >
        <h3>{document.name}</h3>
        <text className="document-files-amount">
          {document.filesAmount} files
        </text>
      </div>
    </div>
    <div className="space-wrapper">
      <text className="document-storage">{document.storage} GB</text>
    </div>
  </div>
);
