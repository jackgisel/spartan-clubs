<<<<<<< HEAD
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import React from 'react';

import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import Login from './screens/Login';
import Dashboard from './screens/Dashboard';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const AppStack = createStackNavigator({ Home: Dashboard });
const AuthStack = createStackNavigator({ SignIn: Login });

const Navigation = createAppContainer(createSwitchNavigator(
  {
    // AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#5352ed',
        color: 'white'
      }
=======
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './screens/Login';
import Dashboard from './screens/Dashboard';

const MainNavigator = createStackNavigator({
  Home: {screen: Login},
  Dashboard: {screen: Dashboard},
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#5352ed',
      color: 'white'
>>>>>>> parent of 61faaac... login and react-navigation working
    }
  }
});

const App = createAppContainer(MainNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
};

export default App;