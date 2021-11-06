import React, { Component } from "react";
import GotService from "../../services/GotService";
import ItemDetails, { Field } from "../charDetails/ItemDetails";

export default class CharactersItem extends Component {
    
    gotService = new GotService();

  


  render() {
    return (
      <ItemDetails
        gotData={this.gotService.getCharacter}
        itemId={this.props.charId}
      >
        <Field field="gender" label="Gender" />
        <Field field="born" label="Born" />
        <Field field="died" label="Died" />
        <Field field="culture" label="Culture" />
      </ItemDetails>
    );
  }
}
