import { atom } from "jotai";

export const initialValue: boolean = false;

export const settingsOpenAtom = atom<boolean>(initialValue);
