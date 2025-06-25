import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  // Carrega traduções usando http
  // Veja: https://github.com/i18next/i18next-http-backend
  .use(HttpBackend)
  // Passa a instância do i18n para o react-i18next.
  .use(initReactI18next)
  // Configurações iniciais
  .init({
    // Idioma padrão
    fallbackLng: 'pt',
    // Namespace padrão
    ns: ['translation'],
    defaultNS: 'translation',
    debug: true, // Habilita logs no console para desenvolvimento

    backend: {
      // Caminho para os arquivos de tradução
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    interpolation: {
      escapeValue: false, // React já protege contra XSS
    },
  });

export default i18n;