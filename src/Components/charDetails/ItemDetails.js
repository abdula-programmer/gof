import React, { Component } from "react";
import styled from "styled-components";
import GotService from "../../services/GotService";

const Span = styled.span`
  font-size: 25px;
  color: white;
`;

const Block = styled.div`
  border-radius: 6px;
  padding: 15px;
  margin-top: 20px;
  background-color: white;
`;

const HeaderFour = styled.h4`
  display: flex;
  justify-content: center;
`;

const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Field };

export default class ItemDetails extends Component {

  getService = new GotService();

  state = {
    item: null,
  };

  

  updateItem = () => {
    const { itemId, gotData } = this.props;
    console.log(itemId);
    if  (!itemId) {
      return;
    }

    gotData(itemId)
    .then((item) => {
      this.setState({ 
        item
      })
    }
      
    )


  };


  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  render() {
    if (!this.state.item) {
      return <Span>Please, select a character.</Span>;
    }
    const { item } = this.state;
    const { name } = item;

    return(<Block>
      <HeaderFour>{name}</HeaderFour>
      <ul className="list-group list-group-flush">
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, { item });
        })}
      </ul>
    </Block>);
  }
}
