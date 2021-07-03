import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    marginHorizontal: 24,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 14,
  },
  promotionText: {
    color: theme.colors.white,
    textTransform: 'uppercase',
    fontFamily: theme.fonts.poppinsSemiBold,
    fontSize: 25,
  }
});