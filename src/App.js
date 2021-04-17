import { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Trivia from './pages/Trivia'
import About from './pages/About'
import Homepage from './pages/Homepage'
import TriviaCardMin from './components/TriviaCardMin'
import PageNotFound from './components/error-handling/PageNotFound'

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/trivia" component={Trivia} />
        <Route exact path="/triviamin" component={TriviaCardMin} />
        <Route exact path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
