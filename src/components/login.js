import { Grid, TextField, Switch, FormControlLabel, FormGroup, Button, Link, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';
import IconButton from '@material-ui/core/iconbutton';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import FacebookIcon from '@mui/icons-material/Facebook';


const Login = (props) => {


    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //     } = useForm();
    // const onSubmit=(data) => {
    //     console.log(data);
    //     //  registerAccount(data);
    // };
    const paperstyle = { padding: 20, height: '380px', width: 310 }
    const text = { margin: '15px 0' }
    const rem = { margin: '8px 0' }
    const rem2 = { fontSize: '10px', color: 'grey', width: '170px' }
    const sign = { margin: '20px 0', fontSize: "12px", fontWeight: 'bold', fontColour: 'white', height: "32px", borderRadius: "5px" }
    const dont = { margin: '10px', fontSize: '11px', color: 'grey' }
    const sign_link = { fontWeight: 'bold', color: 'red' }
    const paperstyle1 = { padding: 5, height: '100px', width: 300, margin: "20px auto" }
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    let navigate = useNavigate();
    const profile = (e) => {

        validate(e);
        let path = '/profile';
        console.log("nameError", nameErr)
        if (!nameErr && !passwordErr) {
            navigate(path, {
                replace: true,
                state: { name, password }
            });
        }
    }



    function validate(e) {
        if (name.length < 4) {
            console.log("name", name)
            setNameErr(true)
            
        } else if (password.length < 6) {
            setPasswordErr(true)
        } else {
            setNameErr(false);
            setPasswordErr(false);
        }

        e.preventDefault()
    }




    return (

        <div className="main">


            <Grid>
                <Grid align="center" className="hai" >
                    <div style={paperstyle1} className="paper1" >
                        <h2>Sign in</h2>
                        {/* <Grid direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            FB
                            <input hidden accept="image/*" multiple type="file" />
                        </Button> <Button variant="contained" component="label">
                            Git
                            <input hidden accept="image/*" multiple type="file" />
                        </Button> <Button variant="contained" component="label">
                            Goo
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <IconButton color="primary"  component="label">
                            <input hidden accept="image/*" />
                            
                        </IconButton>
                    </Grid> */}
                    </div>
                </Grid>
                <div style={paperstyle} className="hey">
                    <Grid align="center" className="hey_grid" >

                        <form onSubmit={validate}>
                            <TextField style={text}
                                hiddenLabel
                                id="filled-hidden-label-small"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)}
                                variant="filled"
                                size="small"
                                label="User Name"
                                variant="outlined"
                                // {...register("userName", {required: true, minLength:4})}

                                fullWidth />
                            {nameErr && (
                                <span className="errormsg">
                                    invalid username
                                </span>
                            )}

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
                                    invalid password
                                </span>
                            )}
                            <FormGroup style={rem}>
                                <FormControlLabel className="remem" style={rem2} control={<Switch />} label="Remember me" />
                            </FormGroup>
                            <Button className="but" style={sign} type="Submit" validate="" variant="contained" onClick={profile} fullWidth  >SIGN IN</Button>
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