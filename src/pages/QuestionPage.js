import QuestionProgress from '../components/QuestionProgress';
import ScoreBoard from '../components/ScoreBoard';
import MusicPlayer from '../components/MusicPlayer';
import Hint from '../components/Hint';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

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
