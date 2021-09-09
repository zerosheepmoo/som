import React, { useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LoginIcon from "@mui/icons-material/VpnKeyOutlined";
import LogoSVG from "./logosvg";
import CloseIcon from "@mui/icons-material/Close";
import { blue } from "@mui/material/colors";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { SignInFunc } from "../utils/firebase";
import { LogoutOutlined } from "@mui/icons-material";
import News from "./News";

enum ACTION_NAME {
  LOGIN = "로그인",
  WRITE = "작성하기",
  BOARD = "게시판",
  NEWS = "새소식",
  LOGOUT = "로그아웃",
}

const actions = [
  { icon: <LoginIcon fontSize="large" />, name: ACTION_NAME.LOGIN },
  { icon: <CreateOutlinedIcon fontSize="large" />, name: ACTION_NAME.WRITE },
  { icon: <SmsOutlinedIcon fontSize="large" />, name: ACTION_NAME.BOARD },
  { icon: <MailOutlineIcon fontSize="large" />, name: ACTION_NAME.NEWS },
];

const changedActions = [
  { icon: <LogoutOutlined fontSize="large" />, name: ACTION_NAME.LOGOUT },
];

interface MainButtonProps {
  o: any;
  i: any;
}

const MainButton = (props: MainButtonProps) => {
  const { open, setOpen } = props.o;
  const { info, setInfo } = props.i;
  const [isModalOpened, setIsModalOpened] = useState(false);

  let idx = -1;
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    idx = -1;
    setOpen(false);
  };

  const handleMultiFunc: React.MouseEventHandler = async (e) => {
    let t = e.target as any;
    const l =
      t.ariaLabel ??
      t.parentElement.ariaLabel ??
      t.parentElement.parentElement.ariaLabel;
    if (l === ACTION_NAME.LOGIN) {
      const _info = await SignInFunc();
      console.log(_info);
      setInfo(_info);
    } else if (l === ACTION_NAME.NEWS) {
      setIsModalOpened(true);
    } else if (l === ACTION_NAME.WRITE) {
      if (!info) {
        alert("로그인하세요!");
        return;
      }
      alert("글을 작성합니다!");
    } else if (l === ACTION_NAME.BOARD) {
      window.location.href = "/board";
    } else if (l === ACTION_NAME.LOGOUT) {
      setInfo(null);
    }
  };

  const PLUS_WIDTH = 72;
  const calculate_addition_width = (index: number) => {
    if (index === 1) {
      return -4;
    } else if (index === 2) {
      return 4;
    }
    return 0;
  };
  const calculate_height = (index: number) => {
    if (index === 2 || index === 1) {
      return -45;
    }
    return 0;
  };

  return (
    <Box>
      <SpeedDial
        ariaLabel="Main Button"
        direction="down"
        icon={
          open ? (
            <CloseIcon
              color="primary"
              sx={{ color: "#fafafa", fontSize: 100 }}
            />
          ) : (
            <LogoSVG sx={{ fontSize: 100 }} />
          )
        }
        onClose={handleClose}
        onOpen={handleOpen}
        FabProps={{ sx: { width: 200, height: 200 } }}
      >
        {actions.map((action) => {
          idx++;
          return (
            <SpeedDialAction
              sx={{
                position: "absolute",
                right: idx * PLUS_WIDTH - 70 + calculate_addition_width(idx),
                bottom: calculate_height(idx),
                width: 100,
                height: 100,
                backgroundColor: blue[50],
              }}
              key={idx === 0 && info ? changedActions[idx].name : action.name}
              icon={idx === 0 && info ? changedActions[idx].icon : action.icon}
              tooltipTitle={
                idx === 0 && info ? changedActions[idx].name : action.name
              }
              tooltipPlacement="bottom"
              onClick={(e) => handleMultiFunc(e)}
            />
          );
        })}
      </SpeedDial>
      <News open={isModalOpened} setOpen={setIsModalOpened} />
    </Box>
  );
};

export default MainButton;
