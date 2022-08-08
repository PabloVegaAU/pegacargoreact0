import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
/* import InputLabel from '@mui/material/InputLabel'; */
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { SvgIcon } from '@mui/material';

const Registered = () => {
    const [isBar, setIsBar] = useState(false);

    const handleClick = event => {
        setIsBar(current => !current);
    };

    return (
        <Container disableGutters>
            {/* MENU OPEN IF */}
            {isBar && <BarDisplay />}
            <Container maxWidth="xl">
                <Grid container direction="column" alignItems="center" className="my-4">
                    <SvgIcon viewBox="0 0 68 67" sx={{ fontSize: "5em" }}>
                        <path d="M33.47 0C14.9328 0 0 14.9328 0 33.47C0 52.0072 14.9328 66.94 33.47 66.94C52.0072 66.94 66.94 52.0072 66.94 33.47C66.94 29.8707 66.456 26.2791 65.1687 22.9295L63.2211 25.4601C63.736 27.5198 64.3654 31.158 64.3654 33.47C64.3654 49.1803 50.6341 64.3654 33.47 64.3654C17.7597 64.3654 2.57462 50.6341 2.57462 33.47C2.57462 17.7597 15.1616 2.57462 33.47 2.57462C41.1938 2.57462 49.1777 5.69534 54.0669 10.5845L56.6415 9.49518C50.7199 3.56842 42.4812 0 33.47 0ZM64.3654 12.8731L33.47 43.7685L20.883 32.3257L18.5944 33.47L31.6189 45.6196L33.47 47.3884L35.3211 45.6196L66.2165 14.7242L64.3654 12.8731Z" fill="#2E7D32" />
                        <path d="M32.3262 39.1915L66.6544 4.86328" stroke="#2E7D32" stroke-width="3" />
                    </SvgIcon>
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
export default Registered;
