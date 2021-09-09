import React from "react";
import Grid from "@mui/material/Grid";
import MainButton from "./MainButton";
import { Fade, Typography } from "@mui/material";
import "./MainPage.css";
import MainVideo from "./MainVideo";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { logolic as LogoLic } from "./logolic";

const MainPage = () => {
  const [open, setOpen] = React.useState(false);
  const [info, setInfo] = React.useState<any>();

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "20vh",
          width: "100%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={open}>
          <Box sx={{ m: 2, textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "ghanachoco",
                color: grey[50],
                p: 2,
              }}
            >
              소상공인 모임 SoM
            </Typography>
          </Box>
        </Fade>
      </div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid container item xs={12} justifyContent="center">
          <Grid item sx={{ position: "relative" }}>
            <MainButton o={{ open, setOpen }} i={{ info, setInfo }} />
          </Grid>
        </Grid>
      </Grid>
      <MainVideo />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          height: "20vh",
          width: "100%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ m: 2, textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "ghanachoco",
              color: grey[50],
              p: 2,
            }}
          >
            {info ? `${info.user.displayName}님, 환영합니다!` : ""}
          </Typography>
        </Box>
      </div>
      <LogoLic />
    </>
  );
};

export default MainPage;
