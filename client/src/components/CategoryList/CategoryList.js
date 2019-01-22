import React from 'react';
import './CategoryList.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (
            <div className="mainCategoryList">
                <h2 id="catListH2">CategoryList </h2>
                {/* <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p> */}
                <ListGroup id="catListUl"className="listGroupCatList">
                    <ListGroupItem className="FinanceLink" active tag="a" href="/topics/1/posts" action>Finance</ListGroupItem>
                    <hr id="catListHr" ></hr>
                    <ListGroupItem className="EducationLink" tag="a" href="/topics/2/posts" action>Education</ListGroupItem>
                    <hr id="catListHr"></hr>
                    <ListGroupItem className="SocialMediaLink" tag="a" href="/topics/3/posts" action>Social Media</ListGroupItem>
                    <hr id="catListHr"></hr>
                    <ListGroupItem className="RelationshipsLink" tag="a" href="/topics/4/posts" action>Relationships</ListGroupItem>
                    <hr id="catListHr"></hr>
                    <ListGroupItem className="PartyingLink"  tag="a" href="/topics/5/posts" action>Partying</ListGroupItem>
                    <hr id="catListHr"></hr>
                    <ListGroupItem className="CareerLink"  tag="a" href="/topics/6/posts" action>Career</ListGroupItem>
                    <hr id="catListHr"></hr>
                    <ListGroupItem className="TimeManagementLink"  tag="a" href="/topics/7/posts" action>Time Management</ListGroupItem>
                    <hr id="catListHr"></hr>
                    <ListGroupItem className="FamilyLink"  tag="a" href="/topics/8/posts" action>Family</ListGroupItem>
                    <hr id="catListHr"></hr>
                </ListGroup>
                <p />
            </div>
        );
    }
}