import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 14,
  },
  title: {
    fontSize: 25,
    color: theme.colors.white,
    fontFamily: theme.fonts.poppinsSemiBold
  }
});