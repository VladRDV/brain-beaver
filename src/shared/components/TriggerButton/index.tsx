import { CSSProperties } from "react";
import { WindowSVG } from "@/shared/components/IconButtonWrapper/components/WindowSVG";
import st from "./styles.module.scss";
import { useAtom } from "jotai";
import { menuOpenAtom } from "@/atoms/menuOpenAtom";
import { IconButtonWrapper } from "../IconButtonWrapper";

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
			<div className={st.content}>
				<IconButtonWrapper onClick={() => setMenuIsOpen(true)}>
					<WindowSVG />
				</IconButtonWrapper>
			</div>
		</div>
	);
}
