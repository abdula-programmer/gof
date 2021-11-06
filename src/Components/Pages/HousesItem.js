import React, { Component } from "react";
import GotService from "../../services/GotService";
import { withRouter } from "react-router-dom";
import ItemDetails, {Field} from "../charDetails/ItemDetails";

class HousesPage extends Component {
  gotService = new GotService();

  state = {
    error: false,
  };

  componentDidCath() {
    this.setState({ error: true });
  }

  render() {
    return (
      <ItemDetails
        gotData={this.gotService.getHouse}
        itemId={this.props.houseId}
      >
        <Field field="name" label="Name" />
        <Field field="region" label="Region" />
        <Field field="words" label="Words" />
        <Field field="titles" label="Titles" />
        <Field field="ancestralWeapons" label="Ancestral weapons" />
      </ItemDetails>
    );
  }
}

export default withRouter(HousesPage);
