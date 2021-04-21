import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
//pages
import HomePage from "./Pages/HompePage"
import AboutPage from "./Pages/AboutPage"
import SingleEpisodePage from "./Pages/SingleEpisodePage"
import ErrorPage from "./Pages/ErrorPage"
// components
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"> <HomePage />  </Route>
        <Route exact path="/episodes/:id" children={<SingleEpisodePage />} />
        <Route path="/about"> <AboutPage /> </Route>
        <Route path="*"> <ErrorPage /> </Route>
      </Switch>
    </Router>
  )
}

export default App





