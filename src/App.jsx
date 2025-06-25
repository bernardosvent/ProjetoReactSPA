import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { PlacesProvider } from './context/PlacesContext';
import Header from './components/Header';

function App() {
  return (
    <PlacesProvider>
      <BrowserRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
    </PlacesProvider>
  );
}

export default App;