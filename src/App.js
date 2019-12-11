import "./App.css"
import React, { Component } from "react"
import { Link, BrowserRouter, NavLink, Switch, Route } from "react-router-dom"
import Calculator from "./calculator"
import Print from "./Print"
class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={Calculator} />
            <Route path="/print" exact component={Print} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
export default App
