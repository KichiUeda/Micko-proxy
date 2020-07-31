import React from "react";
import styled from 'styled-components';
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #282c34;
`
const TitleWrapper = styled.div`
  background-color: #282c34;
  width: 100%;
`
const TitleContainer = styled.div`
  width:1140px;
  padding-top: 35px;
  padding-bottom: 15px;
  margin: auto;
`

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <Navigation />
        <TitleWrapper>
          <TitleContainer>
            <div id='Title'></div>
          </TitleContainer>
        </TitleWrapper>
        <Container>
          <div id='images'></div>
          <div className='pricePromo-app-proxy' id='PriceAndPromotion'></div>
        </Container>
      <div id='carousel'></div>
      <div id="Overview"></div>
      <div id="desc"></div>
      <div id="Traits"></div>
      <div id="related"></div>
      <div className='otherPopularGames-app-proxy' id="OtherPopularGames"></div>
      <div id="SystemRequirements"></div>
      <div id="legal"></div>
      <Footer />
    </div>
  }
}

export default App;