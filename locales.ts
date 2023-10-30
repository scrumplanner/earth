const dictionaries = {
    en: () => import("./locales/en.json").then(r => r.default),
    tr: () => import("./locales/tr.json").then(r => r.default)
}
type Lang = 'en' | 'tr'
export const getDictionary = (lang: Lang) => {
    return dictionaries[lang]();
}