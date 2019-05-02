import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';


class ViewClub extends Component {
    render() {
        const { navigation } = this.props;
        const club = navigation.getParam('club', null);
        return (
            <Container style={styles}>
                <Content>
                    <Thumbnail square large source={{uri: club.image}}></Thumbnail>
                    <Text style={{ fontSize: 24}}>{club.title}</Text>
                    <Text>{club.about}</Text>
                    <Button style={{marginTop:10}}
                    full
                    rounded
                    primary
                    onPress={() => console.log('Get in touch!')}
                    >
                        <Text style={{color:'white'}}>Get in touch!</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 15,
      padding: 10
    }
  });

export default ViewClub;