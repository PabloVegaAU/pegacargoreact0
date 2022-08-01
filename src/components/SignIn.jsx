import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
/* import InputLabel from '@mui/material/InputLabel'; */
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';;

const SignIn = () => {
    const [isBar, setIsBar] = useState(false);

    const handleClick = event => {
        setIsBar(current => !current);
    };

    return (
        <Container className="px-0" maxWidth="lg">
            {/* MENU OPEN IF */}
            {isBar && <BarDisplay />}
            <Grid container direction="column"
                alignItems="center">
                <Grid item className="mt-5 mb-1">
                    <Typography className="fs-2 ffRB fw-bold">Ingresa a PegaCargo</Typography>
                    <FormControl >
                        <Typography htmlFor="phone-number" className="fs-6 txt-gray mb-0 mt-4">Número de celular</Typography>
                        <Input id="phone-number" variant="standard" color="warning" className="fs-3 border-0" />
                        <Button variant="contained" className="rounded-pill py-2 mt-4 fs-5" color="warning"
                            onClick={handleClick}>Siguiente</Button>
                        <Typography className="txt-gray py-3 fs-5">Si no tienes una cuenta,
                            <Link to="" className="ps-1 txt-org txt-link">crea una aquí</Link>
                        </Typography>
                    </FormControl >
                </Grid >
            </Grid>
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
export default SignIn;
