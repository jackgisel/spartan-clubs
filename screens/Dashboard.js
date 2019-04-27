import React from 'react';
import { Container, Label } from 'native-base';

class Dashboard extends React.Component {
    static navigationOptions = {
      title: 'Spartan Clubs',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Container>
            {
              console.log('Dashboard: ' + this.state)
            }
            <Label>Dashboard</Label>
        </Container>
      );
    }
  }

 export default Dashboard;