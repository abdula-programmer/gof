import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import RandomChar from "../randomChar/RandomChar";
import { Row, Col } from "react-bootstrap";
import ErrorMessage from "../ErroeMessage/ErrorMessage";
import CharacterPage from "../Pages/CharacterPage";
import BooksPage from "../Pages/BookPage";
import HousePage from "../Pages/HousePage"
import {BrowserRouter as Router, Route} from "react-router-dom"
import BooksItem from "../Pages/BooksItem";
import CharactersItem from "../Pages/Charactersitem";
import HousesItem from "../Pages/HousesItem";

const Block = styled.div`
  margin-top: 25pt;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
`;

const Button = styled.button`
    margin-top: 10px;
    width: 100%;
    height: 35px;
    border-radius: 6px;
    border: none;
    background-color: blue;
    justify-content: center;
    font-size:25px;
    color: white;
`




export default class App extends Component {
  state = {
    selectedChar: 130, 
    show: true,
    error: false,
  }

 

  

  onButton = ()=>{
    this.setState({ 
      show: !this.state.show,
    });
  }

  render() {
    const{  show } = this.state
    const contentShow = show ? <RandomChar/>  : null;
    const contentHide = show ? "Hide" : "Show";
    
    if (this.state.error){
      return <ErrorMessage/>
    }
    return (
      <Router>
        <Block>
          <Header />
          <Row>
            <Col md={5}>
              {contentShow}
              <Button onClick={this.onButton}>{contentHide}</Button>
            </Col>
          </Row>
          
          <Route exact path="/houses" component ={HousePage}/>
          <Route path="/houses/:id" render = {
            ({match}) =>{
              const {id} = match.params
              return <HousesItem houseId={id}/>
            }}/>

          <Route exact path="/characters" component ={CharacterPage}/>
          <Route path="/characters/:id" render ={
            ({match}) =>{
              const {id} = match.params;
              return <CharactersItem charId={id}/>
            }}/>
          


          <Route exact path="/books" component ={BooksPage}/>
          <Route path="/books/:id" render={
            ({match}) => {
            const {id} = match.params;
            return <BooksItem bookId={id}/>
          }}/>

        </Block>
      </Router>
    );
  }
}
