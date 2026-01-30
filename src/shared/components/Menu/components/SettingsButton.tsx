import { GearSVG } from "@/shared/svg/GearSVG";
import { settingsOpenAtom } from "@/atoms/settingsOpenAtom";
import { useAtom, useSetAtom } from "jotai";
import { menuOpenAtom } from "@/atoms/menuOpenAtom";
import { IconButtonWrapper } from "./IconButtonWrapper";

export function SettingsButton() {
	const [settingsIsOpen, setSettingsIsOpen] = useAtom(settingsOpenAtom);
	const setMenuIsOpen = useSetAtom(menuOpenAtom);

	return (
		<IconButtonWrapper
			disabled={settingsIsOpen}
			onClick={() => {
				setSettingsIsOpen(true);
				setMenuIsOpen(false);
			}}>
			<GearSVG />
		</IconButtonWrapper>
	);
}
