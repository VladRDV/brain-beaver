import st from "./styles.module.scss";
import { GearSVG } from "../../GearSVG";
import { settingsOpenAtom } from "@/atoms/settingsOpenAtom";
import { useAtom, useSetAtom } from "jotai";
import { menuOpenAtom } from "@/atoms/menuOpenAtom";

export function SettingsButton() {
	const [settingsIsOpen, setSettingsIsOpen] = useAtom(settingsOpenAtom);
	const setMenuIsOpen = useSetAtom(menuOpenAtom);

	return (
		<div className={st.container}>
			<button
				disabled={settingsIsOpen}
				className={st.content}
				onClick={() => {
					setSettingsIsOpen(true);
					setMenuIsOpen(false);
				}}>
				<GearSVG />
			</button>
		</div>
	);
}
