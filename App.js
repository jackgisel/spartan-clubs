import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Thumbnail } from 'native-base';

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyABAsEEWzccVW8W2oXj50Y32j0Kx9eyYN0",
  authDomain: "spartan-clubs-87fc8.firebaseapp.com",
  databaseURL: "https://spartan-clubs-87fc8.firebaseio.com",
  projectId: "spartan-clubs-87fc8",
  storageBucket: "spartan-clubs-87fc8.appspot.com",
  messagingSenderId: "539733438594"
};

firebase.initializeApp(config);

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      email: '',
      password: ''
    });
  }

  signUpUser = (email, password) => {
    try {
      if(password.length < 6) {
        alert("Please enter at least 6 characters for the password");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch(error) {
      console.log(error.toString());
    }
  }

  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
        console.log(user);
      });
      } catch(error) {
      console.log(error.toString());
    }
  }

  render() {

    const uri = "http://d21gd0ap5v1ndt.cloudfront.net/logos/i/5918/200/200.png";

    return (
      <Container style={styles.container}>
        <Label>Spartan Clubs</Label>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({email})}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({password})}
            />
          </Item>
          <Button style={{marginTop:10}}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={{color:'white'}}>Login</Text>
          </Button>
          <Button style={{marginTop:10}}
            full
            rounded
            primary
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{color:'white'}}>Sign up</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95a5a6',
    justifyContent: 'center',
    padding: 10
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 45
  }
});