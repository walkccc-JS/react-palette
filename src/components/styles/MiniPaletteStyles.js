import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1
    }
  },
  miniColorBoxesContainer: {
    width: '100%',
    height: '150px',
    backgroundColor: '#dae1e4',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignContent: 'flex-start',
    flexWrap: 'wrap'
  },
  miniColorBox: {
    width: '20%',
    height: '25%',
    display: 'inline-block',
    position: 'relative'
  },
  title: {
    margin: '0',
    paddingTop: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  },
  deleteIcon: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: '#eb3d30',
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '0px',
    top: '0px',
    padding: '10px',
    zIndex: 10,
    opacity: 0
  }
});
