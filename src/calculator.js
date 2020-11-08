import React, { Component } from "react"
import { Link, BrowserRouter, NavLink, Switch, Route } from "react-router-dom"

import Print from "./Print"
var moment = require("moment") // require
let now = new Date()
export default class calculator extends Component {
  state = {
    company: "",
    model: "",
    capacity: 2000,
    max: 2500,
    date: 0,
    cycle: 5,
    ratio: 1.5,
    days: 0,
    result: 0,
    dateOfResurs: moment(now).format("YYYY-MM-DD"),
    author: "",
  }
  componentDidMount() {}
  fetchResurs() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        owner: this.state.company,
        author: this.state.author,
        dateofresurs: this.state.dateOfResurs,
        startdate: this.state.date,
        capacitylabel: this.state.capacity,
        capacitymax: this.state.max,
        cycle: this.state.cycle,
        ratio: this.state.ratio,
        result: this.state.result,
        type: this.state.model,
      }),
    }
    const apiUrl = "http://localhost:8080/add-resurs"
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .catch((err) => console.log(err))
  }

  handleCompany = (e) => {
    this.setState({
      company: e.target.value,
    })
  }
  handlePrint = () => {
    let cont = document.querySelector(".container")
    let back = document.querySelector(".containerPrint")
    cont.classList.add("none")
    back.classList.remove("none")
  }

  handleModel = (e) => {
    this.setState({
      model: e.target.value,
    })
  }
  capacityChange = (e) => {
    this.setState({
      capacity: e.target.value,
    })
  }
  maxChange = (e) => {
    this.setState({
      max: e.target.value,
    })
  }
  handleCycle = (e) => {
    this.setState({
      cycle: e.target.value,
    })
  }
  handleRatio = (e) => {
    this.setState({
      ratio: e.target.value,
    })
  }
  handleDate = (e) => {
    let select = new Date(e.target.value).getTime()
    let now = new Date().getTime()
    let days =
      Math.floor(
        ((select / (1000 * 60 * 60 * 24) - now / (1000 * 60 * 60 * 24)) / 365) *
          250
      ) * -1

    this.setState({
      days: days,
      date: e.target.value,
    })
  }
  handleDateOfResurs = (e) => {
    this.setState({
      dateOfResurs: e.target.value,
    })
  }
  scoreChange = () => {
    let first = ` ${
      this.state.ratio *
      this.state.days *
      this.state.cycle *
      (this.state.max / this.state.capacity) *
      (this.state.max / this.state.capacity) *
      (this.state.max / this.state.capacity)
    }`
    let second = (first * 100) / 22000
    let end = 100 - second
    this.setState({
      result: ` ${Math.floor(end)}%`,
    })
    if (this.state.days == 0 || this.state.days < 0) {
      alert("proszę wybrać poprawną datę ")
      this.setState({
        result: "Podaj poprawną datę",
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <>
        {" "}
        <div
          className="card ml-auto mr-auto"
          style={{
            width: "1180px",
            marginTop: 50,
            marginBottom: 50,
            padding: 50,
            paddingTop: 0,
            boxShadow: "0 0 10px",
          }}
        >
          <div className="container mt-4 no-print">
            <h1 className="text-center">GABILIFT - Kalkulator resursu</h1>
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Podaj datę wykonania resursu:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  onChange={this.handleDateOfResurs}
                  value={moment(now).format("YYYY-MM-DD")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Użytkownik::</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Gabilift"
                  onChange={this.handleCompany}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">
                  Podaj typ urządzenia
                </label>
                <input
                  className="form-control"
                  id="device"
                  onChange={this.handleModel}
                  placeholder="Podaj typ urządzenia"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">
                  Wybierz maksymalny (zgodny z dokumentacją) udźwig urządzenia
                  [kg]
                </label>
                <input
                  onChange={this.capacityChange}
                  className="form-control"
                  id="capacity"
                  type="number"
                  placeholder="2000"
                  defaultValue={this.state.max}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Maksymalny ciężar unoszonych pojazdów [kg]:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="cycle"
                  placeholder="2000"
                  defaultValue={this.state.max}
                  onChange={this.maxChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Podaj datę startu eksploatacji podnośnika:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  onChange={this.handleDate}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Podaj ilość dziennych cykli:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="cycle"
                  placeholder="3"
                  value={this.state.cycle}
                  onChange={this.handleCycle}
                />
              </div>
              <label htmlFor="">Współczynnik bezpieczeństwa:</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="ratio1"
                  value="1.5"
                  onClick={this.handleRatio}
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  1,5 - historia podnośnika nieznana
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="ratio2"
                  value="1.3"
                  onClick={this.handleRatio}
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  1,3 - wprowadzone dane podał użytkownik podnośnika
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="ratio1"
                  value="1.2"
                  onClick={this.handleRatio}
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  1,2 - Współczynnik bezpieczeństwa
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="ratio1"
                  value="1.1"
                  onClick={this.handleRatio}
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  1,1 - Współczynnik bezpieczeństwa
                </label>
              </div>
              <div className="form-group" style={{ marginTop: 15 }}>
                <label htmlFor="exampleFormControlSelect2">
                  Osoba dokonująca obliczeń: *opcjonalne
                </label>
                <input
                  onChange={(e) => this.setState({ author: e.target.value })}
                  className="form-control"
                  id="author"
                  type="text"
                  placeholder="Jan Matkowski"
                  defaultValue="Jan Matkowski"
                />
              </div>
              <div
                className="submit btn btn-primary mt-4"
                onClick={this.scoreChange}
              >
                Oblicz
              </div>
            </form>

            <div className="wynik mt-4">Resurs: {this.state.result}</div>
            <div
              className="submit btn btn-danger mt-4"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: 15,
              }}
            >
              <Link
                to={{
                  pathname: "/print",
                  state: {
                    company: this.state.company,
                    model: this.state.model,
                    capacity: this.state.capacity,
                    max: this.state.max,
                    date: this.state.date,
                    cycle: this.state.cycle,
                    ratio: this.state.ratio,
                    resurs: this.state.result,
                    dateOfResurs: this.state.dateOfResurs,
                  },
                }}
                onClick={() => this.fetchResurs()}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {" "}
                Do druku{" "}
              </Link>
            </div>
            <div
              className="submit btn btn-primary mt-4"
              style={{
                color: "white",
                textDecoration: "none",
                position: "relative",
                textAlign: "center",
              }}
            >
              <Link
                to={{
                  pathname: "/all-resurs",
                }}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Wszystkie resursy
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}
