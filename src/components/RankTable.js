import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useRecoilValue } from 'recoil';
import { AtomTeams } from '../store/atom';

const RankTable = () => {
  const teams = useRecoilValue(AtomTeams);
  const rows = [...teams].sort((x, y) => y.score - x.score);

  return (
    <TableContainer component={Paper} sx={{ width: '60%' }}>
      <Table aria-label="customized table" sx={{ fontSize: 40 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: 24 }}>순위</TableCell>
            <TableCell sx={{ fontSize: 24 }} align="right">
              팀 이름
            </TableCell>
            <TableCell sx={{ fontSize: 24 }} align="right">
              스코어
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={row.name}>
              <TableCell sx={{ fontSize: 20 }} component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell sx={{ fontSize: 20 }} align="right">
                {row.name}
              </TableCell>
              <TableCell sx={{ fontSize: 20 }} align="right">
                {row.score}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RankTable;
