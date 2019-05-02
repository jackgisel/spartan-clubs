import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
import ViewClub from './screens/ViewClub';

const AppStack = createStackNavigator({ Home: Dashboard, View: ViewClub });
const AuthStack = createStackNavigator({ SignIn: Login, SignUp: SignUp });

const App = createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
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