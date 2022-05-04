export const set = (langEn, bool) => window.localStorage.setItem(langEn, JSON.stringify(bool));
export const get = (langEn) => JSON.parse(window.localStorage.getItem(langEn));
