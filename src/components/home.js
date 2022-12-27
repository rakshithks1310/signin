
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Login from './login';
import Profile from './profile';
import { render } from '@testing-library/react';
import React, { useState } from "react";

export default function Home() {
    const sign_but = { color: 'white', position: 'absolute', right: '6%', top: '60px', fontSize: '24px', textTransform: 'none' }
    const [ show, setShow ] = useState(false);

    const signin = () => {
        setShow(!show) 
        
    }
    const better = {
        position: 'absolute',
        bottom: '80px',
        left: '8%'

    }
    const better1 = {
        position: 'absolute',
        top: '10%',
        left: '8%'

    }
    const hai = {
        position: 'absolute',
        top: '12%',
        right: '5%'
          
    }

    

    return (
        <div>

            <div>
                <div style={better1}>


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

                <Toolbar  >

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <Button style={sign_but} onClick={signin} >Sign In</Button>

                </Toolbar>

            </div>
             {show ? <div  style={hai}>
                <Login/>
            </div> : null }



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
