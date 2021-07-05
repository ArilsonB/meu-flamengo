import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '48.6%',
    height: 160,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.gameBoxBg,
    borderRadius: 10,
    overflow: 'hidden',
  },
  teamLogos: {
    height: 65,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamLogo: {
    width: 50,
    height: 50,
  },
  divider: {
    fontFamily: theme.fonts.poppinsRegular,
    color: theme.colors.white,
    fontSize: 30,
    marginHorizontal: 5,
  },
  team: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamName: {
    flex: 1,
    fontSize: 12,
    color: theme.colors.white,
    fontFamily: theme.fonts.poppinsRegular,
  },
  champInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 5,
  },
  info: {
    color: theme.colors.white,
    fontFamily: theme.fonts.poppinsRegular,
    fontSize: 10,
    textAlign: 'center'
  },
  reserve: {
    backgroundColor: '#000000',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  reserveText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.poppinsRegular,
    fontSize: 12,
  }
});