import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2B2929',
    borderRadius: 5,
    padding: 0,
  },
  clubImage: {
    width: 46,
    justifyContent: 'center',
    alignItems: 'center'
  },
  teamLogo: {
    width: 45,
    height: 45
  },
  eventContent: {
    flexDirection: 'column',
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 1,
  },
  eventTitle: {
    fontFamily: theme.fonts.poppinsSemiBold,
    color: theme.colors.white,
    fontSize: 15,
    textTransform: 'uppercase'
  },
  eventText: {
    fontFamily: theme.fonts.poppinsRegular,
    color: theme.colors.white,
    fontSize: 12,
  },
  indicatorRight: {
    marginRight: -1,
  },
  indicator: {
    marginLeft: -1,
  }
});