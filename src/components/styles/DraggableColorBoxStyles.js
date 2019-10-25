import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';

export default makeStyles({
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    marginBottom: '-5px',
    cursor: 'pointer',
    display: 'inline-block',
    position: 'relative',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.2)'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '5%'
    }
  },
  boxContent: {
    width: '100%',
    left: '0',
    bottom: '0',
    padding: '10px',
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: '12px',
    letterSpacing: '1px',
    position: 'absolute',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    color: 'rgba(0, 0, 0, 0.5)',
    transition: 'all 0.3s ease-in-out'
  }
});
