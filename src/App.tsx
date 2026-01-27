import './shared/styles/global.scss'
import "modern-normalize"
import Navigation from "./shared/components/Navigation";
import { Route, Switch } from "wouter";
import DeckListScreen from './screens/DeckListScreen';

function App() {

  return (
    <main className="App">
      <Navigation />

      <Switch>
        <Route path="/" component={DeckListScreen} />
        {/* <Route path="/deck-create" component={DeckCreationScreen} />
        <Route path="/deck-edit" component={DeckEditScreen} />
        <Route path="/challenge" component={ChallengeScreen} />
        <Route path="/settings" component={SettingsScreen} /> */}
      </Switch>
    </main>
  );
}

export default App;
