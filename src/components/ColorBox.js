import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';

const styles = {
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

class ColorBox extends Component {
  state = { copied: false };

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };

  render() {
    const {
      classes,
      name,
      background,
      moreUrl,
      showingFullPalette
    } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${copied &&
              classes.showOverlay}`}
          />
          <div
            className={`${classes.copyMessage} ${copied &&
              classes.showMessage}`}
          >
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>

          {showingFullPalette && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
