import React from 'react';
import { StyleSheet, Text  } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from 'native-base';
import { connect } from 'react-redux';
import { signIn, signUp } from '../actions/authActions';

class Login extends React.Component {

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

    // signUpUser = (email, password) => {
    //   try {
    //     if(password.length < 6) {
    //       alert("Please enter at least 6 characters for the password");
    //       return;
    //     }
    //     firebase.auth().createUserWithEmailAndPassword(email, password);
    //     this.state.navigation.navigate('App');
    //   } catch(error) {
    //     alert(error.toString());
    //   }
    // }

    // loginUser = (email, password) => {
    //   try {
    //         firebase.auth().signInWithEmailAndPassword(email,password).then((user) => {
    //         this.state.navigation.navigate('App');
    //         console.log('Logged in: ');
    //         console.log(this.state);
    //     });
    //     } catch(error) {
    //     alert(error.toString());
    //   }
    // }

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
              onPress={() => this.props.signIn(this.state.email, this.state.password)}
            >
              <Text style={{color:'white'}}>Login</Text>
            </Button>
            <Button style={{marginTop:10}}
              full
              rounded
              primary
              onPress={() => this.props.signUp(this.state.email, this.state.password)}
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


const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(null, mapDispatchToProps)(Login);