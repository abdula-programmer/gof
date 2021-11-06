import React from "react"
import { Row, Col } from "react-bootstrap";

const  RowBlock = ({left, right}) => {
        return(
        <Row>
          <Col md={6}>
            {left}
          </Col>
          <Col md={6}>
            {right}
          </Col>
        </Row>);
};
export default RowBlock;
