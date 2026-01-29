import { RefObject } from "react";

export default function getCSSValue(
	ref: RefObject<HTMLElement | null>,
	valueName: string,
) {
	if (ref && ref.current) {
		return getComputedStyle(ref.current).getPropertyValue(valueName);
	} else {
		throw new Error("[getCSSValue] Component Ref was not provided");
	}
}
