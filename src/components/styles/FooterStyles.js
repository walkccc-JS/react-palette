import { makeStyles } from '@material-ui/core/styles';
import { BANNER_HEIGHT } from '../constants';

const bannerHeight = BANNER_HEIGHT;

export default makeStyles({
  Footer: {
    height: `${bannerHeight}%`,
    background: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontWeight: 'bold'
  },
  emoji: {
    margin: '0rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontSize: '1.5rem'
  }
});
