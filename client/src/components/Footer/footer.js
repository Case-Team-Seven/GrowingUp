import React from 'react';
import './footer.js';
import { Card, Button, CardHeader, CardFooter, CardBlock,
CardTitle, CardText } from 'reactstrap';

const Example = (props) => {
  return (
    <div class = "footer">
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBlock>
          <CardTitle>GrowingUp</CardTitle>
        </CardBlock>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default Example;