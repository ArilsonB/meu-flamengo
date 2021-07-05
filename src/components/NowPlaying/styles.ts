import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 48,
    height: 100,
    backgroundColor: '#111111',
    borderRadius: 10,
    marginTop: 14,
    marginHorizontal: 24,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  matchImg: {
    width: 100,
    height: 100,
    backgroundColor: '#1a1a1a',
  },
  matchInfo: {
    flex: 1,
  },
  champBack: {
    width: '100%',
    height: 20,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center'
  },
  champTitle: {
    fontFamily: theme.fonts.poppinsSemiBold,
    color: theme.colors.white,
    fontSize: 12,
  },
  teams: {
    flexDirection: 'row',
    marginTop: 5,
  },
  team: {
    flex: 1,
    alignItems: 'center'
  },
  teamLogo: {
    width: 50,
    height: 50,
  },
  scoreBoard: {
    marginHorizontal: 5,
    flexDirection: 'row',
    marginTop: 25,
  },
  scoreText: {
    fontFamily: theme.fonts.poppinsRegular,
    color: theme.colors.white,
    fontSize: 35,
  },
  scoreTextDivider: {
    fontFamily: theme.fonts.poppinsRegular,
    color: theme.colors.white,
    fontSize: 30,
    marginHorizontal: 5,
  },
  teamName: {
    fontFamily: theme.fonts.poppinsLight,
    color: theme.colors.white,
    fontSize: 17,
    textAlign: 'center',
  }

});