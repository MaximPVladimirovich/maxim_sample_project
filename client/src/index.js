import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './components/Routes';
import NavBar from './components/NavBar';

ReactDOM.render(
  <BrowserRouter>
    <NavBar></NavBar>
    <MainRoutes></MainRoutes>
  </BrowserRouter>,
  document.getElementById('root')
);

