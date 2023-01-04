import { Grid, TextField, Switch, FormControlLabel, FormGroup, Button, Link, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';
import IconButton from '@material-ui/core/iconbutton';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';


const Login = (props) => {


    const [open, setOpen] = useState(false);
    const paperstyle = { padding: 20, height: '380px', width: 310 }
    const text = { margin: '15px 0' }
    const rem = { margin: '8px 0' }
    const rem2 = { fontSize: '10px', color: 'grey', width: '170px' }
    const sign = { margin: '20px 0', fontSize: "12px", fontWeight: 'bold', fontColour: 'white', height: "32px", borderRadius: "5px", color:'white' }
    const dont = { margin: '10px', fontSize: '11px', color: 'grey' }
    const sign_link = { fontWeight: 'bold', color: 'red' }
    const paperstyle1 = { padding: 5, height: '100px', width: 300, margin: "20px auto" }
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [nextpage, setNextPage] = useState(false);
    const [ nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const icons ={
        display:'flex',
        flexDirection:'row',
        justifyContent: ' space-around',
        marginBottom:'5px'
    }

    useEffect( () => { 
        let path = '/profile';
        navigate(path, { 
            replace: true,
            state: { name, password }
        });
            }, [nextpage])

    let navigate = useNavigate();
    const profile = (e) => {
        setOpen(!open);
        validate(e);  
    }



    function validate(e) {
        if (name.length == "") {
            console.log("name", name)
            setNameError(true)
        }
        else if (name.length < 4) {
            console.log("name", name)
            setNameErr(true)

        } else if (password.length == "") {
            console.log("password", password)
            setPasswordError(true)
        }
         else if (password.length < 6) {
            setPasswordErr(true)
        } else {
            
            setTimeout(() => {
               
                setNameError(false);
                setNameErr(false);
                setPasswordError(false);
                setPasswordErr(false);
                setNextPage(true);
                // setOpen(!open);

              }, 1000); 
        }
        // this.forceUpdate()
        e.preventDefault()
    }

    const handleClose = () => {
        setOpen(false);
      };




    return (

        <div className="main full-screen bg-home">


            <Grid>
                <Grid align="center" className="hai" >
                    <div style={paperstyle1} className="paper1" >
                        <h2>Sign in</h2>
                        <div style={icons}>
                        <FacebookIcon/>
                        <GitHubIcon/>
                        <GoogleIcon/>
                        </div>
                        
                    </div>
                </Grid>
                <div style={paperstyle} className="hey">
                    <Grid align="center" className="hey_grid" >

                        <form onSubmit={validate}>
                            <TextField style={text}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                value={name}
                                onChange={(e) =>{
                                    setName(e.target.value);
                                    setNameError(false);
                                }
                                }

                                variant="filled"
                                size="small"
                                label="User Name"
                                variant="outlined"
                                // {...register("userName", {required: true, minLength:4})}

                                fullWidth />
                            {nameErr && (
                                
                                <div className="errormsg">
                                    <span >
                                    &#9888; Invalid username
                                    </span>
                                </div>
                            )}
                            {
                                nameError && (
                                    <span className="errormsg">
                                        &#x26A0; Enter min 4 characters
                                    </span>
                                )
                            }

                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)}
                                variant="filled"
                                size="small"
                                label="Password"
                                type="password"
                                variant="outlined"

                                fullWidth />
                            {passwordErr && (
                                <span className="errormsg">
                                   &#9888; Invalid password
                                </span>
                            )}
                            {
                                passwordError && (
                                    <span className="errormsg">
                                        &#9888; Enter min 6 characters
                                    </span>
                                )
                            }

                            <FormGroup style={rem}>
                                <FormControlLabel className="remem" style={rem2} control={<Switch />} label="Remember me" />
                            </FormGroup>
                            <Button className="but" style={sign} type="Submit" validate="" variant="contained" onClick={profile} fullWidth >SIGN IN</Button>
                            <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={open}
                                onClick={handleClose}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        </form>

                        <Typography style={dont} align="center"> Don't have an account?
                            <Link href="/ButtonAppBar" style={sign_link} > Sign Up</Link>
                        </Typography>
                    </Grid>


                </div>



            </Grid>
        </div>

    )
}

export default Login;