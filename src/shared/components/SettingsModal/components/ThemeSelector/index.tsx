import st from "./styles.module.scss";
import {
	ColorThemeId,
	colorThemeIdAtom,
	DarkColorThemeIds,
	LightColorThemeIds,
} from "@/atoms/colorThemeAtom";
import { useAtom } from "jotai";

export function ThemeSelector() {
	const [colorThemeId, setColorThemeId] = useAtom(colorThemeIdAtom);

	function renderThemeList<T>(themeIds: T) {
		const themeArr = [];
		for (let key in themeIds) {
			themeArr.push(themeIds[key]);
		}

		return themeArr.map((el) => (
			<option key={el as string} selected={el === colorThemeId}>
				{el as string}
			</option>
		));
	}
	return (
		<div className={st.container}>
			<label className={st.content}>
				<span>Select a color theme</span>
				<select
					name="Select a color theme"
					multiple={false}
					onChange={(event) => {
						setColorThemeId(
							event.target.value as ColorThemeId,
						);
					}}>
					<optgroup label="Dark themes">
						{renderThemeList(DarkColorThemeIds)}
					</optgroup>
					<optgroup label="Light themes">
						{renderThemeList(LightColorThemeIds)}
					</optgroup>
				</select>
			</label>
		</div>
	);
}
