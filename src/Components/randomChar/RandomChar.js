import React, { Component } from "react";
import styled from "styled-components";
import GotService from "../../services/GotService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../ErroeMessage/ErrorMessage";

const HeaderFour = styled.h4`
  display: flex;
  justify-content: center;
`;
const Block = styled.div`
  border-radius: 6px;
  padding: 15px;
  margin-top: 20px;
  background-color: white;
`;

export default class RandomChar extends Component {
  gotService = new GotService();
  state = {
    char: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    
    this.updateChar(); 
    this.timerId= setInterval(() => {
        this.updateChar();
      }, 5000);
  }

  componentWillUnmount(){
      clearInterval(this.updateChar);
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };
  onCharLoder = (char) => {
    this.setState({
      char,
      loading: false,
    });
  };
  updateChar = () => {
    const id = Math.floor(Math.random() * 140 + 25);
    this.gotService.getCharacter(id).then(this.onCharLoder).catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const Content = !(loading || error) ? <ViewList char={char} /> : null;
    return (
      <>
        <Block>
          {errorMessage}
          {spinner}
          {Content}
        </Block>
      </>
    );
  }
}
const ViewList = ({ char }) => {
  const { name, died, gender, born, culture, noData } = char;
  return (
    <>
      <HeaderFour>Characters: {name}</HeaderFour>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span>Gender</span>
          <span>{gender || noData}</span>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <span>Born</span>
          <span>{born || noData}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Died</span>
          <span>{died || noData}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Culture</span>
          <span>{culture || noData}</span>
        </li>
      </ul>
    </>
  );
};
