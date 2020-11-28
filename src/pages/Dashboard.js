import React, { Component } from "react"
import styled from "styled-components"
class Dashboard extends React.Component {
  render() {
    return (
      <>
        <DashBoardContent>
          <PageTitle>Serwis Gabilift</PageTitle>
        </DashBoardContent>
      </>
    )
  }
}
export default Dashboard
const DashBoardContent = styled.div`
  margin-top: 180px;
  box-shadow: inset 0 0 5px 5px #194056;
  height: 500px;
  width: 1180px;
  margin-left: 50%;
  transform: translateX(-50%);
`
const PageTitle = styled.div`
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  align-content: center;
  position: absolute;
  top: 0;
  left: 20%;
  font-size: 48px;
  white-space: nowrap;
  background-color: white;
  font-style: italic;
  border: 1px solid black;
  z-index: 1;
  padding: 0 15px;
  margin-bottom: 0px;
`
