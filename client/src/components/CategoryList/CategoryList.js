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
                    <ListGroupItem className="Finance" active tag="a" href="/Finance" action>Finance</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="Education" tag="a" href="/Education" action>Education</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="Social Media" tag="a" href="/SocialMedia" action>Social Media</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="Relationships" tag="a" href="/Relationships" action>Relationships</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="Partying" disabled tag="a" href="/Partying" action>Partying</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="Career" disabled tag="a" href="/Career" action>Career</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="Time Management" disabled tag="a" href="/TimeManagement" action>Time Management</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="Family" disabled tag="a" href="/Family" action>Family</ListGroupItem>
                    <hr></hr>
                </ListGroup>
                <p />
            </div>
        );
    }
}