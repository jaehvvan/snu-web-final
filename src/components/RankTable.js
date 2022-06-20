import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { useRecoilState } from 'recoil';
import { AtomTeams } from '../store/atom';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#ff9d5c',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
  body: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    // '#ffffff',
    // opacity: 0.5,
    color: 'black',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    maxWidth: 500,
  },
});

const CustomizedTables = () => {
  const [teams, setTeams] = useRecoilState(AtomTeams);
  const rows = [...teams].sort((x, y) => y.score - x.score);
  const classes = useStyles();

  return (
    <TableContainer class="container" component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>순위</StyledTableCell>
            <StyledTableCell align="right">팀 이름</StyledTableCell>
            <StyledTableCell align="right">스코어</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.score}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;
