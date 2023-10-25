import create from "zustand";
import { persist } from "zustand/middleware";
import { THEME_TYPES } from "@/types/themeTypes";

interface ThemeState {
    theme: THEME_TYPES,
    toggleTheme: () => void
}
const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;


const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: THEME_LIGHT,
            toggleTheme: () =>
                set((state: ThemeState) => ({
                    theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
                })),
        }),
        {
            name: "theme",
        }
    )
);

export default useThemeStore;