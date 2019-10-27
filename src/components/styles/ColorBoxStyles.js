import chroma from 'chroma-js';
import sizes from './sizes';

const buttonRange = 38;

export default {
  ColorBox: {
    width: '20%',
    height: props => (props.showingFullPalette ? '25%' : '50%'),
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
      width: props => (props.showingFullPalette ? '20%' : '100%'),
      height: props => (props.showingFullPalette ? '25%' : '10%')
    }
  },
  buttons: {
    left: `${buttonRange}%`,
    right: `${buttonRange}%`,
    top: `${buttonRange}%`,
    bottom: `${buttonRange}%`,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [sizes.down('xs')]: {
      flexDirection: 'column'
    }
  },
  moreButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.5
        ? 'rgba(0, 0, 0, 0.5)'
        : 'rgba(255, 255, 255, 0.8)',
    fontSize: '1.2rem',
    opacity: 0,
    '&:hover': {
      transform: 'scale(1.3)',
      transition: 'all 0.2s ease-in-out'
    }
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.5
        ? 'rgba(0, 0, 0, 0.5)'
        : 'rgba(255, 255, 255, 0.8)',
    fontSize: '1.2rem',
    opacity: 0,
    '&:hover': {
      transform: 'scale(1.3)',
      transition: 'all 0.2s ease-in-out'
    }
  },
  boxContent: {
    width: '70%',
    left: '0',
    bottom: '0',
    padding: '10px',
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: '12px',
    letterSpacing: '1px',
    position: 'absolute',
    textTransform: 'uppercase'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08
        ? 'rgba(255, 255, 255, 0.8)'
        : 'rgba(0, 0, 0, 0.5)',
    [sizes.down('xs')]: {
      display: 'none'
    }
  }
};
