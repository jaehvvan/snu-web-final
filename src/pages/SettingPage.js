import SettingsIcon from '@mui/icons-material/Settings';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Button} from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';
import LyricsIcon from '@mui/icons-material/Lyrics';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const SettingPage = () => {
    const [team, setTeam] = useState('');
    const [teamName, setTeamName] = useState([]);
    const [year, setYear] = useState('');
    const [category, setCategory] = useState('');
    const [problem, setProblem] = useState('');

    const theme = createTheme({
        palette: {
            neutral: {
                main: '#fa9f4e',
                contrastText: 'black',
            },
        },
    });

    return (
    <div id="layoutDom">
        <div id="titleDom">
            <SettingsIcon fontSize="large"></SettingsIcon> Settings
        </div>
        <div id="teamDom">
            <FormControl fullWidth>
                <InputLabel>팀 수</InputLabel>
                <Select
                    value={team}
                    label="팀 수"
                    onChange={e => setTeam(e.target.value)}
                >
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                </Select>
            </FormControl>
        </div>
        {team &&
            <div id="teamNameDom">
                {Array.from(Array(team)).map(e =>
                    <TextField
                        helperText="팀 이름을 입력해 주세요"
                        label="팀 이름"
                                            
                    />)}
            </div>}
        <div id="yearDom">
            <FormControl fullWidth>
                <InputLabel>OO년대</InputLabel>
                <Select
                    value={year}
                    label="OO년대"
                    onChange={e => setYear(e.target.value)}
                >
                    <MenuItem value={"1990년대"}>1990년대</MenuItem>
                    <MenuItem value={"2000년대"}>2000년대</MenuItem>
                    <MenuItem value={"2010년대"}>2010년대</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div id="categoryDom">
            <FormControl fullWidth>
                <InputLabel>카테고리</InputLabel>
                <Select
                    value={category}
                    label="카테고리"
                    onChange={e => setCategory(e.target.value)}
                >
                    <MenuItem value={"국내"}>국내</MenuItem>
                    <MenuItem value={"해외"}>해외</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div id="numberOfProblemDom">
            <FormControl fullWidth>
                <InputLabel>문제 수</InputLabel>
                <Select
                    value={problem}
                    label="문제 수"
                    onChange={e => setProblem(e.target.value)}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div id="buttonDom">
            <ThemeProvider theme={theme}>
                <div>
                    <Button variant="outlined" size="large" onclick="" color="neutral">
                        <CampaignIcon></CampaignIcon> 사회자만 정답 보기
                    </Button>
                </div>
                <div>
                    <Button variant="outlined" size="large" color="neutral">
                        <LyricsIcon></LyricsIcon>
                        <Link to="/question">
                            게임 시작
                        </Link>
                    </Button>
                </div>
            </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
