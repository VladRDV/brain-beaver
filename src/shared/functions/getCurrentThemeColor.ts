export type T_colorType =
	| "primary"
	| "success"
	| "warning"
	| "accent"
	| "dabger"
	| "bg"
	| "text";

export type T_ColorName = `${T_colorType}${1 | 2 | 3}`;

export type T_ThemeColorCSSVariableName = `--color-${T_ColorName}`;

export default function getCurrentThemeColor(colorName: T_ColorName) {
	const rootElement = document.documentElement;

	const computedStyles = window.getComputedStyle(rootElement);

	const cssVarName: T_ThemeColorCSSVariableName = `--color-${colorName}`;

	return computedStyles.getPropertyValue(cssVarName).trim();
}
