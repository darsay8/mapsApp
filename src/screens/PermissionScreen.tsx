import {Button, View, Text, AppState} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {styles} from '../theme/theme';
import {usePermissionsStore} from '../store/permissionsStore';
import {useEffect} from 'react';
import PermissionButton from '../components/PermissionButton';

const PermissionScreen = () => {
  const {colors} = useTheme();
  const {locationStatus, askLocationPermission, checkLocationPermission} =
    usePermissionsStore();

  useEffect(() => {
    checkLocationPermission();

    AppState.addEventListener('change', state => {
      if (state !== 'active') return;

      checkLocationPermission();
    }).remove();
  }, []);

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <View style={styles.row}>
        <View style={styles.header}></View>
        {/* <Button title="Permission" onPress={askLocationPermission} /> */}
        <PermissionButton
          title="Permission"
          onPress={askLocationPermission}
          style={{}}
        />
        <Text style={{color: colors.text}}>{locationStatus}</Text>
      </View>
    </View>
  );
};
export default PermissionScreen;
