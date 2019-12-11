import React, { Component } from "react"
import calculator from "./calculator"
import { Link, BrowserRouter, NavLink, Switch, Route } from "react-router-dom"
import { render } from "@testing-library/react"
// export default class print extends Component {

const Print = props => {
  let printWindow = () => {
    window.print()
  }

  console.log(props)

  return (
    <>
      <div className="container ">
        <h1 className="text-center mt-4 j">Resurs podnośników Gabilift</h1>
        <p className="mt-4 text-justify">
          Zgodnie z oświadczeniem producenta: firmy GABILIFT, projektowany
          resurs podnośników jest zgodny z normą EN1493:2010 i wynosi 22000
          cykli wykonanych z obciążeniem znamionowym. Obliczanie resursu
          przeprowadzamy w oparciu o normę ISO 12482:2014 - Cranes - Monitoring
          for crane design working period. W wypadku przekroczenia resursu
          (wynik ujemny) podnośnik podlega przeglądowi specjalnemu przed
          dopuszczeniem do dalszej eksploatacji.
        </p>
        <hr />
        {/* <hr className="mt-4" style={{ border: "1px solid black" }} /> */}

        <ul>
          <li>Firma: {props.location.state.company}</li>
          <li>Model: {props.location.state.model}</li>
          <li>Początek eksploatacji: {props.location.state.date}</li>
          <li>Maksymalny udźwig: {props.location.state.capacity}</li>
          <li>Maksymalny podnoszony ciężar: {props.location.state.max}</li>
          <li>
            Średnia ilość cykli góra/dół w ciągu dnia roboczego:{" "}
            {props.location.state.cycle}
          </li>
          <li>Współczynnik bezpieczeństwa : {props.location.state.ratio}</li>
          <li>Resurs wynosi: {props.location.state.resurs}</li>
        </ul>
        <div className="btn btn-success no-print" onClick={printWindow}>
          {" "}
          Drukuj
        </div>
        <div className="btn btn-success no-print m-4">
          {" "}
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Wróć
          </a>
        </div>
        <h3 className="text-center ml-auto mr-auto print">www.gabiga.pl</h3>
      </div>
    </>
  )
}
export default Print
