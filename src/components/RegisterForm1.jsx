import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { Link } from "react-router-dom";

const RegisterForm1 = () => {
    const [isBar, setIsBar] = useState(false);

    const handleClick = event => {
        setIsBar(current => !current);
    };

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
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

    const [isCheck, setIsCheck] = useState(false);

    const handleCheck = event => {
        setIsCheck(current => !current);
    };

    return (
        <Container disableGutters >
            {/* MENU OPEN IF */}
            {isBar && <BarDisplay />}
            <Container maxWidth="sm">
                {/* REGISTER FORM1 */}
                <Grid container justifyContent="center" alignItems="center" className="my-4" gapspacing={2}>
                    <Grid item xs={11} className="mb-3">
                        <Typography className="fs-5 fw-bold">Regístrate como transportista</Typography>
                    </Grid>
                    <Grid container xs={11} justifyContent="space-between" alignItems="center" gap={1}>
                        <Grid item xs={4} >
                            <InputLabel sx={{ display: 'flex' }} id="document" className='fs-7'>Documento<Typography sx={{ color: 'red', pl: 1 }}>*</Typography></InputLabel>
                            <TextField fullWidth variant='standard' id='document' select value={age} onChange={handleChange} color='warning'>
                                <MenuItem value={10}>DNI</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={7} >
                            <InputLabel sx={{ display: 'flex' }} id="document" className='fs-7'>Número de documento<Typography sx={{ color: 'red', ml: 1 }}>*</Typography></InputLabel>
                            <TextField fullWidth variant='standard' id='document' value={age} onChange={handleChange} color='warning'>
                            </TextField>
                        </Grid></Grid>
                    <Grid item xs={11} >
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-2'>Nombre<Typography sx={{ color: 'red', ml: 1 }}>*</Typography></InputLabel>
                        <TextField fullWidth variant='standard' id='document' value={age} onChange={handleChange} color='warning'>
                        </TextField>
                    </Grid>
                    <Grid item xs={11} >
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-2'>Apellidos<Typography sx={{ color: 'red', ml: 1 }}>*</Typography></InputLabel>
                        <TextField fullWidth variant='standard' id='document' value={age} onChange={handleChange} color='warning'>
                        </TextField>
                    </Grid>
                    <Grid item xs={11} >
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-2'>Número de celular<Typography sx={{ color: 'red', ml: 1 }}>*</Typography></InputLabel>
                        <TextField fullWidth variant='standard' id='document' value={age} onChange={handleChange} color='warning'>
                        </TextField>
                    </Grid>
                    <Grid item xs={11} >
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-2'>Contraseña<Typography sx={{ color: 'red', ml: 1 }}>*</Typography></InputLabel>
                        <Box sx={{ display: 'flex', alignItems: 'center' }} fullWidth>
                            <Input fullWidth color='warning'
                                id="document"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChangePassword('password')}
                            />
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        </Box>
                    </Grid>
                    <Grid item xs={11} >
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-2'>Confirmar contraseña<Typography sx={{ color: 'red', ml: 1 }}>*</Typography></InputLabel>
                        <Box sx={{ display: 'flex', alignItems: 'center' }} fullWidth>
                            <Input fullWidth color='warning'
                                id="document"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChangePassword('password')}
                            />
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        </Box>
                    </Grid>
                    <Grid item xs={11} >
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-2'>Distrito donde vives<Typography sx={{ color: 'red', pl: 1 }}>*</Typography></InputLabel>
                        <TextField fullWidth variant='standard' id='document' select value={age} onChange={handleChange} color='warning'>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={11} >
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-2'>Correo electrónico<Typography sx={{ color: 'red', ml: 1 }}>*</Typography></InputLabel>
                        <TextField fullWidth variant='standard' id='document' value={age} onChange={handleChange} color='warning' type='email'>
                        </TextField>
                    </Grid>
                    <Grid container item xs={11} direction='row' justifyContent="center" alignItems="center">
                        <Grid item xs={1.5}>
                            <IconButton onClick={handleCheck}>
                                {isCheck ? <CheckBoxOutlinedIcon color="warning" fontSize='small' /> : <CheckBoxOutlineBlankOutlinedIcon color="warning" fontSize='small' />}
                            </IconButton></Grid>
                        <Grid item xs={10.5} container direction="row" gap={.7}>
                            <Typography className="fs-6">Acepto los términos y condiciones y reconozco que leí la política de privacidad.</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={11} >
                        <Link to="/Profile01" className="txt-white">
                            <Button variant="contained" className="rounded-pill py-2 fs-7 lh-lg" color="warning" fullWidth
                                onClick={handleClick}>Siguiente</Button></Link>
                    </Grid>
                </Grid>
            </Container >
        </Container >
    );
};

function BarDisplay() {
    return (
        <Box sx={{ width: '100%', m: 0 }} >
            <LinearProgress color="warning" />
        </Box>
    );
}

export default RegisterForm1;
