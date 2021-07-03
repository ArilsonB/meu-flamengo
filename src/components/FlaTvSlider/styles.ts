import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 48,
    height: 230,
    marginHorizontal: 24,
    backgroundColor: 'red',
    borderRadius: 20,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
  },
  title: {
    position: 'absolute',
    bottom: 15,
    fontFamily: theme.fonts.poppinsLight,
    marginHorizontal: 10,
    fontSize: 22,
    color: '#000',
  }
});