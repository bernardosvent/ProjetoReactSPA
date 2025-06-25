import React, { createContext, useState, useEffect, useCallback } from 'react';
import { getPlacesFromStorage, savePlacesToStorage } from '../api/localStorage';
import { v4 as uuidv4 } from 'uuid'; // Precisaremos de UUIDs para os locais. Instale com: npm install uuid

// 1. Cria o Contexto
export const PlacesContext = createContext();

// 2. Cria o Provedor do Contexto
export function PlacesProvider({ children }) {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carrega os lugares do localStorage na inicialização
  useEffect(() => {
    const storedPlaces = getPlacesFromStorage();
    setPlaces(storedPlaces);
    setLoading(false);
  }, []);

  // Salva os lugares no localStorage sempre que o estado 'places' mudar
  useEffect(() => {
    if (!loading) { // Evita salvar o estado inicial vazio antes de carregar
      savePlacesToStorage(places);
    }
  }, [places, loading]);

  const addPlace = useCallback((place) => {
    const newPlace = { ...place, id: uuidv4() };
    setPlaces((prevPlaces) => [...prevPlaces, newPlace]);
  }, []);

  const updatePlace = useCallback((updatedPlace) => {
    setPlaces((prevPlaces) =>
      prevPlaces.map((place) =>
        place.id === updatedPlace.id ? updatedPlace : place
      )
    );
  }, []);

  const deletePlace = useCallback((placeId) => {
    setPlaces((prevPlaces) => prevPlaces.filter((place) => place.id !== placeId));
  }, []);

  // O valor que será fornecido para os componentes consumidores
  const value = {
    places,
    loading,
    addPlace,
    updatePlace,
    deletePlace,
  };

  return (
    <PlacesContext.Provider value={value}>
      {children}
    </PlacesContext.Provider>
  );
}