import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 25,
    color: theme.colors.white,
    fontFamily: theme.fonts.poppinsSemiBold
  }
});