import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from '../screens/LoadingScreen';
import MapScreen from '../screens/MapScreen';
import PermissionScreen from '../screens/PermissionScreen';
import {usePermissionsStore} from '../store/permissionsStore';

const Stack = createStackNavigator();

const Navigator = () => {
  const {locationStatus} = usePermissionsStore();

  // if (locationStatus === 'unavailable') {
  //   return <LoadingScreen />;
  // }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {locationStatus === 'granted' ? (
        <Stack.Screen name="MapScreen" component={MapScreen} />
      ) : (
        <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
