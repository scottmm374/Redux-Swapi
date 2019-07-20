import React from "react";
import { connect } from "react-redux";
import { getData } from '../actions/index';
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
     return (<p>LOADING DATA...</p>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    getData: state.charsReducer.getData,
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, { getData }) (CharacterListView); 
