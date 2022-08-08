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

const RegisterForm2 = () => {
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
                {/* REGISTER FORM2 */}
                <Grid container justifyContent="center" alignItems="center" gap={2} className="my-3">
                    <Grid item xs={11} className='mb-2'>
                        <Typography className="fs-5 fw-bold">Regístrate como cliente</Typography>
                    </Grid>
                    <Grid container xs={11} justifyContent="space-between" alignItems="center" className='mb-2'>
                        <Grid item xs={4.1} >
                            <InputLabel sx={{ display: 'flex' }} id="document" className='mb-1'>Documento<Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography></InputLabel>
                            <TextField fullWidth variant='standard' id='document' select value={age} onChange={handleChange} color='warning'>
                                <MenuItem value={10}>DNI</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={7.2} >
                            <InputLabel sx={{ display: 'flex' }} id="document" className='mb-1'>Número de documento<Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography></InputLabel>
                            <TextField fullWidth variant='standard' id='document' value={age} onChange={handleChange} color='warning' />
                        </Grid>
                    </Grid>
                    <Grid item xs={11} className='mb-2'>
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-1'>Nombre<Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography></InputLabel>
                        <TextField fullWidth variant='standard' id='document' value={age} onChange={handleChange} color='warning' />
                    </Grid>
                    <Grid item xs={11} className='mb-2'>
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-1'>Apellidos<Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography></InputLabel>
                        <TextField fullWidth variant='standard' id='document' value={age} onChange={handleChange} color='warning' />
                    </Grid>
                    <Grid item xs={11} className='mb-2'>
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-1'>Número de celular<Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography></InputLabel>
                        <TextField fullWidth variant='standard' id='document' value={age} onChange={handleChange} color='warning' />
                    </Grid>
                    <Grid item xs={11} className='mb-2'>
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-1'>Contraseña<Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography></InputLabel>
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
                    <Grid item xs={11} className='mb-2'>
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-1'>Confirmar contraseña<Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography></InputLabel>
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
                    <Grid item xs={11} className='mb-2'>
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-1'>Distrito donde vives<Typography sx={{ color: 'red', pl: 1 }}>*</Typography></InputLabel>
                        <TextField fullWidth variant='standard' id='document' select value={age} onChange={handleChange} color='warning'>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={11} className='mb-2'>
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-1'>Correo electrónico<Typography sx={{ color: 'red', ml: 0.5 }}>*</Typography></InputLabel>
                        <TextField fullWidth variant='standard' id='document' value={age} onChange={handleChange} color='warning' type='email'>
                        </TextField>
                    </Grid>
                    <Grid container xs={11} justifyContent="center" alignItems="center" className='mb-2'>
                        <Grid item xs={1.5}>
                            <IconButton onClick={handleCheck}>
                                {isCheck ? <CheckBoxOutlinedIcon color="warning" fontSize='small' /> : <CheckBoxOutlineBlankOutlinedIcon color="warning" fontSize='small' />}
                            </IconButton></Grid>
                        <Grid container xs={10.5} direction="row">
                            <Typography className="fs-6" fullWidth>Acepto los
                                <Typography variant="span" className="txt-blue"> términos y condiciones </Typography>
                                y reconozco que leí la
                                <Typography variant="span" className="txt-blue"> política de privacidad.</Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={11} className='mb-2'>
                        <Link to="/Profile01" className="txt-white">
                            <Button variant="contained" className="rounded-pill py-2 fs-6 lh-lg" color="warning" fullWidth
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

export default RegisterForm2;
