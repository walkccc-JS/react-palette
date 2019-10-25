import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import styles from './styles/ColorBoxStyles';

function ColorBox({ classes, name, background, moreUrl, showingFullPalette }) {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }, [copied]);

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
        />
        <div
          className={`${classes.copyMessage} ${copied && classes.showMessage}`}
        >
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <div className={classes.buttons}>
            <FileCopyIcon className={classes.copyButton} />
            {showingFullPalette && (
              <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                <ViewComfyIcon className={classes.moreButton} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
