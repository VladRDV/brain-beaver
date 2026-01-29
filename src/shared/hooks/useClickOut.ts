import { RefObject, useEffect } from "react";

type T_allowedElementRef = RefObject<any>;

export default function useClickOut(
	allowedElementsRefs: T_allowedElementRef[],
	callback: () => void,
) {
	useEffect(() => {
		const onMouseDown = (event: MouseEvent) => {
			const clickedInsideAllowedElements = allowedElementsRefs.some(
				(el: T_allowedElementRef) =>
					event
						.composedPath()
						.find((element) => element === el.current),
			);

			if (!clickedInsideAllowedElements) callback();
		};

		document.addEventListener("mousedown", onMouseDown);

		return () => {
			document.removeEventListener("mousedown", onMouseDown);
		};
	}, []);
}
