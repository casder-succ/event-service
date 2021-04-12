import logo from './logo.svg';
import plane from './plane.jpg'
import './App.css';
import React from 'react';
import WeeklyScheduler from './components/Monthly';
import CurrentEventsProgress from 'components/CurrentEventsProgress';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,  
  useLocation
} from "react-router-dom";
import moment from 'moment'
import PlaneMenu from 'components/PlaneMenu';

function App() {
  return (

<Router>
    <div>
        <nav className="NavBl">
          <ul className="AppNav">
            <li>
              <Link className="Link" to="/">Home</Link>
            </li>
            <li>
              <Link className="Link" to="/timetable">Today's flights</Link>
            </li>
            <li>
              <Link className="Link" to="/flights">Monthly flights</Link>
            </li>
            <li>
              <Link className="Link" to="/planemenu">Monthly flight menu</Link>
            </li>
            <li>
              <Link className="Link" to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="App">
         
        <section> 
          <Switch>
            <Route path="/planemenu">
              <PlaneMenu />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/timetable/:id">
              <CurrentEventsProgress />
            </Route>
            <Route path="/timetable">
              <Redirect to={`/timetable/${moment().format('YYYY-MM-DD')}`} />
            </Route>
            
            <Route path="/flights">
              <WeeklyScheduler/>
            </Route>
            
            <Route path="/">
              <h1>Home</h1>
              Welcome to our flying service. Please explore <Link to="/flights">flights</Link> per week, or <Link to="/timetable">today scheduler.</Link>
              <img className='plane' src={plane} />
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
            
          </Switch>
          

        </section>
      </div>
    </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function About() {
  let location = useLocation();

  return (
    <div>
      <h2>
        About us
      </h2>
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}
 
export default App;