import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const pages = [];
const navItems = ['Enroll', 'Members'];
const settings = ['Logout'];
const header = { backgroundColor: 'white' };
const buttt = {
    backgroundColor: '#c4487b', color: '#fff', borderRadius: '0'
};

const icon = { backgroundColor: 'rgb(196, 72, 123)', textTransform: 'uppercase' }

function ResponsiveAppBar(props) {

    const [highlight, setHighlight] = useState('true');

    console.log(props)
    const { state } = useLocation();
    console.log(state);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [logout, setLogout] = useState('');

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        let path = '/dash';

        // console.log("checking");
        navigate(path, {
            replace: true

        });
        setAnchorElNav(null);

    };

    //    handleIteams(navItems);{
    //         this.setState({active: navItems});
    //     }

    const handleIteams = item => e => {
        console.log("item", item);
        let path = "";
        if (item === "Enroll") {
            path = '/dash'
        } else {
            path = '/dash2'
        }

        setTimeout(() => {
            navigate(path);
        }, 500);
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    let navigate = useNavigate();
    const logoff = () => {
        let path = '/';
        setTimeout(navigate(path));
    };

    return (
        <AppBar position="static" style={header}>
            <Container maxWidth="xl" style={{ maxWidth: '1650px' }}>
                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"


                        sx={{
                            mr: 2, pt: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 25,
                            fontFamily: 'rebel',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: '#e66e32',
                            cursor: 'default', fontSize: '31px'
                        }}
                    ><div>
                            <div>Better</div>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontWeight: '100px',
                                    letterSpacing: '.2rem',
                                    color: '#e66e32',
                                    margin: '-15px 0 0px 0 ',
                                    fontSize: '37px',
                                    cursor: 'default',
                                    fontFamily: 'Poppins-ExtraBold !important',
                                }}
                            >
                                LOYALTY
                            </Typography>
                        </div>
                    </Typography>




                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                            {navItems.map((item, index) => (
                                <div key={item} onClick={handleIteams}>
                                    {/* <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem> */}
                                </div>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'rebel',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: '#e66e32',
                            textDecoration: 'none',
                            cursor: 'default',
                            fontSize: '31px'

                        }}
                    ><div>
                            <div>Better</div>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    fontWeight: '100px',
                                    letterSpacing: '.2rem',
                                    color: '#e66e32',
                                    margin: '-15px 0 0px 0 ',
                                    fontSize: '37px',
                                    cursor: 'default',
                                    fontFamily: 'Poppins-ExtraBold !important',
                                }}
                            >
                                LOYALTY
                            </Typography>
                        </div>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 3, color: '#e37e44', display: 'block' }}
                            ></Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{ width: '15%' }}>
                        {navItems.map((item) => (
                            <Button
                                onClick={(e) => handleIteams(item)(e)}
                                style={item === props.item ? buttt : null}
                                // style={this.state.active === navItems ? activeStyle : {}} 
                                // onClick={this.handleIteams.bind(this, navItems)}
                                key={item}
                                sx={{
                                    color: '#e37e44',
                                    textTransform: 'none',
                                    fontSize: '25px', fontFamily: 'Poppins-Regular', marginRight: '30px'
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="profle">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}>
                                <Avatar alt="" src="/" style={icon} />
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
                                <MenuItem
                                    key={setting}
                                    onClick={logoff}
                                    value={logout}
                                    onChange={(e) => setLogout(e.target.value)}
                                >
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;