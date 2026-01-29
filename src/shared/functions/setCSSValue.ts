import { RefObject } from "react";

export default function setCSSValue(
	ref: RefObject<HTMLElement | null>,
	valueName: string,
	newValue: string,
) {
	if (ref && ref.current) {
		ref.current.style.setProperty(valueName, newValue);
	}
}
