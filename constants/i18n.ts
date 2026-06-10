import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

const translations = {
    es: {
        appName: 'Sempa',
        player: 'Reproductor',
        library: 'Biblioteca',
        addFile: 'Agrega un archivo',
        urlPlaceholder: 'URL',
        add: 'Agregar',
        downloading: 'Descargando...',
        downloadComplete: 'Descarga completa',
    },
    en: {
        appName: 'Sempa',
        player: 'Player',
        library: 'Library',
        addFile: 'Add file',
        urlPlaceholder: 'URL',
        add: 'Add',
        downloading: 'Downloading...',
        downloadComplete: 'Download complete',
    },
};

const i18n = new I18n(translations);
const supportedLocales = ['en', 'es'];
const deviceLocales = getLocales();
const match = deviceLocales.find(locale => 
    supportedLocales.includes(locale.languageCode ?? '')
);
i18n.enableFallback = true;

export default i18n;
