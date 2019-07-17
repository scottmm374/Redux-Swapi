import React from "react";
import { connect } from "react-redux";
import { getData } from './index';

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData()
  }

  render() {
    if (this.props.fetching) {
     <p>LOADING DATA...</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  null /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
  }
)(CharacterListView);
