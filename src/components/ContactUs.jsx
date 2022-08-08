import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { red } from '@mui/material/colors';
import Select from '@mui/material/Select';

const ContacUs = () => {
    const [isBar, setIsBar] = useState(false);

    const handleClick = event => {
        setIsBar(current => !current);
    };

    const [isCheck, setIsCheck] = useState(false);

    const handleCheck = event => {
        setIsCheck(current => !current);
    }

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Container disableGutters >
            {/* MENU OPEN IF */}
            {isBar && <BarDisplay />}
            <Container maxWidth="sm">
                {/* REGISTER */}
                <Grid container direction="row" justifyContent="center" alignItems="center" gap={1} spacing={2} sx={{ my: { xs: '1.8em', sm: '4em' } }}
                    component="form" noValidate autoComplete="off">
                    {/* REGISTRO */}
                    <Grid item xs={11}>
                        <Typography className="fs-2 fw-bold">Contáctanos</Typography>
                    </Grid>
                    <Grid item xs={11} >
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-2' fullWidth>Indícanos si eres<Typography sx={{ color: 'red', ml: 1 }}>*</Typography></InputLabel>
                        <Select fullWidth variant='standard' id='document' color='warning' value={age} onChange={handleChange}
                            displayEmpty renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em className="txt-gray">Ej. transportista, anunciante.</em>;
                                }
                                return selected;
                            }}>
                            <MenuItem value='Transportista'>Transportista</MenuItem>
                            <MenuItem value='Cliente'>Cliente</MenuItem>
                            <MenuItem value='Anunciante'>Anunciante</MenuItem>
                            <MenuItem value='Otro'>Otro</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={11} >
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-2'>Número de celular<Typography sx={{ color: 'red', ml: 1 }}>*</Typography></InputLabel>
                        <TextField fullWidth variant='standard' id='document' color='warning' type="number"
                            placeholder="Ej. 999999999" className='pitalic' />
                    </Grid>
                    <Grid item xs={11} >
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-2'>Correo electrónico</InputLabel>
                        <TextField fullWidth variant='standard' id='document' color='warning' type="email" placeholder='(Opcional)' className='pitalic' />
                    </Grid>
                    <Grid item xs={11} >
                        <InputLabel sx={{ display: 'flex' }} id="document" className='mb-2'>Escribe tu mensaje aquí<Typography sx={{ color: 'red', ml: 1 }}>*</Typography></InputLabel>
                        <TextField fullWidth color='warning' className='fs-2 pitalic'
                            id="standard-multiline-static"
                            multiline
                            rows={4}
                            variant="standard"
                            placeholder='Coméntanos tus dudas o consultas. Nos comunicaremos contigo apenas veamos tu mensaje.'
                        />
                    </Grid>
                    <Grid container item xs={11} direction='row' justifyContent="center" alignItems="center">
                        <Grid item xs={1.5}>
                            <IconButton onClick={handleCheck}>
                                {isCheck ? <CheckBoxOutlinedIcon sx={{ color: red[500] }} fontSize='small' /> : <CheckBoxOutlineBlankOutlinedIcon sx={{ color: red[500] }} fontSize='small' />}
                            </IconButton></Grid>
                        <Grid item xs={10.5} container direction="row" gap={.7}>
                            <Typography className="fs-6">I'm not a robot</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={11} >
                        <Button variant="contained" className="rounded-pill fs-6" color="warning" fullWidth
                            onClick={handleClick}>Contactar</Button>
                    </Grid>
                </Grid>
            </Container >
        </Container >
    );
};

function BarDisplay() {
    return (
        <Box sx={{ width: '100%', m: 0 }}>
            <LinearProgress color="warning" />
        </Box>
    );
}
export default ContacUs;
