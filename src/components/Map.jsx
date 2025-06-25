import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import { usePlaces } from '../hooks/usePlaces';

// Componente para centralizar o mapa na localização do usuário
function LocationMarker({ setPosition }) {
  const map = useMap();
  useEffect(() => {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map, setPosition]);

  return null;
}

// Componente para lidar com cliques no mapa
function MapClickHandler({ onClick }) {
    useMapEvents({
        click(e) {
            onClick(e.latlng);
        },
    });
    return null;
}


function Map({ currentPlace, onMapClick }) {
  const { t } = useTranslation();
  const { places } = usePlaces();
  const [position, setPosition] = useState({ lat: -14.235, lng: -51.925 }); // Centro do Brasil

  return (
    <MapContainer center={position} zoom={4} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Marcador para novo local ou local em edição */}
      {currentPlace && (
        <Marker position={{ lat: currentPlace.lat, lng: currentPlace.lng }}>
            <Popup>{currentPlace.id ? t('map.popup_edit') : t('map.popup_new')}</Popup>
        </Marker>
      )}

      {/* Marcadores para locais salvos */}
      {places.map((place) => (
        <Marker key={place.id} position={{ lat: place.lat, lng: place.lng }}>
          <Popup>
            <b>{place.name}</b><br />{place.description}
          </Popup>
        </Marker>
      ))}

      <LocationMarker setPosition={setPosition} />
      <MapClickHandler onClick={onMapClick} />
    </MapContainer>
  );
}

export default Map;