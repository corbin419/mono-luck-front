import * as React from "react";
import MenuBar from "../components/MenuBar";
import Button from '@mui/material/Button';
import Monologo from "../pic/monologo.png";
import "./Home.css";
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function Home() {
  return (
    <div class="box">
      <div className="Menubar">
        <MenuBar name="首頁" />
      </div>
      <div className="Logo">
        <img src={Monologo} alt="Monologo" />
      </div>
      <div className="Text12">MonoLuck</div>
      <div className="Text22">鎖櫃登記系統</div>
      <div className="Botton">
        <Stack  spacing={1}>
          <Link href="/registerPage" underline="none"><Button variant="contained" fullWidth startIcon={<EditIcon />} style={{backgroundColor: '#02A2EE', color: '#FFFFFF'}}>
          鎖櫃登記
          </Button></Link>
          <Link href="/searchPage" underline="none"><Button variant="outlined" fullWidth startIcon={<SearchOutlinedIcon />} style={{ color:'#02A2EE'}}>
          登記查詢
          </Button></Link>
        </Stack>
      </div>
    </div>
  );
}

export default Home;
