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
                    <ListGroupItem className="FinanceLink" active tag="a" href="/Finance" action>Finance</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="EducationLink" tag="a" href="/Education" action>Education</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="SocialMediaLink" tag="a" href="/SocialMedia" action>Social Media</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="RelationshipsLink" tag="a" href="/Relationships" action>Relationships</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="PartyingLink"  tag="a" href="/Partying" action>Partying</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="CareerLink"  tag="a" href="/Career" action>Career</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="TimeManagementLink"  tag="a" href="/TimeManagement" action>Time Management</ListGroupItem>
                    <hr></hr>
                    <ListGroupItem className="FamilyLink"  tag="a" href="/Family" action>Family</ListGroupItem>
                    <hr></hr>
                </ListGroup>
                <p />
            </div>
        );
    }
}