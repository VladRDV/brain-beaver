import { useEffect, useRef } from "react";
import { BurgerSVG } from "@/shared/components/BurgerSVG";
import { setCSSValue } from "@/shared/functions/setCSSValue";
import st from "./styles.module.scss";
import { useAtom } from "jotai";
import { menuOpenAtom } from "@/atoms/menuOpenAtom";

export function TriggerButton({}) {
	const [menuIsOpen, setMenuIsOpen] = useAtom(menuOpenAtom);
	const containerRef = useRef(null);

	useEffect(() => {
		setCSSValue(containerRef, "--opacity", menuIsOpen ? "0" : "1");
	}, [menuIsOpen]);

	return (
		<div ref={containerRef} className={st.container}>
			<div
				className={st.content}
				onClick={() => setMenuIsOpen(true)}>
				<BurgerSVG />
			</div>
		</div>
	);
}
