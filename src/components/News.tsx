import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface NewsProps {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
}

const News: React.FC<NewsProps> = (props) => {
  const open = props.open;
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="news"
        aria-describedby="news-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textAlign: "center", mb: 2 }}
            id="news"
            variant="h4"
            role="h2"
          >
            사회적 거리두기 연장
          </Typography>
          <img
            width="100%"
            src="https://t1.daumcdn.net/cfile/tistory/996E76485C1F70711B"
            alt="심영"
          />
          <Typography variant="h6" component="h2" sx={{ mt: 2, mb: 1, ml: 1 }}>
            <b>4주간 추가로 4단계 연장</b>
          </Typography>
          <ul id="news-description">
            <li>예방접종 완료자*에 한해서만 사적모임 예외 적용</li>
            <li>4단계 식당·카페의 매장 내 취식가능 시간을 변경</li>
            <li>21 → 22시로</li>
          </ul>
        </Box>
      </Modal>
    </div>
  );
};

export default News;
