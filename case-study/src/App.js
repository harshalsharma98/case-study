import './App.css';
import Users from './Components/Users';
import Form from './Components/Form';
import Nav from './Components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Nav></Nav>
        </header>
        <Switch>
          <Route path="/users" component={Users}></Route>
          <Route path="/form" component={Form}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
