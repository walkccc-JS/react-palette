import chroma from 'chroma-js';
import sizes from './sizes';

export default {
  ColorBox: {
    width: '20%',
    height: props => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    marginBottom: '-3.5px',
    cursor: 'pointer',
    display: 'inline-block',
    position: 'relative',
    '&:hover svg': {
      opacity: 1
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: props => (props.showingFullPalette ? '20%' : '33.3%')
    },
    [sizes.down('md')]: {
      width: '50%',
      height: props => (props.showingFullPalette ? '10%' : '20%')
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: props => (props.showingFullPalette ? '5%' : '10%')
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.5
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08
        ? 'white'
        : 'rgba(0, 0, 0, 0.5)'
  },
  buttons: {
    left: '40%',
    right: '40%',
    top: '40%',
    bottom: '40%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [sizes.down('xs')]: {
      left: '80%',
      right: '5%'
    }
  },
  moreButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.5
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
    fontSize: '1.2rem',
    opacity: 0,
    '&:hover': {
      transform: 'scale(1.5)',
      transition: 'all 0.2s ease-in-out'
    }
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.5
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
    fontSize: '1.2rem',
    opacity: 0,
    '&:hover': {
      transform: 'scale(1.5)',
      transition: 'all 0.2s ease-in-out'
    }
  },
  boxContent: {
    width: '70%',
    left: '0',
    bottom: '0',
    padding: '10px',
    color: 'black',
    fontSize: '12px',
    letterSpacing: '1px',
    position: 'absolute',
    textTransform: 'uppercase'
  },
  copyOverlay: {
    width: '100%',
    height: '100%',
    opacity: '0',
    transform: 'scale(0.1)',
    transition: 'transform 0.6s ease-in-out',
    zIndex: '0'
  },
  showOverlay: {
    opacity: '1',
    position: 'absolute',
    transform: 'scale(50)',
    zIndex: '10'
  },
  copyMessage: {
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    alignItems: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '4rem',
    justifyContent: 'center',
    opacity: '0',
    position: 'fixed',
    transform: 'scale(0.1)',
    '& h1': {
      width: '100%',
      marginBottom: '0',
      padding: '1rem',
      background: 'rgba(255, 255, 255, 0.2)',
      fontWeight: '400',
      textAlign: 'center',
      textTransform: 'uppercase',
      textShadow: '2px 2px black',
      [sizes.down('xs')]: {
        fontSize: '5rem'
      }
    },
    '& p': {
      fontWeight: '100',
      fontSize: '2rem'
    }
  },
  showMessage: {
    opacity: '1',
    transform: 'scale(1)',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
    zIndex: '25'
  }
};
