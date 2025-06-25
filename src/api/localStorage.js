// Chave usada para salvar os dados no localStorage
const PLACES_KEY = 'favoritePlaces';

/**
 * Busca todos os lugares salvos no localStorage.
 * Retorna um array vazio se não houver nada.
 * @returns {Array} - A lista de lugares.
 */
export const getPlacesFromStorage = () => {
  try {
    const places = localStorage.getItem(PLACES_KEY);
    return places ? JSON.parse(places) : [];
  } catch (error) {
    console.error("Erro ao buscar lugares do localStorage:", error);
    return [];
  }
};

/**
 * Salva a lista completa de lugares no localStorage.
 * @param {Array} places - A lista de lugares para salvar.
 */
export const savePlacesToStorage = (places) => {
  try {
    localStorage.setItem(PLACES_KEY, JSON.stringify(places));
  } catch (error) {
    console.error("Erro ao salvar lugares no localStorage:", error);
  }
};