import {View} from 'react-native';
import {styles} from '../theme/theme';
import {useTheme} from '@react-navigation/native';

const LoadingScreen = () => {
  const {colors} = useTheme();
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <View style={styles.row}></View>
    </View>
  );
};
export default LoadingScreen;
