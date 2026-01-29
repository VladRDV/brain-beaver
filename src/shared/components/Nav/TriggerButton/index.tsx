import { useEffect, useRef } from "react";
import ThemedBurgerSVG from "%/ThemedBurgerSVG";
import setCSSValue from "@/shared/functions/setCSSValue";
import st from "./styles.module.scss";

interface T_TriggerButtonProps {
	navIsOpen: boolean;
	setNavIsOpen: (x: boolean) => void;
}

export function TriggerButton({
	navIsOpen,
	setNavIsOpen,
}: T_TriggerButtonProps) {
	const containerRef = useRef(null);

	useEffect(() => {
		setCSSValue(containerRef, "--opacity", navIsOpen ? "0" : "1");
	}, [navIsOpen]);

	return (
		<div ref={containerRef} className={st.container}>
			<div
				className={st.content}
				onClick={() => setNavIsOpen(!navIsOpen)}>
				<ThemedBurgerSVG width="20px" height="20px" />
			</div>
		</div>
	);
}
