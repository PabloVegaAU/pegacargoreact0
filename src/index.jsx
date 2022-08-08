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
import Register from './components/Register';
import RegisterForm1 from './components/RegisterForm1';
import RegisterForm2 from './components/RegisterForm2';
import Contact from './components/ContactUs';
import Profile01 from './components/Profile01';
import Registered from './components/Registered';
import NumberNotFound from './components/NumberNotFound';
import Avisos from './components/Avisos';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="" element={<Home />}></Route>
          <Route path="SignIn" element={<SignIn />}></Route>
          <Route path="Register" element={<Register />}></Route>
          <Route path="ContactUs" element={<Contact />}></Route>
          <Route path="Profile01" element={<Profile01 />}></Route>
          <Route path="Registered" element={<Registered />}></Route>
          <Route path="NumberNotFound" element={<NumberNotFound />}></Route>
          <Route path="RegisterForm1" element={<RegisterForm1 />}></Route>
          <Route path="RegisterForm2" element={<RegisterForm2 />}></Route>
          <Route path="Avisos" element={<Avisos />}></Route>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
