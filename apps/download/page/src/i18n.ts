import { IconifyIcon } from '@iconify/react';
import beFlag from '@iconify-icons/twemoji/flag-for-belarus';
import frFlag from '@iconify-icons/twemoji/flag-for-france';
import deFlag from '@iconify-icons/twemoji/flag-for-germany';
import ruFlag from '@iconify-icons/twemoji/flag-for-russia';
import arFlag from '@iconify-icons/twemoji/flag-for-saudi-arabia';
import esFlag from '@iconify-icons/twemoji/flag-for-spain';
import trFlag from '@iconify-icons/twemoji/flag-for-turkey';
import ukFlag from '@iconify-icons/twemoji/flag-for-ukraine';
import enFlag from '@iconify-icons/twemoji/flag-for-united-states';
import jaFlag from '@iconify-icons/twemoji/flag-for-japan';
import testFlag from '@iconify-icons/twemoji/test-tube';
import unknownFlag from '@iconify-icons/twemoji/white-question-mark';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const locales = process.env.LOCALES as unknown as { [key: string]: any };

const langFlagMap: { [key: string]: IconifyIcon } = {
  en: enFlag,
  es: esFlag,
  de: deFlag,
  ar: arFlag,
  test: testFlag,
  ru: ruFlag,
  uk: ukFlag,
  be: beFlag,
  fr: frFlag,
  tr: trFlag,
  ja: jaFlag,
  tok: {
    width: 468,
    height: 617,
    body: `<g xmlns="http://www.w3.org/2000/svg" transform="translate(0,617) scale(0.709091,-0.709091)" fill="#000099" stroke="none">
      <path fill="#000099" stroke="none" d="M302 838 c-14 -14 -16 -126 -3 -147 5 -8 16 -11 25 -8 12 5 16 21 16 71 0 89 -10 112 -38 84z"/>
      <path fill="#000099" stroke="none" d="M521 775 c-27 -57 -32 -108 -10 -113 18 -3 84 122 75 144 -11 30 -44 15 -65 -31z"/>
      <path fill="#000099" stroke="none" d="M34 797 c-8 -22 59 -158 76 -154 38 7 -11 167 -51 167 -11 0 -22 -6 -25 -13z"/>
      <path fill="#000099" stroke="none" d="M254 590 c-50 -7 -128 -52 -175 -100 -98 -100 -65 -346 57 -423 63 -40 107 -50 200 -44 125 7 212 62 275 172 53 92 32 220 -51 317 -62 71 -170 99 -306 78z"/>
      <path fill="#ffff63" stroke="none" d="M443 539 c47 -13 112 -70 138 -120 24 -48 26 -147 3 -190 -22 -43 -82 -108 -117 -125 -137 -71 -277 -55 -351 41 -39 52 -51 92 -51 175 1 77 19 113 82 161 80 63 198 86 296 58z"/>
      <path fill="#000099" stroke="none" d="M462 367 c-5 -7 -15 -28 -21 -48 -21 -67 -100 -120 -144 -98 -30 15 -65 56 -88 102 -21 40 -51 48 -57 14 -5 -26 53 -111 96 -141 89 -62 204 -7 252 119 15 40 -15 81 -38 52z"/>
    </g>`
  }
};

function langExists(lang: string) {
  return !!locales[lang];
}

export interface Language {
  value: string;
  title: string;
  icon: IconifyIcon;
}
export const languages: Language[] = Object.keys(locales).map((lang) => ({
  value: lang,
  title: locales[lang].download._local_name,
  icon: langFlagMap[lang] || unknownFlag
}));

function detectLang() {
  const storedLng = localStorage.getItem('i18nextLng');
  if (storedLng && langExists(storedLng)) return storedLng;
  if (langExists(navigator.language)) return navigator.language;
  if (navigator.languages && navigator.languages.length) {
    const foundLang = navigator.languages.find((lang) => langExists(lang));
    if (foundLang) return foundLang;
  }
  return 'en';
}

i18n.use(initReactI18next).init({
  resources: locales,
  lng: detectLang(),
  fallbackLng: 'en',
  ns: ['download'],
  defaultNS: 'download',
  interpolation: { escapeValue: false }
});

export default i18n;
