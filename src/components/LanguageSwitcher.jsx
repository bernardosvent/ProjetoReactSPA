import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const selectedClasses = 'bg-blue-600 text-white';
  const defaultClasses = 'bg-white text-gray-700 hover:bg-gray-200';

  return (
    <div className="flex rounded-md shadow-sm">
      <button
        onClick={() => changeLanguage('pt')}
        className={`px-3 py-1 text-sm font-semibold rounded-l-md transition-colors ${i18n.language === 'pt' ? selectedClasses : defaultClasses}`}
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-sm font-semibold rounded-r-md transition-colors border-l border-gray-300 ${i18n.language === 'en' ? selectedClasses : defaultClasses}`}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;