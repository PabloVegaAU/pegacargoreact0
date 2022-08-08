import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Profile01 = () => {
    const [isBar, setIsBar] = useState(false);

    const handleClick = event => {
        setIsBar(current => !current);
    };

    return (
        <Container disableGutters>
            {/* MENU OPEN IF */}
            {isBar && <BarDisplay />}
            <Container maxWidth="xl">
                <Grid container justifyContent="center" alignItems="flex-start" className="mt-3">
                    {/* NUMBER NOT FOUND */}
                    <Grid item xs={11} container alignItems="center" gap={1}>
                        <IconButton>
                            <ArrowBackIcon color="warning" fontSize="medium" />
                        </IconButton><Typography className="fs-4 fw-bold">Personaliza tu perfil</Typography>
                    </Grid>
                    <Grid item xs={10} className="my-4">
                        <Typography className="fs-6 lh-base ">
                            Asegúrate de tomar o subir una foto de frente, con fondo blando, en un lugar iluminado donde se vea tu rostro completo.
                        </Typography>
                    </Grid>
                    <Grid item xs={10} container justifyContent="center" alignItems="center" >
                        <Grid item xs={2}>
                            <InfoOutlinedIcon color="warning" /></Grid>
                        <Grid item xs={10}>
                            <Typography>Recuerda no llevar accesorios: gorro, lentes o mascarilla.</Typography></Grid>
                    </Grid>
                    <Grid item xs={10} className="my-3">
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    width="auto"
                                    image={require(".././images/takePhotos.jpeg")}
                                    alt="photoProfile"
                                />
                                <CardContent>
                                    <Grid container justifyContent="space-between" alignItems="center" className="px-1">
                                        <Typography className="txt-black fs-6 fw-bold">Sube o toma una selfie</Typography>
                                        <AddAPhotoOutlinedIcon color="warning" className="mb-1" />
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={10} className="my-3 fs-7">
                        <Typography className="fs-6 txt-dark-gray">Descripción (200 caracteres máx.)</Typography>
                        <TextField fullWidth
                            id="description"
                            multiline
                            rows={5}
                            placeholder="Algo sobre ti y tu experiencia."
                            variant="standard"
                            color="warning"
                            size="small"
                            className="m-2 pitalic2"
                        />
                    </Grid>
                    <Grid item xs={10} ><Link to="/Registered" className="txt-white">
                        <Button variant="contained" className="rounded-pill py-2 mb-2 fs-6" color="warning" fullWidth
                            onClick={handleClick}>Guardar</Button></Link>
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
export default Profile01;
