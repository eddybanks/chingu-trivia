import { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Trivia from './pages/Trivia';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Trivia} />
      </Switch>
    </Fragment>
  );
}

export default App;
