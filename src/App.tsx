import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BookYolo } from './containers/BookYolo';
import { Landing } from './containers/Landing';
import { YoloProvider } from './providers/YoloProvider';

function App() {
  return (
    <YoloProvider>
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
    </YoloProvider>
  );
}

export default App;
