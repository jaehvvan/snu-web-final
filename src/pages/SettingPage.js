import CampaignIcon from '@mui/icons-material/Campaign';
import LyricsIcon from '@mui/icons-material/Lyrics';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  AtomCategory,
  AtomMusics,
  AtomproblemCount,
  AtomTeams,
  AtomUser,
  AtomYear
} from '../store/atom';

const SettingPage = () => {
  const [teamCount, setTeamCount] = useState('');
  const [teams, setTeams] = useRecoilState(AtomTeams);
  const [user, setUser] = useRecoilState(AtomUser);
  const [year, setYear] = useRecoilState(AtomYear);
  const [category, setCategory] = useRecoilState(AtomCategory);
  const [problemCount, setProblemCount] = useRecoilState(AtomproblemCount);
  const [musics, setMusics] = useRecoilState(AtomMusics);

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#fa9f4e',
        contrastText: 'black',
      },
    },
  });

  const sendEmail = async (e) => {
    if (musics.length === 0) {
      alert('먼저 조회 조건을 잘 설정해 주세용!');
      return;
    }
    const params = {
      service_id: 'service_c0hwjju',
      user_id: 'l0CQc8UPXor38zjrK',
      template_id: 'template_82r0e7p',
      template_params: {
        user_name: user.name,
        user_email: user.email,
        message: JSON.stringify(musics),
      },
    };

    const headers = {
      'Content-type': 'application/json',
    };

    const options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(params),
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', options).then((httpResponse) => {
      if (httpResponse.ok) {
        alert('메일 발송 완료!!');
      }
    });
  };

  const changeTeamName = (idx, value) => {
    if (teams.length === 0) {
      setTeams([...new Array(teamCount)].map((_) => Object));
    }
    setTeams(teams.map((team) => (team.id === idx ? { ...team, name: value } : team)));
  };

  return (
    <div id="layoutDom">
      <div id="titleDom">
        <SettingsIcon fontSize="large"></SettingsIcon> Settings
      </div>
      <div id="teamDom">
        <FormControl fullWidth>
          <InputLabel>팀 수</InputLabel>
          <Select value={teamCount} label="팀 수" onChange={(e) => setTeamCount(e.target.value)}>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
      </div>
      {teamCount && (
        <div id="teamNameDom">
          {[...new Array(teamCount)].map((idx) => (
            <TextField
              helperText="팀 이름을 입력해 주세요"
              label="팀 이름"
              onChange={(e) => changeTeamName(idx, e.target.value)}
            />
          ))}
        </div>
      )}
      <div id="yearDom">
        <FormControl fullWidth>
          <InputLabel>OO년대</InputLabel>
          <Select value={year} label="OO년대" onChange={(e) => setYear(e.target.value)}>
            <MenuItem value="1990년대">1990년대</MenuItem>
            <MenuItem value="2000년대">2000년대</MenuItem>
            <MenuItem value="2010년대">2010년대</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div id="categoryDom">
        <FormControl fullWidth>
          <InputLabel>카테고리</InputLabel>
          <Select value={category} label="카테고리" onChange={(e) => setCategory(e.target.value)}>
            <MenuItem value={'국내'}>국내</MenuItem>
            <MenuItem value={'해외'}>해외</MenuItem>
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
          </Select>
        </FormControl>
      </div>
      <div id="buttonDom">
        <ThemeProvider theme={theme}>
          <div>
            <Button variant="outlined" size="large" onClick={sendEmail} color="neutral">
              <CampaignIcon /> 정답 메일 발송
            </Button>
          </div>
          <div>
            <Button variant="outlined" size="large" color="neutral">
              <LyricsIcon />
              <Link to="/question">게임 시작</Link>
            </Button>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default SettingPage;
