import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import { TextField } from '@mui/material';

const SignIn = () => {
    const [isBar, setIsBar] = useState(false);

    const handleClick = event => {
        setIsBar(current => !current);
    };

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container disableGutters >
            {/* MENU OPEN IF */}
            {isBar && <BarDisplay />}
            <Container maxWidth="xl">
                <Grid container direction="row" justifyContent="center" alignItems="center" gap={2}>
                    {/* INGRESO */}
                    <Grid item className="mt-3 mb-1" xs={11}>
                        <Typography className="fs-5 fw-bold mb-3">Ingresa a PegaCargo</Typography>
                        <Typography htmlFor="phone-number" className="fs-7 txt-gray mb-2">Número de celular</Typography>
                        <TextField id="phone-number" color="warning" className='mb-3' variant="standard" fullWidth />
                        <Link to="/NumberNotFound" className="txt-white">
                            <Button variant="contained" className="rounded-pill py-2 fs-7 lh-lg" color="warning" fullWidth
                                onClick={handleClick}>Siguiente</Button></Link>
                        {/* <Typography className="txt-gray py-3 fs-7 txt-center">Si no tienes una cuenta,
                            <Link to="/Register" className="ps-1 txt-org txt-link">crea una aquí</Link>
                        </Typography> */}
                    </Grid>
                    {/* CONTRASEÑA */}
                    <Grid item className="mt-3 mb-1" xs={11}>
                        <Typography className="fs-5 fw-bold">Ingresa tu contraseña</Typography>
                        <Typography htmlFor="contraseña" className="fs-7 txt-gray mt-4">Contraseña</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} fullWidth>
                            <TextField color='warning' fullWidth
                                id="contraseña"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChangePassword('password')}
                                helperText="La contraseña no es correcta."
                                variant="standard"
                                error
                            />
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                sx={{ mb: 2.5 }}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </Box>
                        <Typography className="py-3 fs-7">
                            <Link to="/Forgive" className="txt-blue">Olvidé mi contraseña</Link>
                        </Typography>
                        <Link to="/NumberNotFound" className="txt-white">
                        <Button variant="contained" className="rounded-pill py-2 fs-7 lh-lg" color="warning" fullWidth
                                onClick={handleClick}>Ingresar</Button></Link>
                    </Grid>
                </Grid>
            </Container >
        </Container >
    );
};

function BarDisplay() {
    return (
        <Box sx={{ width: '100%', m: '0', padding: '0' }}>
            <LinearProgress color="warning" />
        </Box>
    );
}
export default SignIn;
