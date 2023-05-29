import React from "react";
import About from "./About"
import Contact from "./Contact";
import Career from './Career';
import EventTut from "./events";
import Home from './Home';
import Users from "./Users";
import { Nav, Navbar, Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/about">About</Link></Nav.Link>
            <Nav.Link ><Link to="/career">Career</Link></Nav.Link>
            <Nav.Link ><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link ><Link to="/events">events</Link></Nav.Link>
            <Nav.Link ><Link to="/users">Users</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/career">
          <Career />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/events">
          <EventTut />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
</div>
    </Router>
  );
}

export default App;


/*
function App() {
  const [msg,setMsg] = useState("From parent component to child component");

  return (
    <div className="App">
      <h1>Welcome Nandani This is App Component</h1>

      
      <About />

      <Contact />

      <Career msg = {msg} />
      <button onClick={() => {setMsg("upadated from parent component to child component")}}>Change message</button> 
      
      <EventTut />
     

      <Career />
      <Users />

    </div>
  );
}
*/