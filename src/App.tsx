import "./shared/styles/global.scss";
import "modern-normalize";
import Navigation from "./shared/components/Nav";
import { Route, Switch } from "wouter";
import DeckListScreen from "./screens/DeckListScreen";
import DeckCreationScreen from "./screens/DeckListScreen";
import DeckEditScreen from "./screens/DeckEditScreen";
import ChallengeScreen from "./screens/ChallengeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { routes } from "./shared/constants/routes";
import DeckOverviewScreen from "./screens/DeckOverviewScreen";
import { useAtomValue } from "jotai";
import { colorThemeIdAtom } from "./atoms/colorThemeAtom";

export default function App() {
	const colorThemeId = useAtomValue(colorThemeIdAtom);

	return (
		<main data-theme={colorThemeId} className="App">
			<Navigation />

			<Switch>
				<Route path={routes.deckList} component={DeckListScreen} />
				<Route
					path={routes.deckCreate}
					component={DeckCreationScreen}
				/>
				<Route path={routes.deckEdit} component={DeckEditScreen} />
				<Route
					path={routes.challenge}
					component={ChallengeScreen}
				/>
				<Route path={routes.settings} component={SettingsScreen} />
				<Route
					path={routes.deckOverview}
					component={DeckOverviewScreen}
				/>
			</Switch>
		</main>
	);
}
