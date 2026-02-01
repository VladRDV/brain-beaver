import { atom } from "jotai";

export enum LightColorThemeIds {
	CALM = "calm",
	LIGHT = "light",
}

export enum DarkColorThemeIds {
	DARK = "dark",
	MONOKAI = "monokai",
	FOREST = "forest",
}

export type ColorThemeId = LightColorThemeIds | DarkColorThemeIds;

export const initialValue: ColorThemeId = DarkColorThemeIds.FOREST;

export const colorThemeIdAtom = atom<ColorThemeId>(initialValue);
