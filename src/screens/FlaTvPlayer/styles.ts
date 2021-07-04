import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  player: {
    width: '100%',
    height: 250,
    backgroundColor: '#000000'
  },
  content: {
    flex: 1,
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
    flexDirection: 'row',
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