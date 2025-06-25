import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { usePlaces } from '../hooks/usePlaces';
import PlaceItem from './PlaceItem';

function PlacesList({ onEdit }) {
  const { t } = useTranslation();
  const { places, loading } = usePlaces();
  const [filter, setFilter] = useState('');

  const filteredPlaces = useMemo(() => {
    if (!filter) return places;
    return places.filter((place) =>
      place.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [places, filter]);

  if (loading) {
    return <p>{t('places_list.loading')}</p>;
  }

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-3">{t('places_list.title')}</h3>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder={t('places_list.filter_placeholder')}
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
      />
      <div className="max-h-[60vh] overflow-y-auto pr-2">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <PlaceItem key={place.id} place={place} onEdit={onEdit} />
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">{t('places_list.no_places')}</p>
        )}
      </div>
    </div>
  );
}

export default PlacesList;