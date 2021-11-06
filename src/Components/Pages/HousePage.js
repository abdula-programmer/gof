import React, { Component } from "react";
import GotService from "../../services/GotService";
import ItemsLisr from "../itemList/ItemLisr";
import {withRouter}from "react-router-dom"

class HousePage extends Component {
  gotService = new GotService();

  state = {
    error: false,
  };

 

  componentDidCath() {
    this.setState({ error: true });
  }

  render() {
    return (
      <ItemsLisr
        onItemSelected={(itemId)=>{
          this.props.history.push(`/houses/${itemId}`)
        }}
        gotData={this.gotService.getAllHouses}
        renderItem={({ name }) => `${name}`}
      />
    );
  }
}

export default withRouter(HousePage)
