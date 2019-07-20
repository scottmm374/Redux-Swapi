import React, { Component } from "react";

import { CharacterListView } from "./views";
import "./styles/App.css";


class App extends Component {
  
  render() {
    console.log(this.state)
    return <CharacterListView />;
  }
}


export default App;
