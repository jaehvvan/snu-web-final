import LyricsIcon from '@mui/icons-material/Lyrics';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import sample from '@stdlib/random-sample';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import musicData from '../components/Music.json';
import {
  AtomCategory,
  AtomMusicIdx,
  AtomMusics,
  AtomproblemCount,
  AtomTeams,
  AtomYear,
} from '../store/atom';

const SettingPage = () => {
  const [teamCount, setTeamCount] = useState(0);
  const [teams, setTeams] = useRecoilState(AtomTeams);
  const [musicIdx, setMusicIdx] = useRecoilState(AtomMusicIdx);
  const [year, setYear] = useRecoilState(AtomYear);
  const [category, setCategory] = useRecoilState(AtomCategory);
  const [problemCount, setProblemCount] = useRecoilState(AtomproblemCount);
  const [musics, setMusics] = useRecoilState(AtomMusics);

  const updateTeamCount = (value) => {
    setTeams(
      [...new Array(value)].map((x, idx) => {
        return {
          name: `Team ${idx}`,
          score: 0,
          id: idx,
        };
      }),
    );
    setTeamCount(value);
  };

  const theme = createTheme({
    typography: {
      fontFamily: '신서유기폰트',
    },
    palette: {
      neutral: {
        main: '#000000',
        contrastText: 'black',
      },
    },
  });

  const makeTeams = () => {
    const data = sample(
      musicData
        .map((data, index) => ({ ...data, id: index }))
        .filter((x) => year === 0 || (x.year >= year && x.year <= year + 10))
        .filter((x) => category === '' || x.category === category),
      { size: problemCount, replace: false },
    );

    setMusics(data);
    setMusicIdx(0);
    const indexes = data.map((d) => d.id).join(',');
    const checkSum = (data.reduce((acc, val) => acc + val.id, 0) % 96) + 1;
    navigator.clipboard.writeText(
      `https://test-31fdf.firebaseapp.com/answer?index=${indexes},${checkSum}`,
    );
  };

  const changeTeamName = (idx, value) => {
    setTeams(teams.map((team, index) => (index === idx ? { ...team, name: value } : team)));
  };

  return (
    <div id="layoutDom">
      <div id="titleDom">
        <SettingsIcon fontSize="large"></SettingsIcon> Settings
      </div>
      <div id="teamDom">
        <FormControl fullWidth>
          <InputLabel>팀 수</InputLabel>
          <Select value={teamCount} label="팀 수" onChange={(e) => updateTeamCount(e.target.value)}>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
      </div>
      {teamCount ? (
        <div id="teamNameDom">
          {teams.map((team, idx) => (
            <TextField
              key={team.id}
              helperText="팀 이름을 입력해 주세요"
              label="팀 이름"
              onChange={(e) => changeTeamName(idx, e.target.value)}
              value={team.name}
              margin="normal"
              inputProps={{ maxLength: 10 }}
            />
          ))}
        </div>
      ) : null}
      <div id="yearDom">
        <FormControl fullWidth>
          <InputLabel>OO년대</InputLabel>
          <Select value={year} label="OO년대" onChange={(e) => setYear(e.target.value)}>
            <MenuItem value={1990}>1990년대</MenuItem>
            <MenuItem value={2000}>2000년대</MenuItem>
            <MenuItem value={2010}>2010년대</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div id="categoryDom">
        <FormControl fullWidth>
          <InputLabel>카테고리</InputLabel>
          <Select value={category} label="카테고리" onChange={(e) => setCategory(e.target.value)}>
            <MenuItem value={'KPOP'}>국내</MenuItem>
            <MenuItem value={'POP'}>해외</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div id="numberOfProblemDom">
        <FormControl fullWidth>
          <InputLabel>문제 수</InputLabel>
          <Select
            value={problemCount}
            label="문제 수"
            onChange={(e) => setProblemCount(e.target.value)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div id="buttonDom">
        <ThemeProvider theme={theme}>
          <div className="startBtn">
            <Button
              disabled={teamCount === 0}
              variant="outlined"
              size="large"
              sx={{ padding: 0, fontSize: '20px', color: 'black' }}
              color="inherit"
              onClick={makeTeams}
            >
              <Link to="/question" className="startLink">
                <LyricsIcon sx={{ marginRight: '8px' }} />
                <span className="">게임 시작</span>
              </Link>
            </Button>
          </div>
        </ThemeProvider>
      </div>
      <div className="SettingPage__imgContainer">
        <div className="SettingPage__img SettingPage__img--left" />
        <div className="SettingPage__img SettingPage__img--right" />
      </div>
    </div>
  );
};

export default SettingPage;
