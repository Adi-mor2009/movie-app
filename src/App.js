import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ActorPage from './pages/ActorPage/ActorPage';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/MoviePage/MoviePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      {/* <header>Header</header> */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
          </svg>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#actors">Actors</Nav.Link>
          <Nav.Link href="#movies">Movies</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
      <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/actors"><ActorPage></ActorPage></Route>
            <Route exact path="/movies"><MoviePage></MoviePage></Route>
            {/* <Route exact path="/cars/:index"><CarDetailsPage cars={cars}/></Route> */}
            <Route path="/"><PageNotFound/></Route>
          </Switch>
      </HashRouter>
      {/* <footer>Footer</footer> */}
    </div>
    // <div className="App">
    //   <ActorPage></ActorPage>
    // </div>
  );
}

export default App;
