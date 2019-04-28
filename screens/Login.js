import React from 'react';
import { StyleSheet, Text  } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from 'native-base';

import * as firebase from 'firebase';
import 'firebase/firestore';
import config from '../fb';

firebase.initializeApp(config);
var db = firebase.firestore();

export default class Login extends React.Component {

    static navigationOptions = {
        title: 'Login',
      };

    constructor(props){
      super(props);
      this.state = ({
        email: '',
        password: '',
        ...props
      });
    }

    signUpUser = (email, password) => {
      try {
        if(password.length < 6) {
          alert("Please enter at least 6 characters for the password");
          return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
          db.collection('users').add({ email });
          this.state.navigation.navigate('App');
        })
      } catch(error) {
        alert(error.toString());
      }
    }

    loginUser = (email, password) => {
      try {
            firebase.auth().signInWithEmailAndPassword(email,password).then((user) => {
            this.state.navigation.navigate('App');
        });
        } catch(error) {
        alert(error.toString());
      }
    }

    render() {
      return (
        <Container style={styles.container}>
          <Label style={{ fontSize: 24 }}>Spartan Clubs</Label>
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
      backgroundColor: '#fff',
      marginTop: 15,
      padding: 10
    }
  });