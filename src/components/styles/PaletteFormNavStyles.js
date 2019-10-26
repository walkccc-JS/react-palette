import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../constants';
import sizes from './sizes';

const drawerWidth = DRAWER_WIDTH;

export default makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none'
  },
  appBar: {
    height: '64px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    alignItem: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  createPaletteText: {
    [sizes.down('sm')]: {
      display: 'none'
    }
  },
  navButtons: {
    width: '150px',
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none'
    },
    display: 'flex',
    alignItems: 'center',
    [sizes.down('xs')]: {
      marginRight: '0.5rem'
    }
  },
  button: {
    width: '60px',
    margin: '0 0.5rem',
    [sizes.down('xs')]: {
      margin: '0 0.2rem',
      padding: '0.3rem'
    }
  }
}));
