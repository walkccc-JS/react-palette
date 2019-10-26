import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
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
    color: 'black',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  },

  deleteIcon: {
    color: 'white',
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
