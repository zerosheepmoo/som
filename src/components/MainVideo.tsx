import React from "react";
import ReactPlayer from "react-player";
// @ts-ignore
import myVideo from "./vpb.mp4";
import "./MainVideo";

const MainVideo = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "-150vw",
          top: 0,
          zIndex: -1,
          overflow: "hidden",
          height: "120vh",
          backgroundColor: "rgba(122,122,122, 60%)",
          width: "400vw",
        }}
        className="video"
      ></div>
      <ReactPlayer
        loop
        style={{
          position: "fixed",
          left: "-175vw",
          top: "-10vh",
          zIndex: -2,
          overflow: "hidden",
          height: "100vh",
        }}
        muted
        playing
        width="450vw"
        height="120vh"
        url={`${myVideo}`}
      ></ReactPlayer>
    </>
  );
};

export default MainVideo;
