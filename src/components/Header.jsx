import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">{t('header.title')}</h1>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;