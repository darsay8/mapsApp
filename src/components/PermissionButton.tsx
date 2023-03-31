import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';

interface IPermissionButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const PermissionButton = ({title, onPress, style}: IPermissionButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{...(style as any), ...permissionButtonStyle.btn}}>
      <Text style={permissionButtonStyle.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default PermissionButton;

const permissionButtonStyle = StyleSheet.create({
  btn: {
    height: 40,
    width: 160,
    backgroundColor: 'black',
    borderRadius: 40,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: 'white',
    fontSize: 18,
  },
});
