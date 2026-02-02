import st from "./styles.module.scss";
import {
	ColorThemeId,
	colorThemeIdAtom,
	DarkColorThemeIds,
	LightColorThemeIds,
} from "@/atoms/colorThemeAtom";
import { useAtom } from "jotai";

export function ColorThemeSelector() {
	const [colorThemeId, setColorThemeId] = useAtom(colorThemeIdAtom);

	function renderColorThemeList<T>(themeIds: T) {
		return defineColorThemeList(themeIds).map((el) => (
			<option key={el} selected={el === colorThemeId}>
				{el}
			</option>
		));
	}

	function defineColorThemeList<T>(themeIds: T): string[] {
		const colorThemeArr = [];

		for (let key in themeIds) {
			colorThemeArr.push(themeIds[key]);
		}

		return colorThemeArr as string[];
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
						{renderColorThemeList(DarkColorThemeIds)}
					</optgroup>
					<optgroup label="Light themes">
						{renderColorThemeList(LightColorThemeIds)}
					</optgroup>
				</select>
			</label>
		</div>
	);
}
