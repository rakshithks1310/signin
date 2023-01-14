import {
    Button,
    FormControlLabel,
    FormGroup,
    Grid,
    Switch,
    TextField
} from '@material-ui/core';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = (props) => {
    const [open, setOpen] = useState(false);
    const paperstyle = { padding: 20, height: '380px', width: 310 };
    const text = { margin: '15px 0' };
    const rem = { margin: '8px 0' };
    const rem2 = { fontSize: '10px', color: 'grey', width: '270px' };
    const sign = {
        margin: '30px 0',
        fontSize: '12px',
        fontWeight: 'bold',
        fontColour: 'white',
        height: '40px',
        borderRadius: '5px',
        color: 'white',
    };
    const paperstyle1 = {
        padding: 5,
        height: '86px',
        width: 300,
        margin: '20px auto',
    };
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [nextpage, setNextPage] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const icons = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: ' space-around',
        marginBottom: '5px',
    };

    useEffect(() => {
        let path = '/profile';
        navigate(path, {
            replace: true,
            state: { name, password },
        });
    }, [nextpage]);

    let navigate = useNavigate();
    const profile = (e) => {
        setOpen(!open);
        validate(e);
    };

    function validate(e) {
        if (name.length == '') {
            console.log('name', name);
            setNameError(true);
            setOpen(false);
        } else if (name.length < 4) {
            console.log('name', name);
            setNameErr(true);
            setOpen(false);
        } else if (password.length == '') {
            console.log('password', password);
            setPasswordError(true);
            setOpen(false);
        } else if (password.length < 6) {
            setPasswordErr(true);
            setOpen(false);
        } else {
            setTimeout(() => {
                setOpen(true);
                setNameError(false);
                setNameErr(false);
                setPasswordError(false);
                setPasswordErr(false);
                setNextPage(true);
            }, 1000);
        }
        // this.forceUpdate()
        e.preventDefault();
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="main full-screen bg-home">
            <Grid>
                <Grid align="center" className="hai">
                    <div style={paperstyle1} className="paper1">
                        <h2>Sign in</h2>
                        <div style={icons}>
                            {/* <FacebookIcon/>
                        <GitHubIcon/>
                        <GoogleIcon/> */}
                        </div>
                    </div>
                </Grid>
                <div style={paperstyle} className="hey">
                    <Grid align="center" className="hey_grid">
                        <form onSubmit={validate}>
                            <TextField
                                style={text}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setNameError(false);
                                }}
                                // variant="filled"
                                size="small"
                                label="User Name"
                                variant="outlined"
                                // {...register("userName", {required: true, minLength:4})}

                                fullWidth
                            />
                            {nameErr && (
                                <div className="errormsg">
                                    <span>&#9888; Invalid username</span>
                                </div>
                            )}
                            {nameError && (
                                <span className="errormsg">
                                    &#x26A0; Enter min 4 characters
                                </span>
                            )}

                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                variant="filled"
                                size="small"
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                            />
                            {passwordErr && (
                                <span className="errormsg">&#9888; Invalid password</span>
                            )}
                            {passwordError && (
                                <span className="errormsg">&#9888; Enter min 6 characters</span>
                            )}

                            <FormGroup style={rem}>
                                <FormControlLabel
                                    className="remem"
                                    style={rem2}
                                    control={<Switch />}
                                    label="Forget Password"
                                />
                            </FormGroup>
                            <Button
                                className="but"
                                style={sign}
                                type="Submit"
                                validate=""
                                variant="contained"
                                onClick={profile}
                                fullWidth
                            >
                                SIGN IN
                            </Button>
                            <Backdrop
                                sx={{
                                    color: '#fff',
                                    zIndex: (theme) => theme.zIndex.drawer + 1,
                                }}
                                open={open}
                                onClick={handleClose}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        </form>

                        {/* <Typography style={dont} align="center"> Don't have an account?
                            <Link href="/ButtonAppBar" style={sign_link} > Sign Up</Link>
                        </Typography> */}
                    </Grid>
                </div>
            </Grid>
        </div>
    );
};

export default Login;
