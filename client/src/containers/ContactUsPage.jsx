import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class ContactUsPage extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
    };
  }
  
/**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
  //call rest call
  }

  render() {
    return (
     <Card className="container">
     <CardTitle title="React Application" subtitle="This is cotactus" />
      </Card>
    )
  }
}
export default ContactUsPage;