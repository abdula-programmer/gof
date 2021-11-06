import React, { Component } from "react";
import GotService from "../../services/GotService";
import ItemsLisr from "../itemList/ItemLisr";
import {withRouter} from "react-router-dom"


class CharacterPage extends Component {

  gotService = new GotService();

  state = {
    error: false,
  };

  componentDidCath() {
    this.setState({ error: true });
  }

  render() {
    return(
      <ItemsLisr
        onItemSelected={(itemId)=>{
          this.props.history.push(`/characters/${itemId}`)
        }}
        gotData={this.gotService.getAllCharacters}
        renderItem={({ name }) => `${name}`}
      />
    )
  }
}

export default withRouter(CharacterPage);