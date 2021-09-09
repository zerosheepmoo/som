import { blue } from "@mui/material/colors";
import React from "react";
import Feed from "./Feed";
import "./BoardPage.css";
import Fab from "@mui/material/Fab";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
// import AppBar from "@mui/material/AppBar";

const BoardPage = () => {
  return (
    <div
      style={{
        backgroundColor: blue[50],
        minHeight: "100vh",
      }}
    >
      <Paper sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2" role="h1">
          Recent Post
        </Typography>
      </Paper>
      <Feed />
      <Fab
        color="primary"
        aria-label="home"
        sx={{ position: "fixed", right: 30, bottom: 30, color: "#fafafa" }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <HomeOutlinedIcon />
      </Fab>
    </div>
  );
};

export default BoardPage;
