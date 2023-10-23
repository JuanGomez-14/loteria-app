import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import LoteriaForm from './components/LoteriaForm';

// Cambia "root" al ID de tu elemento raíz en el DOM

const loteriaRoot = ReactDOM.createRoot(document.getElementById('loteria-root'));

loteriaRoot.render(<LoteriaForm />);

reportWebVitals();
