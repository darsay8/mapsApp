import {Text, View, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {styles} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Map from '../components/Map';

const MapScreen = () => {
  const {colors} = useTheme();

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <View style={{...styles.row}}>
        <View style={styles.section}>
          <View
            style={{
              ...styles.header,
              ...mapStyles.header,
            }}>
            <Text style={{...styles.title, color: colors.text}}>Maps App</Text>
            <Icon name="map-outline" size={32} color={colors.text} />
          </View>
        </View>
        <View style={styles.section}>
          <View style={mapStyles.container}>
            <Map />
          </View>
        </View>
      </View>
    </View>
  );
};
export default MapScreen;

const mapStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    alignItems: 'center',
  },
});
