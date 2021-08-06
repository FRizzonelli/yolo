import { Landing } from './containers/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/book-yolo'>
          <div />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
