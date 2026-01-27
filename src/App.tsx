import './shared/styles/global.scss'
import "modern-normalize"
import Navigation from "./shared/components/Navigation";
import { Route, Switch } from "wouter";
import DeckListScreen from './screens/DeckListScreen';
import DeckCreationScreen from './screens/DeckListScreen';
import DeckEditScreen from './screens/DeckEditScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { routes } from './shared/constants/routes';

function App() {

  return (
    <main className="App">
      <Navigation />

      <Switch>
        <Route path={routes.deckList} component={DeckListScreen} />
        <Route path={routes.deckCreate} component={DeckCreationScreen} />
        <Route path={routes.deckEdit} component={DeckEditScreen} />
        <Route path={routes.challenge} component={ChallengeScreen} />
        <Route path={routes.settings} component={SettingsScreen} />
      </Switch>
    </main>
  );
}

export default App;
