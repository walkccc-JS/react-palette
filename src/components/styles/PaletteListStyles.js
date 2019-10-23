export default {
  root: {
    height: '100vh',
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white'
  },
  palettes: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
};
