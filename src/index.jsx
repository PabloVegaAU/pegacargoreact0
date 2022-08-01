import React from 'react';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
/* STYLES */
import './index.scss';
import { StyledEngineProvider } from '@mui/material/styles';
/* COMPONENTS */
import Header from './statics/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="" element={<Home />}></Route>
          <Route path="SignIn" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
