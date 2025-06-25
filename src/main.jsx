import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/main.css';
import './i18n'; // Importa e inicializa o i18next

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback="Carregando...">
      <App />
    </React.Suspense>
  </React.StrictMode>
);