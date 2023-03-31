import {ActivityIndicator, View} from 'react-native';
import {styles} from '../theme/theme';
import {useTheme} from '@react-navigation/native';

const LoadingScreen = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.row}>
        <ActivityIndicator size={48} />
      </View>
    </View>
  );
};
export default LoadingScreen;
