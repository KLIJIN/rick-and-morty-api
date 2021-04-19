import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import HomePage from "./Pages/HompePage.js"
import SingleEpisodePage from "./Pages/SingleEpisodePage"


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> <HomePage />  </Route>
        <Route exact path="/episodes/:id" children={<SingleEpisodePage />} />
      </Switch>
    </Router>
  )
}

export default App





