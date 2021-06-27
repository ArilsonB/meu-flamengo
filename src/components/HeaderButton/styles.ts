import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: theme.colors.buttonBg
  },
  title: {
    fontSize: 25,
    color: theme.colors.white,
  }
});