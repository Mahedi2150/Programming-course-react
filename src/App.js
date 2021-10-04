import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contract from './components/Contract/Contract';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Service from './components/Service/Service';



function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <div >
        <Switch >
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/service">
          <Service></Service>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/Contract">
            <Contract></Contract>
          </Route>
          <Route exact path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
