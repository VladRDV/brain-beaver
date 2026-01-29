import st from "./styles.module.scss";
import { useEffect, useRef } from "react";
import { useClickOut } from "@/shared/hooks/useClickOut";
import { setCSSValue } from "@/shared/functions/setCSSValue";
import { useAtom } from "jotai";
import { settingsOpenAtom } from "@/atoms/settingsOpenAtom";
import { getCSSValue } from "@/shared/functions/getCSSValue";

export function SettingsModal() {
	const [settingsIsOpen, setSettingsIsOpen] = useAtom(settingsOpenAtom);
	const containerRef = useRef(null);

	useEffect(() => {
		const closedValue = getCSSValue(
			containerRef,
			"--position-top-closed",
		);
		const openValue = getCSSValue(containerRef, "--position-top-open");

		setCSSValue(
			containerRef,
			"--position-top",
			settingsIsOpen ? openValue : closedValue,
		);
	}, [settingsIsOpen]);

	useClickOut([containerRef], () => setSettingsIsOpen(false));

	return (
		<div ref={containerRef} className={st.container}>
			<div className={st.content}>Settings Button Modal</div>
		</div>
	);
}
