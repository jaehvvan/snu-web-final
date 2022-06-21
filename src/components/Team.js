import { Card, CardContent, Grid, Typography } from '@mui/material';

const Team = ({ onClickTeam, name, score }) => {
  return (
    <Card
      onClick={onClickTeam}
      sx={{
        width: '100%',
        backgroundColor: 'rgb(251, 246, 222)',
        margin: 0.5,
      }}
    >
      <Grid container justifyContent={'center'}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }}>{name}</Typography>
          <Typography sx={{ fontSize: 24, textAlign: 'center' }}> {score}</Typography>
        </CardContent>
      </Grid>
    </Card>
  );
};

export default Team;
