import "./shared/styles/global.scss";
import "modern-normalize";
import { Menu } from "./shared/components/Menu";
import { Route, Switch } from "wouter";
import { DeckListScreen } from "./screens/DeckListScreen";
import { DeckCreationScreen } from "./screens/DeckCreationScreen";
import { routes } from "./shared/constants/routes";
import { useAtomValue } from "jotai";
import { colorThemeIdAtom } from "./atoms/colorThemeAtom";
import { SettingsModal } from "./shared/components/SettingsModal";
import { TriggerButton } from "./shared/components/TriggerButton";
import { UserManualScreen } from "./screens/UserManualScreen";

export function App() {
	const colorThemeId = useAtomValue(colorThemeIdAtom);

	return (
		<main data-theme={colorThemeId} className="App">
			<Menu />
			<TriggerButton />
			<SettingsModal />

			<Switch>
				<Route path={routes.deckList} component={DeckListScreen} />
				<Route
					path={routes.deckCreate}
					component={DeckCreationScreen}
				/>
				<Route path={routes.manual} component={UserManualScreen} />
			</Switch>
		</main>
	);
}
