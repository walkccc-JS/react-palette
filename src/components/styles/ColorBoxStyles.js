import chroma from 'chroma-js';

export default {
  ColorBox: {
    width: '20%',
    height: props => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    marginBottom: '-3.5px',
    cursor: 'pointer',
    display: 'inline-block',
    position: 'relative',
    '&:hover button': {
      opacity: 1
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
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.5
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
    width: '60px',
    height: '30px',
    right: '0',
    bottom: '0',
    background: 'rgba(255, 255, 255, 0.3)',
    border: 'none',
    lineHeight: '30px',
    position: 'absolute',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.5
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
    width: '100px',
    height: '30px',
    marginLeft: '-50px',
    marginTop: '-15px',
    left: '50%',
    top: '50%',
    background: 'rgba(255, 255, 255, 0.3)',
    border: 'none',
    display: 'inline-block',
    fontSize: '1rem',
    lineHeight: '30px',
    opacity: '0',
    outline: 'none',
    position: 'absolute',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  boxContent: {
    width: '100%',
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
      textShadow: '2px 2px black'
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
