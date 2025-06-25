import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-20 text-center">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4 mb-2">{t('not_found.title')}</h2>
      <p className="text-gray-600 mb-6">{t('not_found.message')}</p>
      <Link 
        to="/" 
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {t('not_found.go_home')}
      </Link>
    </div>
  );
}

export default NotFound;