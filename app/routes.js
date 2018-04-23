import { StackNavigator } from 'react-navigation';
import HomeScreen from './containers/screen-home';
import CollectionScreen from './containers/screen-collection';

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Collection: {
      screen: CollectionScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FFEFE5',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: '#333',
      headerBackTitle: null,
      title: null
    }
  }
);
