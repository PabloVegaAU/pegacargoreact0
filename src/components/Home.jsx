import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
/* import CardHeader from '@mui/material/CardHeader'; */
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
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
        <Container className="px-0" maxWidth="lg">
            <Grid container direction="column" sx={{ mb: 2 }}>
                {/* BACKGROUND LOGOS */}
                <Grid item className="bg-logos"></Grid>
                {/* TOP */}
                <Grid item>
                    <Card className='py-3 px-5 bg-brown rounded-0'>
                        <CardContent>
                            <Typography component="div" className='mb-4 ffRB fw-bold fs-1 lh-base txt-org'>
                                CONECTANDO BUENAS OPORTUNIDADES
                            </Typography>
                            <Typography component="div" className='fs-5 lh-base ls-1 txt-white'>
                                En PegaCargo queremos dar un espacio de mayores posibilidades para todos aquellos que buscan hacer las cosas
                                bien.
                            </Typography>
                        </CardContent>
                        <Grid container direction='row' justifyContent={{ xs: 'center', sm: 'flex-start' }}
                            alignItems={{ xs: 'center', md: 'center' }} gap={1}>
                            <Button grid item variant="contained" className='rounded-pill my-1 bowhite fs-6 fw-bold'>TRANSPORTA TUS PRODUCTOS</Button>
                            <Button grid item variant="outlined" className='rounded-pill my-2 bwhite fs-6 fw-bold'>ENCUENTRA CLIENTES</Button>
                        </Grid>
                    </Card>
                </Grid>
                {/* CARDS TRANSPORTE */}
                <Grid item sx={{ px: 5, py: 3 }}>
                    <Typography className="txt-second fs-2 mb-4 lh-base ls-1 fw-normal">
                        Remates de transporte entre ciudades.
                    </Typography>
                    <Typography className='txt-second fs-4'>
                        Encuentra el vehículo ideal con espacios para transportar tu mercadería de una ciudad a otra ciudad a precios de
                        remate.
                    </Typography>
                </Grid>
                <Grid container direction='row' gap={{ xs: 5, sm: 3 }} justifyContent="space-around"
                    alignItems="center" sx={{ py: 1, px: 4 }}>
                    <Card sx={{ boxShadow: 0 }}>
                        <CardContent sx={{ p: 0 }}>
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{ p: '.1em' }}>
                                <Box gridColumn="span 10" className="txt-gray">
                                    <Grid container direction="row" justifyContent="flex-start" gap={1}
                                        alignItems="center">
                                        <SvgIcon width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.6388 -1.52588e-05H0.5V7.6796H13.6388V-1.52588e-05ZM13.1064 7.14724H1.03237V0.532351H13.1064V7.14724Z" fill="#757575" />
                                            <path d="M16.44 10.0104H3.56836V10.5428H16.44V10.0104Z" fill="#757575" />
                                            <path d="M16.4401 3.27354H15.9077V9.11215H16.4401V3.27354Z" fill="#757575" />
                                            <path d="M7.06841 5.80761C7.45797 5.808 7.83888 5.6928 8.16294 5.47662C8.487 5.26043 8.73965 4.95297 8.8889 4.59314C9.03815 4.23332 9.0773 3.8373 9.0014 3.45521C8.92549 3.07312 8.73795 2.72214 8.46249 2.44669C8.18703 2.17123 7.83605 1.98368 7.45396 1.90778C7.07188 1.83187 6.67586 1.87102 6.31603 2.02028C5.95621 2.16953 5.64874 2.42217 5.43256 2.74624C5.21637 3.0703 5.10118 3.45121 5.10156 3.84076C5.10156 4.3624 5.30878 4.86268 5.67764 5.23154C6.0465 5.60039 6.54677 5.80761 7.06841 5.80761Z" fill="#757575" />
                                        </SvgIcon>
                                        <Typography className="fs-6 fw-light lh-sm">En la ciudad</Typography>
                                    </Grid>
                                </Box>
                                <Box gridColumn="span 2" className="crayo" fxLayoutAlign="center center">
                                    -60%
                                </Box>
                            </Box>
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{ p: 2 }}>
                                <Box gridColumn="span 10">
                                    <Typography className="txt-truncate fw-normal fs-6 mb-1">
                                        De lurín a Chorillos, Santiago de Surco
                                    </Typography>
                                    <Typography className="mb-1">21/07/2022</Typography>
                                    <Grid container direction="row" gap={1}>
                                        <Grid item className="txt-cyan">Furgoneta</Grid>
                                        <Grid item>450kg.</Grid>
                                    </Grid>
                                </Box>
                                <Box gridColumn="span 2">
                                    <Avatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" />
                                </Box>
                            </Box>
                        </CardContent>
                        <CardActions sx={{ px: 2 }}>
                            <Grid container direction="row" justifyContent="space-between"
                                alignItems="center">
                                <Grid item direction="column" >
                                    <Typography className="fs-5 txt-lt">S/100000</Typography>
                                    <Typography className="fs-3 fw-bold">S/100000</Typography>
                                </Grid>
                                <IconButton>
                                    <ArrowForwardIcon className="fs-1 txt-org" />
                                </IconButton>
                            </Grid>
                        </CardActions>
                    </Card>
                    <Card sx={{ boxShadow: 0 }}>
                        <CardContent sx={{ p: 0 }}>
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{ p: '.1em' }}>
                                <Box gridColumn="span 10" className="txt-gray">
                                    <Grid container direction="row" justifyContent="flex-start" gap={1}
                                        alignItems="center">
                                        <SvgIcon width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.6388 -1.52588e-05H0.5V7.6796H13.6388V-1.52588e-05ZM13.1064 7.14724H1.03237V0.532351H13.1064V7.14724Z" fill="#757575" />
                                            <path d="M16.44 10.0104H3.56836V10.5428H16.44V10.0104Z" fill="#757575" />
                                            <path d="M16.4401 3.27354H15.9077V9.11215H16.4401V3.27354Z" fill="#757575" />
                                            <path d="M7.06841 5.80761C7.45797 5.808 7.83888 5.6928 8.16294 5.47662C8.487 5.26043 8.73965 4.95297 8.8889 4.59314C9.03815 4.23332 9.0773 3.8373 9.0014 3.45521C8.92549 3.07312 8.73795 2.72214 8.46249 2.44669C8.18703 2.17123 7.83605 1.98368 7.45396 1.90778C7.07188 1.83187 6.67586 1.87102 6.31603 2.02028C5.95621 2.16953 5.64874 2.42217 5.43256 2.74624C5.21637 3.0703 5.10118 3.45121 5.10156 3.84076C5.10156 4.3624 5.30878 4.86268 5.67764 5.23154C6.0465 5.60039 6.54677 5.80761 7.06841 5.80761Z" fill="#757575" />
                                        </SvgIcon>
                                        <Typography className="fs-6 fw-light lh-sm">En la ciudad</Typography>
                                    </Grid>
                                </Box>
                                <Box gridColumn="span 2" className="crayo" fxLayoutAlign="center center">
                                    -60%
                                </Box>
                            </Box>
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{ p: 2 }}>
                                <Box gridColumn="span 10">
                                    <Typography className="txt-truncate fw-normal fs-6 mb-1">
                                        De lurín a Chorillos, Santiago de Surco
                                    </Typography>
                                    <Typography className="mb-1">21/07/2022</Typography>
                                    <Grid container direction="row" gap={1}>
                                        <Grid item className="txt-cyan">Furgoneta</Grid>
                                        <Grid item>450kg.</Grid>
                                    </Grid>
                                </Box>
                                <Box gridColumn="span 2">
                                    <Avatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" />
                                </Box>
                            </Box>
                        </CardContent>
                        <CardActions sx={{ px: 2 }}>
                            <Grid container direction="row" justifyContent="space-between"
                                alignItems="center">
                                <Grid item direction="column" >
                                    <Typography className="fs-5 txt-lt">S/100000</Typography>
                                    <Typography className="fs-3 fw-bold">S/100000</Typography>
                                </Grid>
                                <IconButton>
                                    <ArrowForwardIcon className="fs-1 txt-org" />
                                </IconButton>
                            </Grid>
                        </CardActions>
                    </Card>
                    <Card sx={{ boxShadow: 0 }}>
                        <CardContent sx={{ p: 0 }}>
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{ p: '.1em' }}>
                                <Box gridColumn="span 10" className="txt-gray">
                                    <Grid container direction="row" justifyContent="flex-start" gap={1}
                                        alignItems="center">
                                        <SvgIcon width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.6388 -1.52588e-05H0.5V7.6796H13.6388V-1.52588e-05ZM13.1064 7.14724H1.03237V0.532351H13.1064V7.14724Z" fill="#757575" />
                                            <path d="M16.44 10.0104H3.56836V10.5428H16.44V10.0104Z" fill="#757575" />
                                            <path d="M16.4401 3.27354H15.9077V9.11215H16.4401V3.27354Z" fill="#757575" />
                                            <path d="M7.06841 5.80761C7.45797 5.808 7.83888 5.6928 8.16294 5.47662C8.487 5.26043 8.73965 4.95297 8.8889 4.59314C9.03815 4.23332 9.0773 3.8373 9.0014 3.45521C8.92549 3.07312 8.73795 2.72214 8.46249 2.44669C8.18703 2.17123 7.83605 1.98368 7.45396 1.90778C7.07188 1.83187 6.67586 1.87102 6.31603 2.02028C5.95621 2.16953 5.64874 2.42217 5.43256 2.74624C5.21637 3.0703 5.10118 3.45121 5.10156 3.84076C5.10156 4.3624 5.30878 4.86268 5.67764 5.23154C6.0465 5.60039 6.54677 5.80761 7.06841 5.80761Z" fill="#757575" />
                                        </SvgIcon>
                                        <Typography className="fs-6 fw-light lh-sm">En la ciudad</Typography>
                                    </Grid>
                                </Box>
                                <Box gridColumn="span 2" className="crayo" fxLayoutAlign="center center">
                                    -60%
                                </Box>
                            </Box>
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{ p: 2 }}>
                                <Box gridColumn="span 10">
                                    <Typography className="txt-truncate fw-normal fs-6 mb-1">
                                        De lurín a Chorillos, Santiago de Surco
                                    </Typography>
                                    <Typography className="mb-1">21/07/2022</Typography>
                                    <Grid container direction="row" gap={1}>
                                        <Grid item className="txt-cyan">Furgoneta</Grid>
                                        <Grid item>450kg.</Grid>
                                    </Grid>
                                </Box>
                                <Box gridColumn="span 2">
                                    <Avatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" />
                                </Box>
                            </Box>
                        </CardContent>
                        <CardActions sx={{ px: 2 }}>
                            <Grid container direction="row" justifyContent="space-between"
                                alignItems="center">
                                <Grid item direction="column" >
                                    <Typography className="fs-5 txt-lt">S/100000</Typography>
                                    <Typography className="fs-3 fw-bold">S/100000</Typography>
                                </Grid>
                                <IconButton >
                                    <ArrowForwardIcon className="fs-1 txt-org" />
                                </IconButton>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems={{ xs: 'flex-start', sm: 'center' }}
                    sx={{ pl: { xs: 3, sm: 0 }, my: 2 }}>
                    <Button variant="contained" color="warning" className="rounded-pill mat-elevation-z0 fw-bold bg-org">VER MÁS</Button>
                </Grid>
                {/* FOOTER FIXED */}
                <Grid className="bg-second txt-center fs-5 fw-bold" sx={{ py: 2, color: 'white', mb: 5 }}>
                    2022 - PegaCargo
                </Grid>
                {/* FOOTER FIXED */}
                <Grid container item direction='row' justifyContent="center" alignItems="center" gap={2}
                    className='py-2 mt-1 fixed-bottom my-auto px-auto bg-white ffRB'>
                    <Avatar src="./images/thunder-s-express.png" variant="square" className="img-thunder" />
                    <Typography className="fs-5 txt-blue fw-normal">Servicio Express</Typography>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Home;
