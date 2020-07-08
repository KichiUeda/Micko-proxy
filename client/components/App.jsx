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
      <div id='images'></div>
      <Footer />
    </div>
  }
}

export default App;