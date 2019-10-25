import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  Navbar: {
    height: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logo: {
    height: '100%',
    marginRight: ' 15px',
    padding: '0 13px',
    background: '#eceff1',
    display: ' flex',
    alignItems: ' center',
    fontFamily: ' Roboto',
    fontSize: ' 22px',
    '& a': {
      color: 'black',
      textDecoration: 'none'
    }
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
      outline: 'none',
      boxShadow: 'none'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem'
  }
});
