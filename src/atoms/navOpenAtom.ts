import { atom } from "jotai";

export const initialValue: boolean = false;

export const navOpenAtom = atom<boolean>(initialValue);
