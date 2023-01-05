import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from "react";
import "./home.css";
import Login from './login';

export default function Home() {
    const sign_but = { color: 'white', position: 'absolute', right: '6%', top: '60px', fontSize: '24px', textTransform: 'none' }
    const [show, setShow] = useState(false);

    const signin = () => {
        setTimeout(() => {
            setShow(!show)
        }, 500);


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
        <div className='overlay'>

            <div>
                <div style={better1}>


                    <div>
                        <Typography
                            variant=""
                            fontSize={44}
                            //noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { md: 'flex' },
                                fontFamily: 'rebel !important',
                                fontWeight: `${700} !important`,
                                letterSpacing: '.1rem !important',
                                color: '#75EA64',
                                cursor: 'default',
                            }}
                        >
                            Better
                        </Typography>
                    </div>

                    <div>
                        <Typography
                            variant=""
                            //noWrap
                            fontSize={40}
                            component="a"

                            sx={{
                                mr: 2,
                                display: { md: 'flex' },
                                fontWeight: `${1000} !important`,
                                letterSpacing: '.001rem !important',
                                color: '#75EA64',
                                margin: '-10px 0 !important',
                                cursor: 'default',
                                fontFamily: 'Poppins-ExtraBold !important',
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
            {show ? <div style={hai}>
                <Login />
            </div> : null}



            <div style={better}>
                <div>
                    <div>
                        <Typography
                            variant=""
                            // noWrap
                            fontSize={85}
                            //component="a"
                            sx={{
                                mr: 2,
                                display: { md: 'flex' },
                                fontFamily: 'rebel !important',
                                fontWeight: `${700} !important`,
                                letterSpacing: '.2rem !important',
                                color: '#F66E1A',
                                cursor: 'default'
                            }}
                        >
                            Better
                        </Typography>
                    </div>

                    <div>
                        <Typography
                            variant=""
                            // noWrap
                            // component="a"
                            fontSize={100}

                            sx={{
                                mr: 2,
                                display: { md: 'flex' },
                                fontWeight: `${1000} !important`,
                                letterSpacing: '.001rem !important',
                                color: '#F66E1A',
                                margin: '-43px 0 !important',
                                cursor: 'default', fontFamily: 'Poppins-ExtraBold !important',
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
