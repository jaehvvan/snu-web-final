import { Card, CardContent, Typography } from '@mui/material';

const Rank = ({ name, score }) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }}>{name}</Typography>
        {score}
      </CardContent>
    </Card>
  );
};

export default Rank;