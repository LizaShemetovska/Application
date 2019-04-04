import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bulma/css/bulma.css';
import Home from './Home';
import Weather from'./WeatherApp';
import StarWars from './StarWarsApp';
import TodoList from './TodoListApp';
import About from './About';

import{Route,NavLink,HashRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <HashRouter>
     <div className="App">
       
       <ul className="header">
       <li>
             <NavLink to="/">Home</NavLink>
       </li>
       <li>
             <NavLink to="/weather">Weather APP</NavLink>
       </li>
       <li>
              <NavLink to="/star-wars">Star Wars API</NavLink>
       </li>
       <li>
              <NavLink to="/todo-list">Todo List APP</NavLink>
       </li>
       <li>
             <NavLink to="/about">About</NavLink>
       </li>
      </ul>
      <div className="content">
         <Route exact path="/" component={Home}/>
         <Route path="/weather" component={Weather}/>
         <Route path="/star-wars" component={StarWars}/>
         <Route path="/todo-list" component={TodoList}/>
         <Route path="/about" component={About}/>
      </div>
    </div>
   </HashRouter>
    );
  }
}

export default App;
