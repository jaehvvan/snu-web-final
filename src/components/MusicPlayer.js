import { Grid } from "@mui/material";

const MusicPlayer = () => {
  return (
    <Grid item>
      <div className="MusicPlayer">
        <div className="MusicPlayer__img"></div>
        <div className="MusicPlayer__btnContainer">
          <button className="MusicPlayer__btn" name="1">
            1초 듣기
          </button>
          <button className="MusicPlayer__btn" name="2">
            2초 듣기
          </button>
          <button className="MusicPlayer__btn" name="all">
            전체 듣기
          </button>
        </div>
      </div>
    </Grid>
  );
};

export default MusicPlayer;
