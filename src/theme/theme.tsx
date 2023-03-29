import {StyleSheet} from 'react-native';
import {hasNotch} from 'react-native-device-info';

const notch = hasNotch();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    marginHorizontal: 24,
  },
  header: {
    marginTop: notch ? 48 : 24,
    marginBottom: 8,
  },

  absoluteTop: {
    top: notch ? 48 : 24,
  },
  section: {
    marginVertical: 8,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 17,
    fontWeight: 'normal',
  },
  input: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 25,
    fontSize: 17,
    height: 48,
    marginVertical: 10,
  },
  imgBg: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: -100,
    right: -100,
    opacity: 0.2,
  },
});
