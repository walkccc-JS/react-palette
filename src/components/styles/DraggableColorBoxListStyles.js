import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';

export default makeStyles({
  DraggableColorBoxList: {
    height: '100%',
    [sizes.down('drawer')]: {
      transform: 'translateY(8px)'
    }
  }
});
