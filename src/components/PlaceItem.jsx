import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePlaces } from '../hooks/usePlaces';

function PlaceItem({ place, onEdit }) {
  const { t } = useTranslation();
  const { deletePlace } = usePlaces();

  const handleDelete = () => {
    // Em um app real, usaríamos um modal de confirmação.
    // window.confirm é bloqueado em alguns ambientes, então simulamos a confirmação.
    const userConfirmed = confirm(t('buttons.confirm_delete')); // Substitua por um modal customizado se preferir
    if (userConfirmed) {
      deletePlace(place.id);
    }
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-sm mb-3 transition-transform hover:scale-[1.02]">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-bold text-md text-gray-800">{place.name}</h4>
          <p className="text-sm text-gray-600">{place.description}</p>
        </div>
        <div className="flex gap-2 flex-shrink-0 ml-2">
          <button
            onClick={() => onEdit(place)}
            className="px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded hover:bg-blue-200"
          >
            {t('buttons.edit')}
          </button>
          <button
            onClick={handleDelete}
            className="px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded hover:bg-red-200"
          >
            {t('buttons.delete')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceItem;