import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  rect: {
    flex: 1,
  },
  container: {
    height: 64,
    alignItems: 'center',
    padding: 0,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: theme.colors.buttonBg
  },
  containerActive: {
    width: 64,
    height: 64,
    alignItems: 'center',
    padding: 0,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  icon: {
    marginTop: 10,
  },
  title: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: theme.fonts.poppinsRegular,
    color: theme.colors.white,
  },
  titleActive: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: theme.fonts.poppinsSemiBold,
    color: theme.colors.bgPrimary,
  }
});