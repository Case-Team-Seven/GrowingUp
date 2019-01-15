import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Post</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>

            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;