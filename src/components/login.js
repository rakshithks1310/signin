import { Grid, Paper, Avatar, TextField, Switch, FormControlLabel, FormGroup, Stack, Button, IconButton, PhotoCamera, Link, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

    let navigate = useNavigate();
    const profile = () => {
        console.log(props);
        let path = '/profile';
        //navigate(); 
        navigate(path, {
            replace: true,
            state: { name, password }
        });
    }
    const paperstyle = { padding: 20, height: '340px', width: 295 }
    const text = { margin: '15px 0' }
    const rem = { margin: '8px 0' }
    const rem2 = { fontSize: '10px', color: 'grey', width: '170px' }
    const sign = { margin: '20px 0', fontSize: "12px", fontWeight: 'bold', fontColour: 'white', height: "32px", borderRadius: "5px" }
    const dont = { margin: '10px', fontSize: '11px', color: 'grey' }
    const sign_link = { fontWeight: 'bold', color: 'red' }
    const paperstyle1 = { padding: 5, height: '100px', width: 300, margin: "20px auto" }
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="main">

            <Grid>
                <Grid align="center" className="hai" >
                    <div style={paperstyle1} className="paper1" >
                        <h2>Sign in</h2>
                    </div>
                </Grid>
                <div style={paperstyle} className="hey">
                    <Grid align="center" className="hey_grid" >

                        {/* <h2>Sign in</h2> */}
                        {/* <Grid direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <IconButton color="primary"  component="label">
                            <input hidden accept="image/*" />
                            
                        </IconButton>
                    </Grid> */}

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
                            fullWidth />

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
                        <FormGroup style={rem}>
                            <FormControlLabel className="remem" style={rem2} control={<Switch />} label="Remember me" />
                        </FormGroup>
                        <Button className="but" style={sign} type="Submit" variant="contained" fullWidth onClick={profile} >SIGN IN</Button>

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