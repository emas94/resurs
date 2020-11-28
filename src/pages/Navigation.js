import React, { Component } from "react"
import styled from "styled-components"
import { CgMenuLeftAlt } from "react-icons/cg"
import { MdClose } from "react-icons/md"
class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }
  render() {
    return (
      <>
        <Nav
          style={{
            transform: this.state.show
              ? "translate(-50%,0)"
              : "translate(-50%,-100%)",
          }}
        ></Nav>{" "}
        :
        <div
          style={{
            width: "100vw",
            maxWidth: 1200,
            left: "50%",
            transform: "translateX(-50%)",
            top: this.state.show ? "130px" : "30px",
            position: "absolute",
            zIndex: 1000,
            transition: "0.3s linear",
          }}
        >
          <NavButton
            onClick={() =>
              this.setState({
                show: !this.state.show,
              })
            }
          >
            {this.state.show ? (
              <MdClose style={{ fontSize: 52, color: "#194056" }} />
            ) : (
              <CgMenuLeftAlt style={{ fontSize: 52, color: "#194056" }} />
            )}
          </NavButton>
        </div>
      </>
    )
  }
}

export default Navigation
const Nav = styled.nav`
  position: fixed;
  width: 100%;
  padding: 50px 100px;
  /* background: grey; */
  max-width: 1180px;
  top: 0;
  left: 50%;
  transition: 0.3s linear;
  box-shadow: 0 10px white inset, 0 0 5px 5px #194056 inset,
    0 0 5px 5px #194056 inset, 0 0 5px 5px #194056 inset;
`
const NavButton = styled.button`
  border: 0;
  background: transparent;
  float: right;
  z-index: 1000;
`
