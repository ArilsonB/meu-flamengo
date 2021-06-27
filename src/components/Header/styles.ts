import { StyleSheet, StatusBar } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 190,
    paddingTop: StatusBar.currentHeight + 14,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  profile: {
    width: '100%',
    height: 50,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    marginTop: 14,
    flexDirection: 'row',
  }
});