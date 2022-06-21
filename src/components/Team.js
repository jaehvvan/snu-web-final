import { Card, CardContent, Typography } from '@mui/material';

const Team = ({ onClickTeam, name, score }) => {
  return (
    <Card
      onClick={onClickTeam}
      sx={{ width: '100%', backgroundColor: 'rgb(251, 246, 222)', margin: 0.5 }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 24 }}>{name}</Typography>
        {score}
      </CardContent>
    </Card>
  );
};

export default Team;
