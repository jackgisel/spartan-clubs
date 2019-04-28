import React from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const sampleData = [
  {
    title: 'Hoplite',
    image: 'https://media.licdn.com/dms/image/C560BAQEctbr2Lpej5w/company-logo_400_400/0?e=1564617600&v=beta&t=Zi3PSIfeIGbhnOX85wypvvsojkRo-Debk3fR9gLfvA8',
    about: 'This is a club about coding interviews'
  },
  {
    title: 'Software Computer Engineering Club',
    image: 'https://sce.engr.sjsu.edu/wp-content/uploads/2016/04/SCE_sq.png',
    about: 'Code lots of stuff and build'
  },
  {
    title: 'CS Club',
    image: 'https://pbs.twimg.com/profile_images/542059386097508352/P45BUrwN.jpeg',
    about: 'We are trying to work at google'
  }
]

class Dashboard extends React.Component {
    static navigationOptions = {
      title: 'Spartan Clubs'
    };

    render() {
      const {navigate} = this.props.navigation;
      return (
        <Container>
        <Content>
          <List>
            {sampleData.map((club) => (
              <ListItem key={club.title} thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: club.image }} />
                </Left>
                <Body>
                  <Text>{club.title}</Text>
                  <Text note numberOfLines={1}>{club.about}</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
      );
    }
  }

 export default Dashboard;