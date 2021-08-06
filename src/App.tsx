import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BookYolo } from './containers/BookYolo';
import { Landing } from './containers/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/book-yolo'>
          <BookYolo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
