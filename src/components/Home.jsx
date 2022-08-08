import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
/* import CardHeader from '@mui/material/CardHeader'; */
import CardContent from '@mui/material/CardContent';
/* import CardActions from '@mui/material/CardActions'; */
/* import CardMedia from '@mui/material/CardMedia'; */
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
/* import { blue } from '@mui/material/colors'; */
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';

const Home = () => {
    return (
        <Container disableGutters>
            <Grid container direction="column" sx={{ mb: 2 }}>
                {/* BACKGROUND LOGOS */}
                <Grid item className="bg-logos"></Grid>
                <Card className='bg-brown mx-45 mb-1 pb-2 px-4' sx={{
                    mt: { xs: '-6em', sm: '-3em', }
                }}>
                    <CardContent>
                        <Typography component="div" className='mb-3 ffRB fw-bold fs-2 txt-org'>
                            CONECTANDO BUENAS OPORTUNIDADES
                        </Typography>
                        <Typography component="div" className='fs-6 lh-base txt-white'>
                            En PegaCargo queremos dar un espacio de mayores posibilidades para todos aquellos que buscan hacer las cosas
                            bien.
                        </Typography>
                    </CardContent>
                    <Grid container justifyContent={{ xs: 'center', sm: 'flex-start' }}
                        alignItems={{ xs: 'center', md: 'center' }} gap={2}>
                        <Button variant="contained" color="inherit" fullWidth className='rounded-pill bowhite fs-7 fw-bold'>TRANSPORTA TUS PRODUCTOS</Button>
                        <Button variant="outlined" color="inherit" fullWidth className='rounded-pill bwhite fs-7 fw-bold'>ENCUENTRA CLIENTES</Button>
                        <Button variant="standard" color="inherit" fullWidth className='rounded-pill mb-2 bwhite fs-7 fw-bold'>ANUNCIA TU NEGOCIO</Button>
                    </Grid>
                </Card>
                {/* CARDS TRANSPORTE */}
                <Grid item sx={{ py: 3 }} >
                    <Card className='bg-gray mx-45'><CardContent>
                        <Typography className="txt-white fs-5 mb-2 lh-base fw-bold">
                            Remates de transporte entre ciudades.
                        </Typography>
                        <Typography className='txt-white fs-6' sx={{ maxWidth: '10.5em' }}>
                            Encuentra el vehículo ideal con espacios para transportar tu mercadería de una ciudad a otra ciudad a precios de
                            remate.
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                <Grid container gap={{ xs: 2, sm: 3 }} justifyContent="space-around"
                    alignItems="center" sx={{ py: 1, px: 4 }}>
                    <Card sx={{ boxShadow: 0 }}>
                        <CardContent sx={{ p: 0 }}>
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid gridColumn="span 9" className="txt-gray mt-3 pt-1 fs-7 ms-3">
                                    <Grid container justifyContent="flex-start" alignItems="center" gap={1}>
                                        <SvgIcon item viewBox="0 0 17 11" fill="none">
                                            <path d="M13.6388 -1.52588e-05H0.5V7.6796H13.6388V-1.52588e-05ZM13.1064 7.14724H1.03237V0.532351H13.1064V7.14724Z" fill="#757575" />
                                            <path d="M16.44 10.0104H3.56836V10.5428H16.44V10.0104Z" fill="#757575" />
                                            <path d="M16.4401 3.27354H15.9077V9.11215H16.4401V3.27354Z" fill="#757575" />
                                            <path d="M7.06841 5.80761C7.45797 5.808 7.83888 5.6928 8.16294 5.47662C8.487 5.26043 8.73965 4.95297 8.8889 4.59314C9.03815 4.23332 9.0773 3.8373 9.0014 3.45521C8.92549 3.07312 8.73795 2.72214 8.46249 2.44669C8.18703 2.17123 7.83605 1.98368 7.45396 1.90778C7.07188 1.83187 6.67586 1.87102 6.31603 2.02028C5.95621 2.16953 5.64874 2.42217 5.43256 2.74624C5.21637 3.0703 5.10118 3.45121 5.10156 3.84076C5.10156 4.3624 5.30878 4.86268 5.67764 5.23154C6.0465 5.60039 6.54677 5.80761 7.06841 5.80761Z" fill="#757575" />
                                        </SvgIcon>
                                        <Typography item className="fs-6 fw-light lh-sm">Remate entre ciudades</Typography>
                                    </Grid>
                                </Grid>
                                <Grid gridColumn="span 3" className="crayo" fxLayoutAlign="center center">
                                    -60%
                                </Grid>
                            </Grid>
                            <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{ p: 2 }}>
                                <Box gridColumn="span 10">
                                    <Typography className="txt-truncate fw-bold fs-5 mb-1">
                                        De Lima a Arequipa
                                    </Typography>
                                    <Typography className="mb-2 fs-7">21/07/2022</Typography>
                                    <Grid container gap={1}>
                                        <Grid item>Furgoneta</Grid>
                                        <Grid item className="txt-gray">| 450kg.</Grid>
                                    </Grid>
                                </Box>
                                <Box gridColumn="span 2">
                                    <Avatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" />
                                </Box>
                            </Grid>
                            <Grid container justifyContent="space-between" sx={{ px: 2 }}
                                alignItems="center">
                                <Grid item direction="column" >
                                    <Typography className="fs-6 txt-lt">S/100000</Typography>
                                    <Typography className="fs-2 fw-bold">S/100000</Typography>
                                </Grid>
                                <IconButton>
                                    <ArrowForwardIcon className="fs-5 txt-org" />
                                </IconButton>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems={{ xs: 'flex-start', sm: 'center' }}
                    sx={{ pl: { xs: 3, sm: 0 }, my: 2 }}>
                    <Button variant="contained" color="warning" className="rounded-pill mat-elevation-z0 fw-bold bg-org">VER MÁS</Button>
                </Grid>
                {/* FOOTER FIXED */}
                <Grid className="bg-second txt-center fs-5 fw-bold" sx={{ py: 2, color: 'white', mb: 5, bottom: '0' }}>
                    2022 - PegaCargo
                </Grid>
                {/* FOOTER FIXED */}
                <Grid container item justifyContent="center" alignItems="center" gap={1}
                    className='py-3 me-1 fixed-bottom px-auto bg-white ffRB'>
                    <Avatar src={require('../images/thunder-s-express.png')} variant="square" className="img-thunder" />
                    <Typography className="fs-6 txt-gray">Pide un servicio express</Typography>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Home;
