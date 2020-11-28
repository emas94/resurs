import "./App.css"
import React, { Component } from "react"
import { Link, BrowserRouter, NavLink, Switch, Route } from "react-router-dom"
import Calculator from "./calculator"
import Print from "./Print"
import ViewResurs from "./ViewResurs"
import Dashboard from "./pages/Dashboard"
import Navigation from "./pages/Navigation"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
class App extends React.Component {
  render() {
    return (
      <>
        {" "}
        <Navigation />
        <ToastContainer />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/calculator" exact component={Calculator} />
            <Route path="/print" exact component={Print} />
            <Route path="/all-resurs" exact component={ViewResurs} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
export default App
