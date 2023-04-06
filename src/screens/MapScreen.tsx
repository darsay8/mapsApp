import {Text, View, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {styles} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {
  PROVIDER_GOOGLE,
  enableLatestRenderer,
} from 'react-native-maps';

enableLatestRenderer();

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
            <MapView
              // provider={PROVIDER_GOOGLE}
              style={mapStyles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}></MapView>
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
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 25,
  },
});
