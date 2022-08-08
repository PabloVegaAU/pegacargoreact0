import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
const Avisos = () => {
    return (
        <Container disableGutters >
            {/* MENU OPEN IF */}

            <Container maxWidth="sm">
                {/* REGISTER */}
                <Grid container direction="row" justifyContent="center" alignItems="center" gap={1} spacing={2} className="my-2">
                    {/* REGISTRO */}
                    <Grid item xs={11}>
                        <Typography className="fs-5 fw-bold mb-2">¡Crea tu aviso gratis!</Typography>
                        <Typography className="fs-6">Elige el tipo de servicio que quieres ofrecer.</Typography>
                    </Grid>

                </Grid>
            </Container >
        </Container >
    );
};

export default Avisos;
