import React from 'react';
import './CategoryList.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div className="mainCategoryList">
        <h3>Anchors </h3>
        <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
        <ListGroup>
          <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <p />
      </div>
    );
  }
}



      