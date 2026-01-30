import { atom } from "jotai";

export const initialValue: boolean = false;

export const userManualOpenAtom = atom<boolean>(initialValue);
