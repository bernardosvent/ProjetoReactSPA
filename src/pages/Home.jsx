import React, { useState } from 'react';
import Map from '../components/Map';
import PlacesList from '../components/PlacesList';
import PlaceForm from '../components/PlaceForm';

function Home() {
  // `currentPlace` armazena o local sendo editado OU as coordenadas de um novo local
  // Ex (editando): { id: '123', name: 'Casa', ..., lat: -23, lng: -46 }
  // Ex (novo): { lat: -23, lng: -46 }
  const [currentPlace, setCurrentPlace] = useState(null);

  const handleMapClick = (latlng) => {
    // Define um novo local para ser adicionado, passando as coordenadas
    setCurrentPlace({ lat: latlng.lat, lng: latlng.lng });
  };

  const handleEditPlace = (place) => {
    // Define o local existente para ser editado
    setCurrentPlace(place);
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Coluna da Esquerda: Lista e Formulário */}
      <div className="md:col-span-1 h-full flex flex-col">
        {currentPlace ? (
          <PlaceForm currentPlace={currentPlace} setCurrentPlace={setCurrentPlace} />
        ) : (
          <PlacesList onEdit={handleEditPlace} />
        )}
      </div>

      {/* Coluna da Direita: Mapa */}
      <div className="md:col-span-2">
        <Map currentPlace={currentPlace} onMapClick={handleMapClick} />
      </div>
    </div>
  );
}

export default Home;