export default {
  Palette: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    marginBottom: '-3.5px',
    cursor: 'pointer',
    display: 'inline-block',
    opacity: 1,
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.9)',
    '& a': {
      color: 'white',
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
      outline: 'none',
      position: 'absolute',
      textAlign: 'center',
      textDecoration: 'none',
      textTransform: 'uppercase'
    }
  }
};
