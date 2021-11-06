import React, { Component } from "react";
import  Spinner  from "../spinner/Spinner";
import styled from "styled-components";
import GotService from "../../services/GotService";



const Block = styled.div`
  border-radius: 6px;
  padding: 15px;
  margin-top: 20px;
  background-color: white;
`;

export default class ItemsLisr extends Component {


  gotService = new GotService();

  state = {
    itemList: null,
  };
  


  renderItems(arr) {
    
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);
      
      return (
        <li
          key={id}
          className="list-group-item d-flex justify-content-between"
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    }); 
  }

  componentDidMount() {
    const {gotData} = this.props
    gotData()
      .then((itemList) => {
        this.setState({
          itemList,
        });
      });
  }
  render() {
    
    
    const { itemList } = this.state;

    if (!itemList) return <Spinner/>
    
    
    const items = this.renderItems(itemList);
    return (
      <Block>
        <ul className="list-group list-group-flush">
          {items}
        </ul>
      </Block>
    );
  }
}
