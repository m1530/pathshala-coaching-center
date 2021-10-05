import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Topbar from './components/Topbar/Topbar';
import Login from './components/Login/Login';
import AllNews from './components/AllNews/AllNews';
import { createContext } from 'react';
import useNews from './components/Hooks/FetchNews';
import useServices from './components/Hooks/FetchServices';

// create context api
export const userContext = createContext();
function App() {

  const [news] = useNews();
  const [services] = useServices();
  return (
    <userContext.Provider value={[news, services]}>
      <div className="App">
        <Router>
          {/* fixed topbar and header in all pages */}
          <Topbar></Topbar>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/service">
              <Services></Services>
            </Route>
            <Route path="/news">
              <AllNews></AllNews>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* top bar icon route for external link */}
            <Route
              path="/facebook"
              component={() => {
                global.window && (global.window.location.href = 'https://www.facebook.com');
                return null;
              }}
            />
            <Route
              path="/twitter"
              component={() => {
                global.window && (global.window.location.href = 'https://www.twitter.com');
                return null;
              }}
            />
            <Route
              path="/google"
              component={() => {
                global.window && (global.window.location.href = 'https://www.google.com');
                return null;
              }}
            />
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* fixed fotter all pages */}
          <Footer></Footer>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
