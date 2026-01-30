import st from "./styles.module.scss";
import { CSSProperties, useRef } from "react";
import { useClickOut } from "@/shared/hooks/useClickOut";
import { useAtom } from "jotai";
import { menuOpenAtom } from "@/atoms/menuOpenAtom";
import { SettingsButton } from "./components/SettingsButton";
import { CreateDeckButton } from "./components/CreateDeckButton";
import { DeckListButton } from "./components/DeckListButton";
import { UserManualButton } from "./components/UserManualButton";

export function Menu() {
	const [menuIsOpen, setMenuIsOpen] = useAtom(menuOpenAtom);
	const containerRef = useRef(null);

	useClickOut([containerRef], () => setMenuIsOpen(false));

	return (
		<div
			ref={containerRef}
			className={st.container}
			style={
				{
					"--position-left": menuIsOpen
						? "var(--position-left-open)"
						: "var(--position-left-closed)",
				} as CSSProperties
			}>
			<div className={st.content}>
				<CreateDeckButton />
				<DeckListButton />
				<UserManualButton />
				<SettingsButton />
			</div>
		</div>
	);
}
