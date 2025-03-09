import React, {StrictMode} from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './styles.css';

import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);