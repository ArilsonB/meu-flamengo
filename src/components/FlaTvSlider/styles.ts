import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 48,
    height: 230,
    marginHorizontal: 24,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
  },
  bottomTitle: {
    position: 'absolute',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 10,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: theme.fonts.poppinsRegular,
    fontSize: 23,
    color: theme.colors.white,
  }
});