// import logo from './logo.svg';
import './assets/css/app.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from 'assets/pages/HomePage';
import Details from 'assets/pages/Details' 
import Cart from 'assets/pages/Cart' 
import Congratulation from 'assets/pages/Congratulation';
import NotFound from 'assets/pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories/:idc" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/congratulation" component={Congratulation}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
