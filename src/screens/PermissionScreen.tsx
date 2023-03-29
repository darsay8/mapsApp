import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {styles} from '../theme/theme';

const PermissionScreen = () => {
  const {colors} = useTheme();

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <View style={styles.row}></View>
    </View>
  );
};
export default PermissionScreen;
