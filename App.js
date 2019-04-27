import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import AuthLoading from './screens/AuthLoading';

const AppStack = createStackNavigator({ Home: Dashboard });
const AuthStack = createStackNavigator({ SignIn: Login });

const App = createAppContainer(createSwitchNavigator(
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
    }
  }
));

export default App;