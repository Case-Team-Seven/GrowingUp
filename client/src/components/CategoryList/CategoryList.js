import React from 'react';
import './CategoryList.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (
            <div className="mainCategoryList">
                <h2>CategoryList </h2>
                {/* <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p> */}
                <ListGroup>
                    <ListGroupItem className="a" active tag="a" href="#" action>Cras justo odio</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="a" tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="a" tag="a" href="#" action>Morbi leo risus</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="a" tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="a" disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
                    <hr></hr>
                </ListGroup>
                <p />
            </div>
        );
    }
}