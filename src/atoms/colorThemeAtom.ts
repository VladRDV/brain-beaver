import { atom } from "jotai";

type T_ColorThemeId = "dark" | "light" | "monokai" | "calm" | "forest";

export const initialValue: T_ColorThemeId = "dark";

export const colorThemeIdAtom = atom<T_ColorThemeId>(initialValue);
