import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';

function ColorBox({ classes, name, background, moreUrl, showingFullPalette }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => setCopied(true);

  const finishCopied = () => setCopied(false);

  return (
    <CopyToClipboard text={background} onCopy={handleCopy}>
      <div style={{ background }} className={classes.ColorBox}>
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
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            autoHideDuration={1200}
            ContentProps={{ 'aria-describedby': 'message-id' }}
            message={<span id="message-id">{background} copied</span>}
            open={copied}
            onClose={finishCopied}
            action={[
              <IconButton
                aria-label="close"
                color="inherit"
                key="close"
                onClick={finishCopied}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
        </div>
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
