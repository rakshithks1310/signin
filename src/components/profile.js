import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { TextField } from "@material-ui/core";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const data = [
  { name: "Facebook", users: 2000000000 },
  { name: "Instagram", users: 1500000000 },
  { name: "Twiter", users: 1000000000 },
  { name: "Telegram", users: 500000000 },
];

const chart = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '10%'
}
const div1={
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-around'
  
}
const div_inside={
  width:'200px',
  height: '50px'
}
const pages = [];
const navItems = ['Enroll', 'Members'];
const settings = ['Logout'];
const header = { backgroundColor: 'white' }
const buttt = {
  margin: '0  50px 0 5px'
}
const barchart = {

  width: '50%',
  display: 'flex',
  alignItem: 'center',
  margin: ' 0 0 0 50px '

}




function Profile(props) {
  const { state } = useLocation();
  console.log(state);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [logout, setLogout] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let navigate = useNavigate();
  const logoff = () => {
    let path = '/';
    setTimeout(navigate(path),);
  }











  return (
    <div>
      <div>



        <AppBar position="fixed" style={header}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <div>
                <div>
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'rebel',
                      fontWeight: 700,
                      letterSpacing: '.1rem',
                      color: 'ORANGE',
                      cursor: 'default'
                    }}
                  >
                    Better
                  </Typography>
                </div>

                <div>
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"

                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontWeight: 1000,
                      letterSpacing: '.2rem',
                      color: 'ORANGE',
                      margin: '-5px 0',
                      cursor: 'default'
                    }}
                  >
                    LOYALTY
                  </Typography>

                </div>
              </div>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="black"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {navItems.map((item) => (
                    <MenuItem key={item} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{item}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <div className='loyal'>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"

                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'rebel',
                    fontWeight: 700,
                    fontSize: 18,
                    letterSpacing: '.1rem',
                    color: 'Orange',
                    textDecoration: 'none',
                  }}
                >
                  Better

                </Typography>

                <Typography
                  variant="h5"
                  noWrap
                  component="a"

                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontWeight: 1000,
                    letterSpacing: '.1rem',
                    color: 'Orange',
                    margin: '-6px 0',
                    textDecoration: 'none',
                  }}
                >
                  LOYALTY

                </Typography>
              </div>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}

                    sx={{ my: 3, color: 'orange', display: 'block' }}
                  >
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button style={buttt} key={item} sx={{ color: 'orange' }}>
                    {item}
                  </Button>
                ))}
              </Box>


              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={state.name} src="" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={logoff} value={logout}
                      onChange={(e) =>
                        setLogout(e.target.value)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>


        </AppBar>

      </div>

      <div style={chart}>

        <div style={barchart}>

          <Container>
            <Row >
              <Col>
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 15,
                    right: 30,
                    left: 80,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="name"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
                </BarChart>
              </Col>



            </Row>

          </Container>



        </div>
        <div>
          <div style={div1}>

            <div >
              <button style={div_inside}></button>
            </div>

            <div>
              <button style={div_inside}></button>
            </div>
          </div>

          <div style={div1}>
            <div>
              <button style={div_inside}></button>
            </div>

            <div>
              <button style={div_inside}></button>
            </div>
          </div>

          <div style={div1}>
            <div>
              <button style={div_inside}></button>
            </div>
            <div>
              <button style={div_inside}></button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
export default Profile;