import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './MenuBar.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Nawfal's Shoe Store
          </Typography>
          <Link to="/" className={styles.link}><Button color="inherit">Home</Button></Link>
          <Link to="/store" className={styles.link}><Button color="inherit">Store</Button></Link>
          <Link to="/cart" className={styles.link}><Button color="inherit">Cart</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}