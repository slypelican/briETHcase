import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
// import './styles.css';

import App from './mockup/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)));