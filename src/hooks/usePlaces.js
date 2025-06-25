import { useContext } from 'react';
import { PlacesContext } from '../context/PlacesContext';

/**
 * Hook customizado para acessar o contexto de lugares.
 * Simplifica o uso do `useContext(PlacesContext)` nos componentes.
 * @returns O valor do PlacesContext.
 */
export const usePlaces = () => {
  const context = useContext(PlacesContext);
  if (context === undefined) {
    throw new Error('usePlaces deve ser usado dentro de um PlacesProvider');
  }
  return context;
};