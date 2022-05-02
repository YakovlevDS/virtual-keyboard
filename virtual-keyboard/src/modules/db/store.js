export const set = (langEn, bool) => window.localStorage.setItem(langEn, JSON.stringify(bool));
export const get = (langEn, bool) => JSON.parse(window.localStorage.getItem(langEn));