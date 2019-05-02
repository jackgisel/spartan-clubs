import React from 'react';
import { StyleSheet, Text  } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from 'native-base';

import * as firebase from 'firebase';
import 'firebase/firestore';
import config from '../fb';

firebase.initializeApp(config);

const sampleData = [
  {
    title: 'WORKING',
    image: 'https://media.licdn.com/dms/image/C560BAQEctbr2Lpej5w/company-logo_400_400/0?e=1564617600&v=beta&t=Zi3PSIfeIGbhnOX85wypvvsojkRo-Debk3fR9gLfvA8',
    about: 'This is a club about coding interviews'
  },
  {
    title: 'IS WORKING',
    image: 'https://sce.engr.sjsu.edu/wp-content/uploads/2016/04/SCE_sq.png',
    about: 'Code lots of stuff and build'
  },
  {
    title: 'CS Club',
    image: 'https://pbs.twimg.com/profile_images/542059386097508352/P45BUrwN.jpeg',
    about: 'We are trying to work at google'
  }
];

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
            <Label style={{ paddingTop: 15, textAlign: 'center' }}>New user? </Label>
            <Button style={{marginTop:10}}
              full
              rounded
              primary
              onPress={() => this.props.navigation.navigate('SignUp')}
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