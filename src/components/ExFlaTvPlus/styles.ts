import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    width: 132,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#000',
    fontSize: 11,
    fontFamily: theme.fonts.poppinsSemiBold,
  }
});