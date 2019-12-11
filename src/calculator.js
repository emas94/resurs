import React, { Component } from "react"
import { Link, BrowserRouter, NavLink, Switch, Route } from "react-router-dom"

import Print from "./Print"

export default class calculator extends Component {
  state = {
    company: "",
    model: "Winda towarowa",
    capacity: 2000,
    max: 2500,
    date: 0,
    cycle: 5,
    ratio: 1.5,
    days: 0,
    result: `${0}%`
  }

  handleCompany = e => {
    this.setState({
      company: e.target.value
    })
  }
  handlePrint = () => {
    let cont = document.querySelector(".container")
    let back = document.querySelector(".containerPrint")
    cont.classList.add("none")
    back.classList.remove("none")
  }

  handleModel = e => {
    this.setState({
      model: e.target.value
    })
    console.log(this.state.model)
  }
  capacityChange = e => {
    this.setState({
      capacity: e.target.value
    })
    console.log(this.state.capacity)
    console.log(e.target.value)
  }
  maxChange = e => {
    this.setState({
      max: e.target.value
    })
    console.log(this.state.capacity)
    console.log(e.target.value)
  }
  handleCycle = e => {
    this.setState({
      cycle: e.target.value
    })
    console.log(this.state.capacity)
    console.log(e.target.value)
  }
  handleRatio = e => {
    this.setState({
      ratio: e.target.value
    })
    console.log(this.state.ratio)
    console.log(e.target.value)
  }
  handleDate = e => {
    let select = new Date(e.target.value).getTime()
    let now = new Date().getTime()
    // let time = Math.floor(now - select) / 1000
    let days =
      Math.floor(
        ((select / (1000 * 60 * 60 * 24) - now / (1000 * 60 * 60 * 24)) / 365) *
          250
      ) * -1

    this.setState({
      days: days,
      date: e.target.value
    })

    console.log(this.state.days)
    console.log(
      ((select / (1000 * 60 * 60 * 24) - now / (1000 * 60 * 60 * 24)) / 365) *
        250
    )
    console.log(now)
    console.log(select)
    // console.log(time)
    console.log(days)
    console.log(typeof e.target.value)
  }
  scoreChange = () => {
    let first = ` ${this.state.ratio *
      this.state.days *
      this.state.cycle *
      (this.state.max / this.state.capacity) *
      (this.state.max / this.state.capacity) *
      (this.state.max / this.state.capacity)}`
    let second = (first * 100) / 22000
    let end = 100 - second
    this.setState({
      result: ` ${Math.floor(end)}%`
    })
    if (this.state.days == 0 || this.state.days < 0) {
      alert("proszę wybrać poprawną datę ")
      this.setState({
        result: "Podaj poprawną datę"
      })
    }
    console.log("click")
    console.log(first)
    console.log(second)
    console.log(end)
    console.log(this.state.result)
    console.log(`${(this.state.ratio, this.state.days, this.state.cycle)}`)
    console.log(` dni ${this.state.days}`)
    console.log(` cykle ${this.state.cycle}`)
    console.log(` max ${this.state.max}`)
    console.log(` cap ${this.state.capacity}`)
    console.log(Math.pow(2000 / 3000, 3))
    console.log(this.state.cycle * this.state.days)
    console.log(
      (this.state.max / this.state.capacity) *
        (this.state.max / this.state.capacity) *
        (this.state.max / this.state.capacity)
    )
  }

  render() {
    return (
      <>
        <div className="container mt-4 no-print">
          <h1 className="text-center">GABILIFT - Kalkulator resursu</h1>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Nazwa firmy:</label>
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
                Wybierz rodzaj urządzenia
              </label>
              <select
                className="form-control"
                id="device"
                onClick={this.handleModel}
              >
                <option>Winda towarowa</option>
                <option>Winda osobowa</option>
                <option>Podnośnik jednkokolumnowy DHJ</option>
                <option>Podnośnik dwukolumnowy DHD</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">
                Wybierz maksymalny udźwig urządzenia [kg]
              </label>
              <select
                onChange={this.capacityChange}
                className="form-control"
                id="capacity"
              >
                <option value="2000">2000</option>
                <option value="2500">2500</option>
                <option value="3000">3000</option>
                <option value="4000">4000</option>
                <option value="5000">5000</option>
              </select>
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
            <div
              className="submit btn btn-primary mt-4"
              onClick={this.scoreChange}
            >
              Oblicz
            </div>
          </form>

          <div className="wynik mt-4">Resurs: {this.state.result}</div>
          {/* 
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/" exact component={calculator} />
              <Route path="/print" exact component={Print} />
            </Switch>
          </BrowserRouter> */}
          <div
            className="submit btn btn-danger mt-4"
            style={{
              color: "white",
              textDecoration: "none",
              height: "40px",
              width: "140px",
              display: "block",
              position: "relative",
              textAlign: "center"
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
                  resurs: this.state.result
                }
              }}
              style={{
                color: "white",
                textDecoration: "none",
                height: "40px",
                width: "140px",
                display: "block",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "0"
              }}
            >
              {" "}
              Do druku{" "}
            </Link>
          </div>
        </div>

        {/* <div className="containerPrint "></div>
        <Print
          company={this.state.company}
          model={this.state.model}
          capacity={this.state.capacity}
          max={this.state.max}
          cycle={this.state.cycle}
          ratio={this.state.ratio}
          resurs={this.state.result}
          back={this.handleBack}
        /> */}
      </>
    )
  }
}
