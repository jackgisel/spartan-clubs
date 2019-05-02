import React from 'react';
import { StyleSheet, Text  } from 'react-native';
import { Container, Form, Input, Item, Button, Label, Picker, Icon } from 'native-base';

import * as firebase from 'firebase';
import 'firebase/firestore';

var db = firebase.firestore();

export default class Login extends React.Component {

    static navigationOptions = {
        title: 'Sign up',
      };

    constructor(props){
      super(props);
      this.state = ({
        name: '',
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
          const name = this.state.name;
          db.collection('users').add({ name, email });
          this.state.navigation.navigate('App');
        })
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
              <Label>Name</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(name) => this.setState({name})}
              />
            </Item>
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