import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const SignIn = () => {
    const [isBar, setIsBar] = useState(false);

    const handleClick = event => {
        setIsBar(current => !current);
    };

    return (
        <Container disableGutters >
            {/* MENU OPEN IF */}
            {isBar && <BarDisplay />}
            <Container maxWidth="sm">
                {/* REGISTER */}
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    {/* REGISTRO */}
                    <Grid xs={11} sx={{ mt: { xs: '1.8em', sm: '4em' } }} className="mb-4">
                        <Typography className="fs-5 fw-bold mb-2">Registro en PegaCargo</Typography>
                        <Typography className="fs-6 ls-xs">Para empezar, ¿qué quisieras hacer en PegaCargo?</Typography>
                    </Grid>
                    <Grid xs={11} container direction="column" gap={2} className="mb-3">
                        <Link to="/RegisterForm2">
                            <Button className="txt-black capitalize py-3 px-4 buttonShadow" onClick={handleClick} fullWidth>
                                <Grid container direction="row" alignItems="center" gap={2.5}>
                                    <SvgIcon viewBox="0 0 19 20" fontSize="medium">
                                        <path d="M16.9713 19.13H1.07483V3.23352H16.9713V19.13ZM1.89362 18.3112H16.1555V4.04934H1.89362V18.3112Z" fill="#382E2B" />
                                        <path d="M17.2334 0V3.23051H0.818794V0.818794H15.0777V0H0V4.04931H18.0522V0H17.2334Z" fill="#382E2B" />
                                        <path d="M11.1802 10.7723H6.87189V11.5911H11.1802V10.7723Z" fill="#382E2B" />
                                        <path d="M14.0922 16.9774H3.23053V5.9043H4.04932V16.1586H14.0922V16.9774Z" fill="#382E2B" />
                                    </SvgIcon>
                                    <Typography className="fs-5">
                                        Necesito transporte</Typography>
                                </Grid>
                            </Button></Link>
                        <Link to="/RegisterForm1">
                            <Button className="txt-black capitalize py-3 px-4 buttonShadow" onClick={handleClick} fullWidth>
                                <Grid container direction="row" alignItems="center" gap={2.5}>
                                    <SvgIcon viewBox="0 0 20 11" fontSize="medium">
                                        <path d="M13.0979 0H0V9.17696H2.56862C2.65334 9.65297 2.90288 10.084 3.27351 10.3945C3.64414 10.705 4.11222 10.8751 4.59572 10.8751C5.07922 10.8751 5.54729 10.705 5.91792 10.3945C6.28855 10.084 6.53809 9.65297 6.62281 9.17696H11.9975C12.0964 9.67874 12.3785 10.1257 12.7889 10.4309C13.1993 10.7361 13.7086 10.8777 14.2176 10.828C14.7267 10.7783 15.199 10.5409 15.5426 10.1621C15.8862 9.78334 16.0765 9.29021 16.0765 8.77878C16.0765 8.26734 15.8862 7.77421 15.5426 7.39541C15.199 7.01661 14.7267 6.77925 14.2176 6.72957C13.7086 6.67988 13.1993 6.82141 12.7889 7.12661C12.3785 7.4318 12.0964 7.87881 11.9975 8.3806H6.60834C6.51587 7.91289 6.26396 7.49176 5.89559 7.18909C5.52723 6.88642 5.06524 6.72097 4.58848 6.72097C4.11172 6.72097 3.64973 6.88642 3.28136 7.18909C2.913 7.49176 2.66109 7.91289 2.56862 8.3806H0.796359V0.796359H12.8402L18.3423 4.78974V8.3806H17.0508V9.17696H19.13V4.38432L13.0979 0ZM14.0188 7.52922C14.2685 7.52922 14.5126 7.60326 14.7203 7.742C14.9279 7.88074 15.0897 8.07793 15.1853 8.30863C15.2809 8.53934 15.3059 8.79321 15.2572 9.03813C15.2084 9.28304 15.0882 9.50802 14.9116 9.68459C14.735 9.86117 14.5101 9.98142 14.2651 10.0301C14.0202 10.0789 13.7664 10.0539 13.5356 9.95829C13.3049 9.86273 13.1077 9.7009 12.969 9.49327C12.8303 9.28563 12.7562 9.04152 12.7562 8.79181C12.7562 8.45695 12.8893 8.1358 13.126 7.89902C13.3628 7.66224 13.684 7.52922 14.0188 7.52922ZM4.58993 7.52922C4.83964 7.52922 5.08375 7.60326 5.29138 7.742C5.49902 7.88074 5.66085 8.07793 5.75641 8.30863C5.85197 8.53934 5.87697 8.79321 5.82826 9.03813C5.77954 9.28304 5.65929 9.50802 5.48271 9.68459C5.30614 9.86117 5.08116 9.98142 4.83625 10.0301C4.59133 10.0789 4.33746 10.0539 4.10675 9.95829C3.87604 9.86273 3.67885 9.7009 3.54012 9.49327C3.40138 9.28563 3.32733 9.04152 3.32733 8.79181C3.32733 8.45695 3.46036 8.1358 3.69714 7.89902C3.93392 7.66224 4.25507 7.52922 4.58993 7.52922Z" fill="#382E2B" />
                                        <path d="M2.09662 5.33412H2.89008V2.89002H12.9705V2.09656H2.09662V5.33412Z" fill="#382E2B" />
                                    </SvgIcon>
                                    <Typography className="fs-5">
                                        Ofrecer transporte
                                    </Typography>
                                </Grid>
                            </Button></Link>
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

/* function RegisterForm1() {
    return (
        <Box sx={{ width: '100%', m: 0 }}>
            <LinearProgress color="warning" />
        </Box>
    );
} */
export default SignIn;
