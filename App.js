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
    }
  }
});

const App = createAppContainer(MainNavigator);

export default App;