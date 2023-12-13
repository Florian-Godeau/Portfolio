import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.scss';
import Home from './pages/Home';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);