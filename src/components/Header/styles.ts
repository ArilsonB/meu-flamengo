import { StyleSheet, StatusBar } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: StatusBar.currentHeight + 14,
    flexDirection: 'column',
    marginBottom: 10,
  },
  profile: {
    width: '100%',
    height: 50,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
  }
});