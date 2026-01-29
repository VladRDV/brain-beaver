import { atom } from "jotai";

export const initialValue: boolean = false;

export const menuOpenAtom = atom<boolean>(initialValue);
