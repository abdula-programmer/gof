import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  

  h1 {
    font-size: 30px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  ul{
    
    display: flex;
  }

  li {
    
    list-style-type: none;
    margin-left: 15px;
    text-decoration: none;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <Block>
        <Link to="/" exact>
          <h1>Game of Thrones DB</h1>
        </Link>

        <ul>
          <li>
            <Link to="/characters/">Characters</Link>
          </li>

          <li>
            <Link to="/houses/">Houses</Link>
          </li>

          <li>
            <Link to="/books/">Books</Link>
          </li>
        </ul>
      </Block>
    );
  }
}
