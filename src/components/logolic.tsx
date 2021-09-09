import { grey } from "@mui/material/colors";
import React from "react";
import "./logolic.css";

/**
 * 로고 출처
 * @returns
 */
export const logolic = () => {
  return (
    <div style={{ position: "fixed", bottom: 0, zIndex: 3, color: grey[700] }}>
      Icons made by{" "}
      <a className="logolic" href="https://www.freepik.com" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a className="logolic" href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  );
};
