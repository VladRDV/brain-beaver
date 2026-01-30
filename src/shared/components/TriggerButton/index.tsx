import { CSSProperties } from "react";
import { BurgerSVG } from "@/shared/svg/BurgerSVG";
import st from "./styles.module.scss";
import { useAtom } from "jotai";
import { menuOpenAtom } from "@/atoms/menuOpenAtom";

export function TriggerButton({}) {
	const [menuIsOpen, setMenuIsOpen] = useAtom(menuOpenAtom);

	return (
		<div
			className={st.container}
			style={
				{
					"--opacity": menuIsOpen ? "0" : "1",
				} as CSSProperties
			}>
			<div
				className={st.content}
				onClick={() => setMenuIsOpen(true)}>
				<BurgerSVG />
			</div>
		</div>
	);
}
