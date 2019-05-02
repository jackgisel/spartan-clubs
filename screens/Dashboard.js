import React from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const offlineData = [
  {
    title: 'OFFLINE',
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
];

import * as firebase from 'firebase';
import 'firebase/firestore';

var db = firebase.firestore();

class Dashboard extends React.Component {
    static navigationOptions = {
      title: 'Spartan Clubs',
      headLeft: 'menu'
    };

    constructor(props){
      super(props);
      this.state = ({
        data: []
      });
    }

    componentDidMount() {
      const fetch = [];
      db.collection('clubs').get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let club = doc.data();
                fetch.push({
                  title: club.title,
                  image: club.image,
                  about: club.about
                });
            });

        }).then(() => this.setState({ data: fetch }));
    }

    render() {
      const { navigation } = this.props;
        return (
          <Container>
          <Content>
            <List>
              {
                this.state.data.map((club) => (
                <ListItem key={club.title} thumbnail>
                  <Left>
                    <Thumbnail square source={{ uri: club.image }} />
                  </Left>
                  <Body>
                    <Text>{club.title}</Text>
                    <Text note numberOfLines={1}>{club.about}</Text>
                  </Body>
                  <Right>
                    <Button
                      transparent
                      onPress={() => navigation.navigate('View', { club })}
                    >
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