import React, { Component } from "react"
import { Link, BrowserRouter, NavLink, Switch, Route } from "react-router-dom"
import Printer from "./assets/img/printer-color.svg"

import Print from "./Print"
var moment = require("moment") // require
export default class ViewResurs extends Component {
  state = {
    data: [],
  }
  componentDidMount() {
    this.fetchResurs()
  }
  fetchResurs() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
    const apiUrl = "http://localhost:8080/get-resurs"
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data: data,
        })
      )
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <>
        <div
          className="card ml-auto mr-auto"
          style={{
            width: "1180px",
            marginTop: 50,
            padding: 50,
            paddingTop: 0,
            boxShadow: "0 0 10px",
          }}
        >
          <div className="container mt-4 no-print">
            <h1 className="text-center mb-4">GABILIFT - spis resursów</h1>

            {this.state.data.length > 0 ? (
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: "left" }}>
                      Użytkownik
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Data wykonania resursu
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Wynik Resursu
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Autor resursu
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Drukuj
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((d, key) => (
                    <tr key={key}>
                      <th scope="row">{d.owner}</th>
                      <td style={{ textAlign: "center" }}>
                        {moment(d.dateofresurs).format("YYYY-MM-DD")}
                      </td>
                      <td style={{ textAlign: "center" }}>{d.result}%</td>
                      <td style={{ textAlign: "center" }}>{d.author}</td>
                      <td style={{ display: "flex", justifyContent: "center" }}>
                        <Link
                          to={{
                            pathname: "/print",
                            state: {
                              company: d.owner,
                              model: d.type,
                              capacity: d.capacitylabel,
                              max: d.capacitymax,
                              date: moment(d.startdate).format("YYYY-MM-DD"),
                              cycle: d.cycle,
                              ratio: d.ratio,
                              resurs: `${d.result}%`,
                              dateOfResurs: moment(d.dateofresurs).format(
                                "YYYY-MM-DD"
                              ),
                            },
                          }}
                          onClick={() => this.fetchResurs()}
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <img src={Printer} height={25} width={25} />{" "}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
      </>
    )
  }
}
