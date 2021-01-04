import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './sass/main.scss';
import Nav from './components/Nav'
import Home from './pages/Home';
import Events from './pages/Events';
import Favourites from './pages/Favourites';
import About from './pages/About';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Nav />
          <Home />
        </Route>
        <Route path="/recipes">
          <Nav isNavbarWhite={true} />
          <Recipes />
        </Route>
        <Route path="/about">
          <Nav isNavbarWhite={true}/>
          <About />
        </Route>
        <Route path="/events">
          <Nav isNavbarWhite={true}/>
          <Events />
        </Route>
        <Route path="/favourites">
          <Nav isNavbarWhite={true}/>
          <Favourites />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
