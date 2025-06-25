export const getPlaceValidationRules = (t) => ({
  name: {
    required: t('form.error_name_required'),
    minLength: {
      value: 3,
      message: t('form.error_name_min_length'),
    },
  },
  description: {
    required: t('form.error_description_required'),
  },
});