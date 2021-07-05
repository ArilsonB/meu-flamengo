import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  player: {
    width: '100%',
    height: Dimensions.get('window').width / (16 / 9),
    backgroundColor: '#000000'
  },
  playerInfo: {
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
  },
  content: {
    flex: 1,
    marginTop: 10
  },
  buttons: {
    width: '100%',
    height: 68,
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 19,
    alignItems: 'center',
  },
  gameStats: {
    flex: 1,
    marginHorizontal: 24,
  },
  gameStatsContainer: {
    width: '100%',
    flexDirection: 'column',
    paddingBottom: 30,
  },
  homeTeam: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 5,
  },
  divider: {
    width: 1,
    height: '98%',
    backgroundColor: '#333',
    marginVertical: 15,
  },
  guestTeam: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 5,
  }
});