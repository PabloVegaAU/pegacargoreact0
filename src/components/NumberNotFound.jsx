import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const NumberNotFound = () => {
    const [isBar, setIsBar] = useState(false);

    const handleClick = event => {
        setIsBar(current => !current);
    };

    return (
        <Container disableGutters>
            {/* MENU OPEN IF */}
            {isBar && <BarDisplay />}
            <Container maxWidth="xl">
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    {/* NUMBER NOT FOUND */}
                    <Grid container xs={11} direction="row" justifyContent="space-around" alignItems="center" className="bgl-cyan my-3 py-3 rounded-1">
                        <Grid item className="txt-center" >
                            <PhoneIphoneIcon fontSize="medium" className="txts-cyan" />
                        </Grid>
                        <Grid item xs={7}>
                            <Typography className="txts-cyan" >No encontramos el celular 985 585 568.</Typography>
                        </Grid>
                        <Grid item className="txt-center" >
                            <Link to="/Register">
                                <IconButton >
                                    <HighlightOffIcon fontSize="medium" className="txts-cyan" />
                                </IconButton>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid xs={11.8} container direction="row" alignItems="center" gap={1} className="py-1">
                        <IconButton>
                            <ArrowBackIcon className="txt-org fs-6" />
                        </IconButton>
                        <Typography className="fs-6 fw-bold">Confirma tu número</Typography>
                    </Grid>
                    <Grid xs={10.732} className="py-2 mb-2">
                        <Typography className="fs-7">Ingresa el código de 4 dígitos que se te </Typography>
                        <Typography className="fs-7">envió al <b className="txt-black">985 968 966</b></Typography>
                    </Grid>
                    <Grid xs={10.732} className=" mb-2">
                        <Typography htmlFor="phone-verificación" className="fs-7">Código de verificación</Typography>
                        <Input id="phone-verificación" variant="standard" color="warning" placeholder='0000' className="fs-6 mb-3" fullWidth />
                        <Typography htmlFor="phone-verificación" className="fs-7 fw-normal txt-blue mb-3">Reenviar código</Typography>
                        <Link to="/Profile01" className="txt-white">
                            <Button variant="contained" className="rounded-pill py-3 fs-7 lh-sm bgs-org" fullWidth
                                onClick={handleClick}>Siguiente</Button></Link>
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
export default NumberNotFound;
