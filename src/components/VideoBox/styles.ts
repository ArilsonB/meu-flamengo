import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '48.6%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  videoWrapper: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  thumb: {
    backgroundColor: '#000000',
    width: '100%',
    height: 150,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: theme.fonts.poppinsRegular,
    color: theme.colors.white
  }

});