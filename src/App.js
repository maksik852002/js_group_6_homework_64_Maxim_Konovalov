import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import ToDoList from "./containers/ToDoList/ToDoList";
import MovieTracking from "./containers/MovieTracking/MovieTracking";
import PersonalNotes from "./containers/PersonalNotes/PersonalNotes";
import "./bootstrap.min.css";

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={ToDoList} />
      <Route path="/movie-tracking" component={MovieTracking} />
      <Route path="/notes" component={PersonalNotes} />
      <Route render={() => <h1>Not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default App;
