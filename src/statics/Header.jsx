import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

const Header = () => {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  return (
    <AppBar position="static" className="bg-brown">
      <Container className="px-0" maxWidth="lg">
        <Toolbar disableGutters className="bg-brown px-3">
          {/* LOGO PORTATIL - INICIO */}
          <Link to="">
            <IconButton>
              <SvgIcon viewBox="0 0 183 136" className="txt-org logoSVG">
                <path d="M149.48 68.0598C147.325 68.0598 145.201 67.5477 143.283 66.5657C141.365 65.5838 139.707 64.16 138.447 62.4118C137.187 60.6636 136.361 58.6411 136.036 56.5108C135.711 54.3805 135.896 52.2034 136.578 50.1591C137.259 48.1147 138.417 46.2616 139.955 44.7523C141.493 43.2431 143.368 42.1209 145.425 41.4784C147.482 40.8359 149.662 40.6913 151.786 41.0567C153.91 41.422 155.916 42.2868 157.64 43.5798L165.79 32.6998C161.749 29.669 156.944 27.8233 151.913 27.3697C146.882 26.916 141.824 27.8723 137.306 30.1314C132.788 32.3904 128.988 35.863 126.332 40.1599C123.677 44.4569 122.27 49.4084 122.27 54.4598C122.27 59.5111 123.677 64.4627 126.332 68.7597C128.988 73.0566 132.788 76.5292 137.306 78.7882C141.824 81.0472 146.882 82.0035 151.913 81.5499C156.944 81.0962 161.749 79.2506 165.79 76.2198L157.64 65.3398C155.289 67.1106 152.424 68.0656 149.48 68.0598Z" />
                <path d="M173.95 87.0897C169.325 90.5558 164.017 92.9996 158.376 94.2591C152.736 95.5186 146.892 95.5651 141.232 94.3955C135.572 93.2259 130.226 90.8669 125.546 87.4749C120.867 84.0828 116.962 79.735 114.09 74.7197C111.651 78.9113 108.772 82.8302 105.5 86.4097C109.738 92.2388 115.091 97.1678 121.25 100.91C127.409 104.653 134.25 107.135 141.376 108.211C148.501 109.288 155.77 108.937 162.759 107.181C169.749 105.425 176.32 102.297 182.09 97.9797L173.95 87.0897Z" />
                <path d="M54.3 54.4599C57.8418 54.3638 61.2062 52.8894 63.6774 50.3503C66.1485 47.8112 67.5312 44.408 67.5312 40.8649C67.5312 37.3218 66.1485 33.9186 63.6774 31.3795C61.2062 28.8404 57.8418 27.366 54.3 27.2699H27.09V13.6699H54.29C61.4122 13.8065 68.1966 16.7317 73.1852 21.8169C78.1738 26.9021 80.9684 33.7413 80.9684 40.8649C80.9684 47.9885 78.1738 54.8278 73.1852 59.9129C68.1966 64.9981 61.4122 67.9233 54.29 68.0599H13.59V135.97H-0.0100098V54.4599H54.3Z" />
                <path d="M55.2599 81.5803C65.1061 81.5824 74.6208 78.023 82.0479 71.559C89.4751 65.0949 94.3134 56.1625 95.67 46.4102C97.058 37.0958 100.84 28.3011 106.645 20.8863C112.451 13.4714 120.082 7.69044 128.791 4.10867C137.501 0.526887 146.991 -0.73303 156.333 0.452172C165.676 1.63737 174.551 5.22709 182.09 10.8702L173.92 21.7502C168.266 17.5119 161.608 14.8147 154.598 13.9228C147.588 13.031 140.466 13.975 133.931 16.6626C127.396 19.3501 121.67 23.689 117.316 29.2542C112.961 34.8195 110.127 41.4203 109.09 48.4102C107.25 61.3844 100.788 73.2583 90.8928 81.849C80.9976 90.4398 68.334 95.17 55.23 95.1702H40.7V135.96H27.09V81.5803H55.2599Z" />
              </SvgIcon>
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'none' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              LOGOPORT
            </Typography>
          </Link>
          {/* ESPACE BETWEEN */}
          <Box sx={{ flexGrow: 1 }} />
          {/*PAGES */}
          <Box>
            <Grid container
              gap={2}
              direction="row"
              justifyContent="flex-end"
              alignItems="center">
              <Grid item sx={{ my: 2, color: 'white', display: { xs: 'none', md: 'flex' } }}>
                <Link className="txt-link" to="/inicio" underline="none">
                  Inicio
                </Link>
              </Grid>
              <Grid item sx={{ my: 2, color: 'white', display: { xs: 'none', md: 'flex' } }}>
                <Link className="txt-link" to="/Solicitar" underline="none"
                >
                  Solicitar transporte
                </Link></Grid>
              <Grid item sx={{ my: 2, color: 'white', display: { xs: 'none', md: 'flex' } }}>
                <Link className="txt-link" to="/Ofrecer" underline="none"
                >
                  Ofrece transporte
                </Link></Grid>
              <Grid item sx={{ my: 2, color: 'white', display: { xs: 'none', md: 'flex' } }}>
                <Link className="txt-link" to="/Anunciar" underline="none"
                >
                  Anuncia tu negocio
                </Link></Grid>
              <Grid item sx={{ my: 2, color: 'white', display: { xs: 'none', md: 'flex' } }}>
                <Link className="txt-link" to="/Contactar" underline="none"
                >
                  Contáctanos
                </Link></Grid>
              {/* INGRESAR */}
              <Grid item>
                <Link className="rounded-pill border-1 px-3 py-1 fw-bold txt-white"
                  to="/SignIn" underline="none">
                  INGRESAR
                </Link>
              </Grid>
              {/* MENU ICON */}
            </Grid>
          </Box>
          <Box sx={{ color: 'white', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
            >
              {!isShown && <MenuIcon />}
              {isShown && <CloseIcon />}
            </IconButton>
          </Box>
        </Toolbar>
        {/* MENU OPEN IF */}
        {isShown && <MenuDisplay />}
      </Container>
    </AppBar >
  );
};

function MenuDisplay() {
  return (
    <Toolbar disableGutters sx={{ display: { xs: 'block', md: 'none' } }} className="h-total py-4 lh-lg fs-4 header-menu">
      {/* PAGES LINK DISPLAY */}
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item sx={{ py: 2 }}>
          <Link component="button" to="" underline="none" color="black" className="txt-link fs-3">Inicio</Link>
        </Grid>
        <Grid item sx={{ py: 2 }}>
          <Link component="button" to="/" underline="none" color="black" className="txt-link fs-3">Solicitar transporte</Link>
        </Grid>
        <Grid item sx={{ py: 2 }}>
          <Link component="button" to="/" underline="none" color="black" className="txt-link fs-3">Ofrece transporte</Link>
        </Grid>
        <Grid item sx={{ py: 2 }}>
          <Link component="button" to="/" underline="none" color="black" className="txt-link fs-3">Anuncia tu negocio</Link>
        </Grid>
        <Grid item sx={{ py: 2 }}>
          <Link component="button" to="/" underline="none" color="black" className="txt-link fs-3">Contáctanos</Link>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
export default Header;
