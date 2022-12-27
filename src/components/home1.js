import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const sign_but = { color: 'white' }
    let navigate = useNavigate();
    const signin = () => {
        let path = 'login';
        setTimeout(navigate(path),);
    }
    const better={
        display:'flex',
        justifyContent:'flex-start',
        margin:"550px 30px"
    }


    return (
        <div>
            <div>
                <div>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="fixed" color="transparent">
                            <Toolbar  >
                                <div>
                                    <div>
                                        <Typography
                                            variant="h5"
                                            noWrap
                                            component="a"
                                            sx={{
                                                mr: 2,
                                                display: { md: 'flex' },
                                                fontFamily: 'rebel',
                                                fontWeight: 700,
                                                letterSpacing: '.1rem',
                                                color: 'lightgreen',
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
                                                display: { md: 'flex' },
                                                fontWeight: 1000,
                                                letterSpacing: '.001rem',
                                                color: 'lightgreen',
                                                margin: '-5px 0',
                                                cursor: 'default'
                                            }}
                                        >
                                            LIFE
                                        </Typography>

                                    </div>
                                </div>


                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                                </Typography>
                                <Button style={sign_but} onClick={signin} >Sign In</Button>

                            </Toolbar>

                        </AppBar>


                    </Box>

                </div>


            </div>
                                            <div style={better}>
                                            <div>
                                    <div>
                                        <Typography
                                            variant="h3"
                                            noWrap
                                            component="a"
                                            sx={{
                                                mr: 2,
                                                display: { md: 'flex' },
                                                fontFamily: 'rebel',
                                                fontWeight: 700,
                                                letterSpacing: '.2rem',
                                                color: 'Orange',
                                                cursor: 'default'
                                            }}
                                        >
                                            Better
                                        </Typography>
                                    </div>

                                    <div>
                                        <Typography
                                            variant="h2"
                                            noWrap
                                            component="a"

                                            sx={{
                                                mr: 2,
                                                display: { md: 'flex' },
                                                fontWeight: 1000,
                                                letterSpacing: '.001rem',
                                                color: 'Orange',
                                                margin: '-5px 0',
                                                cursor: 'default'
                                            }}
                                        >
                                            LOYALTY
                                        </Typography>

                                    </div>
                                </div>  
                                            </div>
        </div>
    );
}
