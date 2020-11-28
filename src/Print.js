import React, { Component } from "react"
import calculator from "./calculator"
import { Link, BrowserRouter, NavLink, Switch, Route } from "react-router-dom"
import { render } from "@testing-library/react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

let printWindow = () => {
  window.print()
}
export default class Print extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <div className="container ">
          <h4 className="text-center mt-4 j">
            Resurs podnośników wykonany przez PPHU GABIGA-I <br></br>
            Jan Matkowski ul. Kopernika 4, 49-300 Brzeg, NIP 747 128 20 42
          </h4>
          <p className="mt-4 text-justify" style={{ fontSize: 1.4 + "rem" }}>
            <span style={{ fontWeight: "bold" }}>Zgodnie</span> z wytycznymi
            Urzędu Dozoru Technicznego dotyczącymi eksploatacji UTB z dnia 2
            czerwca 2019, oraz z normą EN 1493:2000 projektowany resurs wynosi
            22 000 cykli roboczych. Obliczanie resursu przeprowadzamy w oparciu
            o normę ISO 12482:2014 oraz zgodnie z wytycznymi UDT z 02.06.2019
            dot. zastosowania odpowiedniego współczynnika niepewności. <br></br>
            <span style={{ fontWeight: "bold" }}>Resurs</span> – parametry
            graniczne stosowane do oceny i identyfikacji stanu technicznego
            określone na podstawie liczby cykli pracy i stanu obciążenia UTB w
            założonym okresie eksploatacji z uwzględnieniem rzeczywistych
            warunków użytkowania.<br></br>
            <span style={{ fontWeight: "bold" }}> Cykl roboczy</span> obejmuje
            czas od podniesienia podstawy ładunkowej na wysokość docelową,
            poprzez jej utrzymanie na wysokości, aż do opuszczenia na poziom
            wyjściowy.
            <br></br>
            <span style={{ fontWeight: "bold" }}> Wynik dodatni </span> -
            oznacza że resurs nie został osiągnięty. <br></br>
            <span style={{ fontWeight: "bold" }}> Wynik ujemny</span> - oznacza,
            że resurs został osiągnięty podnośnik ( dźwignik ) podlega
            przeglądowi specjalnemu przed dopuszczeniem do dalszej eksploatacji.
          </p>

          <hr />
          {/* <hr className="mt-4" style={{ border: "1px solid black" }} /> */}

          <ul>
            <li>
              Data wystawienia resursu:{" "}
              <span style={{ fontWeight: "bold" }}>
                {this.props.location.state.dateOfResurs
                  ? this.props.location.state.dateOfResurs
                  : "nie podano daty"}
              </span>
            </li>
            <li>
              Użytkownik:{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {this.props.location.state.company}
              </span>
            </li>
            <li>
              Urządzenie:
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {this.props.location.state.model}
              </span>
            </li>
            <li>
              Początek eksploatacji:
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {this.props.location.state.date}
              </span>
            </li>
            <li>
              Maksymalny udźwig:{" "}
              <span style={{ fontWeight: "bold" }}>
                {this.props.location.state.capacity}
              </span>
            </li>
            <li>
              Maksymalny podnoszony ciężar:{" "}
              <span style={{ fontWeight: "bold" }}>
                {this.props.location.state.max}
              </span>
            </li>
            <li>
              Średnia ilość cykli góra/dół w ciągu dnia roboczego:{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {this.props.location.state.cycle}
              </span>
            </li>
            <li>
              Współczynnik bezpieczeństwa :
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {this.props.location.state.ratio}
              </span>
            </li>
            <li>
              Resurs - do wykorzystania zostało:{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {this.props.location.state.resurs}%
              </span>
            </li>
            <li>
              Urządzenie{" "}
              {this.props.location.state.resurs < 0 ? (
                <span style={{ fontWeight: "bold" }}> wymaga</span>
              ) : (
                <span style={{ fontWeight: "bold" }}>nie wymaga</span>
              )}{" "}
              specjalistycznego przeglądu
            </li>
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
}
