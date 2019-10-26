import sizes from './sizes';
import { BANNER_HEIGHT } from '../constants';

const bannerHeight = BANNER_HEIGHT;

export default {
  Navbar: {
    height: `${bannerHeight}%`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logo: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontSize: '22px',
    fontWeight: '600',
    color: 'black',
    textDecoration: 'none'
  },
  siteName: {
    [sizes.down('sm')]: {
      display: props => (props.showingAllColors ? 'none' : '')
    }
  },
  level: {
    [sizes.down('xs')]: {
      display: 'none'
    }
  },
  slider: {
    width: '300px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
      outline: 'none',
      boxShadow: 'none'
    },
    [sizes.down('sm')]: {
      width: '200px'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem'
  },
  [sizes.down('sm')]: {
    display: 'none'
  }
};
