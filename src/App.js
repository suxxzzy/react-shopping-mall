import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './pages/Home';
import Store from './pages/Store';
import Like from './pages/Like';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/store">
            <Store/>
          </Route>
          <Route path="/like">
            <Like/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
