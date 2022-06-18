import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/setting.css';
import SettingsIcon from '@mui/icons-material/Settings';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Button} from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';
import LyricsIcon from '@mui/icons-material/Lyrics';

const SettingPage = () => {
    const [team, setTeam] = useState(0);
    const [category, setCategory] = useState('');
    const [problem, setProblem] = useState(0);

    return (
    <div id="layoutDom">
        <div id="titleDom">
            <SettingsIcon fontSize="large"></SettingsIcon> Settings
        </div>
        <div id="teamDom">
            <FormControl fullWidth>
                <InputLabel>팀 수</InputLabel>
                <Select
                    //value={team}
                    label="팀 수"
                    //onChange={setTeam(team)}
                >
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div id="CategoryDom">
            <FormControl fullWidth>
                <InputLabel>카테고리</InputLabel>
                <Select
                    //value={age}
                    label="카테고리"
                    //onChange={handleChange}
                >
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div id="NumberOfProblemDom">
            <FormControl fullWidth>
                <InputLabel>문제 수</InputLabel>
                <Select
                    //value={age}
                    label="문제 수"
                    //onChange={handleChange}
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
            <div>
                <Button variant="outlined">
                    <CampaignIcon></CampaignIcon> 사회자만 정답 보기
                </Button>
            </div>
            <div>
                <Button variant="outlined">
                    <LyricsIcon></LyricsIcon>
                    <Link to="/question">
                        게임 시작
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  );
};

export default SettingPage;
