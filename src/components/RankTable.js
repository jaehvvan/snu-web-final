import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useRecoilValue } from 'recoil';
import { AtomTeams } from '../store/atom';

const RankTable = () => {
  const teams = useRecoilValue(AtomTeams);
  const rows = [...teams].sort((x, y) => y.score - x.score);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>순위</TableCell>
            <TableCell align="right">팀 이름</TableCell>
            <TableCell align="right">스코어</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RankTable;
