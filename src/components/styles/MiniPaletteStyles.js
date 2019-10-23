export default {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    width: '100%',
    height: '150px',
    backgroundColor: '#dae1e4',
    borderRadius: '5px',
    overflow: 'hidden'
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
  miniColor: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    marginBottom: '-3.5px',
    display: 'inline-block',
    position: 'relative'
  }
};
