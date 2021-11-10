import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import User from './components/User/User'
import Login from './components/Login/Login'
import {useState} from 'react'
import Ongoing from './components/Ongoing/Ongoing'

function App() {
  const [isLoggedIn, setLogin] = useState(false)
  return (
    <div>
    <Router>
      <div>
        <Switch>
          <Route path='/login'>
            <Login login={isLoggedIn} setLogin={setLogin}/>
          </Route>
          <Route path='/user'>
            <Header login={isLoggedIn} setLogin={setLogin}/>
            <User login={isLoggedIn} setLogin={setLogin}/>
          </Route>
          <Route path='/home'>
            <Header login={isLoggedIn} setLogin={setLogin}/>
            <Home login={isLoggedIn} setLogin={setLogin}/>
          </Route>
          <Route path='/ongoing'>
            <Header login={isLoggedIn} setLogin={setLogin}/>
            <Ongoing />
          </Route>
          <Route path='/'>
            <Header login={isLoggedIn} setLogin={setLogin}/>
            <Home login={isLoggedIn} setLogin={setLogin}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
