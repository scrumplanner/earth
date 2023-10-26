import {THEME_TYPES} from "@/types/themeTypes";

interface ILocalStorageHelper {
    setItem: (key: string, value: any) => boolean;
    getItem: (key: string) => any;
    removeItem: (key: string) => boolean;
    clearAll: () => boolean;
}

const setItem: ILocalStorageHelper['setItem'] = (key, value) => {
    try {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, value);
            return true;
        }
        return false;
    } catch (e) {
        console.error("LocalStorage Set Errors:", e);
        return false;
    }
};

const getItem: ILocalStorageHelper['getItem'] = (key) => {
    try {
        if (typeof window !== 'undefined') {
            const item = window.localStorage.getItem(key);
            return item ?? null;
        }
        return null;
    } catch (e) {
        console.error("LocalStorage Get Errors:", e);
        return null;
    }
};

const removeItem: ILocalStorageHelper['removeItem'] = (key) => {
    try {
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem(key);
            return true;
        }
        return false;
    } catch (e) {
        console.error("LocalStorage Remove Errors:", e);
        return false;
    }
};

const clearAll: ILocalStorageHelper['clearAll'] = () => {
    try {
        if (typeof window !== 'undefined') {
            window.localStorage.clear();
            return true;
        }
        return false;
    } catch (e) {
        console.error("LocalStorage Clear Errors:", e);
        return false;
    }
};

export const applyThemePreference = (theme: THEME_TYPES) => {
    const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
    const root = window.document.documentElement;
    const isDark = theme === THEME_DARK;
    root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
    root.classList.add(theme);
};

const localStorageHelper: ILocalStorageHelper = {
    setItem,
    getItem,
    removeItem,
    clearAll,
};


export default localStorageHelper;
