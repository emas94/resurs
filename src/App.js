import "./App.css"
import React, { Component } from "react"
import { Link, BrowserRouter, NavLink, Switch, Route } from "react-router-dom"
import Calculator from "./calculator"
import Print from "./Print"
import ViewResurs from "./ViewResurs"
class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={Calculator} />
            <Route path="/print" exact component={Print} />
            <Route path="/all-resurs" exact component={ViewResurs} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
export default App
