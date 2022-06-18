import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Hint from '../components/Hint';
import MusicPlayer from '../components/MusicPlayer';
import QuestionProgress from '../components/QuestionProgress';
import ScoreBoard from '../components/ScoreBoard';

const QuestionPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <ScoreBoard />
        <QuestionProgress />
        <MusicPlayer />
        <Hint />
        <Link to="/youtube">정답 공개</Link>
      </Grid>
    </Box>
  );
};

export default QuestionPage;
