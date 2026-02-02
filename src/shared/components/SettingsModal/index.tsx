import { useAtom } from "jotai";
import { SlideModalWrapper } from "../SlideModalWrapper";
import { settingsOpenAtom } from "@/atoms/settingsOpenAtom";
import { ColorThemeSelector } from "./components/ColorThemeSelector";

export function SettingsModal() {
	const [settingsIsOpen, setSettingsIsOpen] = useAtom(settingsOpenAtom);

	return (
		<SlideModalWrapper
			slideOutDirection={"up"}
			isOpen={settingsIsOpen}
			closeModal={() => setSettingsIsOpen(false)}>
			<ColorThemeSelector />
		</SlideModalWrapper>
	);
}
