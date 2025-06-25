import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { usePlaces } from '../hooks/usePlaces';
import { getPlaceValidationRules } from '../utils/validation';

function PlaceForm({ currentPlace, setCurrentPlace }) {
  const { t } = useTranslation();
  const { addPlace, updatePlace } = usePlaces();
  const validationRules = getPlaceValidationRules(t);

  const isEditing = currentPlace?.id;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
    },
  });

  // Popula o formulário quando um lugar é selecionado para edição
  useEffect(() => {
    if (isEditing) {
      reset({
        name: currentPlace.name,
        description: currentPlace.description,
      });
    } else {
      reset({ name: '', description: '' });
    }
  }, [currentPlace, isEditing, reset]);

  const onSubmit = (data) => {
    if (isEditing) {
      updatePlace({ ...currentPlace, ...data });
    } else {
      addPlace({ ...currentPlace, ...data });
    }
    setCurrentPlace(null); // Fecha o formulário após salvar
  };

  const handleCancel = () => {
    setCurrentPlace(null);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold mb-3">
        {isEditing ? t('form.title_edit') : t('form.title_new')}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.name_label')}
          </label>
          <input
            type="text"
            id="name"
            {...register('name', validationRules.name)}
            className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder={t('form.name_placeholder')}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.description_label')}
          </label>
          <textarea
            id="description"
            rows="3"
            {...register('description', validationRules.description)}
            className={`w-full px-3 py-2 border rounded-md ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
            placeholder={t('form.description_placeholder')}
          ></textarea>
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            {t('buttons.cancel')}
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {t('buttons.save')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlaceForm;