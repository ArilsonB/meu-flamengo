import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
  },
  content: {
    backgroundColor: theme.colors.gameBoxBg,
    borderRadius: 10,
    width: 180,
    height: 110,
    overflow: 'hidden'
  },
  championshipBg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.brasileiraoBg,
    height: 20,
  },
  championshipName: {
    fontSize: 10,
    fontFamily: theme.fonts.poppinsRegular,
    color: theme.colors.white,
  },
  inner: {
    flex: 1,
  },
  gameInfo: {
    flex: 1,
  },
  round: {
    position: 'absolute',
    fontSize: 8,
    fontFamily: theme.fonts.poppinsRegular,
    color: theme.colors.white,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 5,
  },
  teamLogos: {
    flex: 1,
    marginTop: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamLogo: {
    width: 50,
    height: 50,
  },
  scoreBoard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,

  },
  scoreText: {
    fontFamily: theme.fonts.poppinsRegular,
    color: theme.colors.white,
    fontSize: 30,
  },
  scoreTextDivider: {
    fontFamily: theme.fonts.poppinsRegular,
    color: theme.colors.white,
    fontSize: 30,
    marginHorizontal: 5,
  },
  teams: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 15,
  },
  teamName: {
    flex: 1,
    fontSize: 13,
    fontFamily: theme.fonts.poppinsRegular,
    color: theme.colors.white,
  }
});