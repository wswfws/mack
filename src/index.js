import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Timer from './components/timer';
import 'react-circular-progressbar/dist/styles.css';
import ReactDOM from 'react-dom/client';
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Timer />
);
