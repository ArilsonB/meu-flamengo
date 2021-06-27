import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
  },
  rounded: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  userType: {
    color: theme.colors.white,
    fontSize: 14,
    fontFamily: theme.fonts.poppinsThin,
  },
  userName: {
    marginTop: -5,
    color: theme.colors.white,
    fontSize: 20,
  }
});