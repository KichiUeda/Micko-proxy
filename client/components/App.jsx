import React from "react";
import styled from 'styled-components';
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282c34;
`

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <Navigation />
      <div id='Title'></div>
        <Container>
          <div id='images'></div>
          <div id='PriceAndPromotion'></div>
        </Container>
      <div id='carousel'></div>
      <div id="Overview"></div>
      <div id="desc"></div>
      <div id="legal"></div>
      <div id="Traits"></div>
      <Footer />
    </div>
  }
}

export default App;