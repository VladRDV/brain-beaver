import st from "./styles.module.scss";
import { useEffect, useRef } from "react";
import { useClickOut } from "@/shared/hooks/useClickOut";
import { setCSSValue } from "@/shared/functions/setCSSValue";
import { useAtom } from "jotai";
import { menuOpenAtom } from "@/atoms/menuOpenAtom";
import { TriggerButton } from "../TriggerButton";
import { SettingsButton } from "./components/SettingsButton";
import { getCSSValue } from "@/shared/functions/getCSSValue";
import { Link } from "wouter";
import { routes } from "@/shared/constants/routes";

export function Menu() {
	const [menuIsOpen, setMenuIsOpen] = useAtom(menuOpenAtom);
	const containerRef = useRef(null);

	useEffect(() => {
		const closedValue = getCSSValue(
			containerRef,
			"--position-left-closed",
		);
		const openValue = getCSSValue(
			containerRef,
			"--position-left-open",
		);

		setCSSValue(
			containerRef,
			"--position-left",
			menuIsOpen ? openValue : closedValue,
		);
	}, [menuIsOpen]);

	useClickOut([containerRef], () => setMenuIsOpen(false));

	return (
		<div ref={containerRef} className={st.container}>
			<div className={st.content}>
				<div className={st.top}>
					<Link href={routes.deckCreate}>New Deck</Link>
					<Link href={routes.deckList}>All Decks</Link>
				</div>
				<div className={st.middle}></div>
				<div className={st.bottom}>
					<SettingsButton />
				</div>
			</div>
		</div>
	);
}
