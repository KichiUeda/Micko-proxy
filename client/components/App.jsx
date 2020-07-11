import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <Navigation />
      <div id='Title'></div>
      <div id='images'></div>
      <div id="Overview"></div>
      <div id="desc"></div>
      <div id="Traits"></div>
      <Footer />
    </div>
  }
}

export default App;