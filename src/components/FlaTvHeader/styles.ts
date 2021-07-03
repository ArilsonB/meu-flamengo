import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginTop: StatusBar.currentHeight + 26,
    marginBottom: 26,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    marginTop: 14,
    flexDirection: 'row',
  }
});