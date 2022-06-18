import CampaignIcon from '@mui/icons-material/Campaign';
import LyricsIcon from '@mui/icons-material/Lyrics';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/setting.css';

const SettingPage = () => {
  const [team, setTeam] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('');
  const [problem, setProblem] = useState('');

  return (
    <div id="layoutDom">
      <div id="titleDom">
        <SettingsIcon fontSize="large"></SettingsIcon> Settings
      </div>
      <div id="teamDom">
        <FormControl fullWidth>
          <InputLabel>팀 수</InputLabel>
          <Select value={team} label="팀 수" onChange={(e) => setTeam(e.target.value)}>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div id="yearDom">
        <FormControl fullWidth>
          <InputLabel>OO년대</InputLabel>
          <Select value={year} label="OO년대" onChange={(e) => setYear(e.target.value)}>
            <MenuItem value={'1990년대'}>1990년대</MenuItem>
            <MenuItem value={'2000년대'}>2000년대</MenuItem>
            <MenuItem value={'2010년대'}>2010년대</MenuItem>
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
          <Select value={problem} label="문제 수" onChange={(e) => setProblem(e.target.value)}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div id="buttonDom">
        <div>
          <Button variant="outlined" size="large" onclick="">
            <CampaignIcon></CampaignIcon> 사회자만 정답 보기
          </Button>
        </div>
        <div>
          <Button variant="outlined" size="large">
            <LyricsIcon></LyricsIcon>
            <Link to="/question">게임 시작</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
