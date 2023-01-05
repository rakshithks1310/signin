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
import "./profile.css"

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
import { textTransform } from '@mui/system';

const data = [
  { name: "Facebook", users: 200000000 },
  { name: "Instagram", users: 150000000 },
  { name: "Twiter", users: 100000000 },
  { name: "Telegram", users: 50000000 },
];

const chart = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '10%',
  justifyContent: 'space-around'

}
const div_first = {
  marginTop: '-55px',
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '60px',
  marginLeft: '35px',
  justifyContent: 'space-around'

}

const div_inside = {
  width: '280px',
  height: '85px',
  marginRight: '35px',
  borderRadius: '5px',
  border: 'none',
  fontSize: '16px',
  fontFamily: 'arial'
}
const pages = [];
const navItems = ['Enroll', 'Members'];
const settings = ['Logout'];
const header = { backgroundColor: 'white' }
const buttt = {
  margin: '0  50px 0 5px'
}
const barchart = {

  display: 'flex',
  alignItem: 'center',
  margin: ' 0 0 0 40px '

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
    <div className='charge'>
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
                      color: '#e66e32',
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
                      color: '#e66e32',
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
                  //noWrap
                  component="a"

                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'rebel',
                    fontWeight: 700,
                    fontSize: 18,
                    letterSpacing: '.1rem',
                    color: '#e66e32',
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
                    color: '#e66e32',
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

                    sx={{ my: 3, color: '#e37e44', display: 'block' }}
                  >
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button style={buttt} key={item} sx={{ color: '#e37e44', textTransform: 'none', fontSize: '18px' }}>
                    {item}
                  </Button>
                ))}
              </Box>


              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={state.name} src="/" className='icon' />
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

        <div className='split'>
          <div style={div_first}>

            <div >
              <p className='para'>Total Members <br/> <br/></p>
            
              <button style={div_inside}>10</button>
            </div>

            <div>
              <p className='para'>Members enrolled <br/> in last 30 days</p>
              <button style={div_inside}>25</button>
            </div>
          </div>

          <div style={div_first}>
            <div>
              <p className='para'>Total Earn <br/> Transactions</p>
              <button style={div_inside}>4</button>
            </div>

            <div>
              <p className='para'>Earn Transactions <br/>in last 30 days</p>
              <button style={div_inside}>89</button>
            </div>
          </div>

          <div style={div_first}>
            <div>
              <p className='para'>Total Redeem <br/>Transactions</p>
              <button style={div_inside}>78</button>
            </div>
            <div>
              <p className='para'>Redeem Transactions <br/>in last 30 days</p>
              <button style={div_inside}>15</button>
            </div>
          </div>
        </div>

        <div style={barchart}>

          <Container>
            <Row >
              <Col>
                <BarChart
                  width={620}
                  height={520}
                  data={data}
                  margin={{
                    top: 40,
                    right: 30,
                    left: 30,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="name"
                    scale="point"
                    padding={{ left: 8, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="users" fill="#9be65e" background={{ fill: "#eee" }} />
                </BarChart>
              </Col>



            </Row>

          </Container>
        </div>


      </div>

    </div>
  );
}
export default Profile;