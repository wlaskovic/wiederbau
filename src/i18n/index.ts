import sr from './sr.json';
import en from './en.json';
import hu from './hu.json';
import de from './de.json';

export const languages = { sr, en, hu, de } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'sr';

export const locales: { code: Lang; name: string; flag: string }[] = [
  { code: 'sr', name: 'Srpski', flag: '🇷🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getTranslations(lang: Lang) {
  return languages[lang];
}

export function getLocalePath(lang: Lang, hash?: string): string {
  const base = lang === defaultLang ? '/' : `/${lang}/`;
  return hash ? `${base}${hash}` : base;
}
