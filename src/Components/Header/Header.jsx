import React from 'react';
import { Toolbar, AppBar, IconButton, Typography } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import Filter from './Filter'
import Search from './Search'
import { useStyles } from './style/headerStyle'

export default ({ setMenuStatus }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setMenuStatus(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='span'
            className={classes.title}
            variant="h6"
            noWrap
          >
            PokemonAPI
          </Typography>
          <Search />
          <Filter />
        </Toolbar>
      </AppBar>
    </div>
  );
}
