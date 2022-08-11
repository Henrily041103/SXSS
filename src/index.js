import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './Content';
import { BrowserRouter } from 'react-router-dom';
import { loader } from './Homepage_Scripts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter><MainApp/></BrowserRouter>
);
