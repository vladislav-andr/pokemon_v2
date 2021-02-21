import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useDispatch } from 'react-redux'
import { getSearch } from '../../store/asyncActions/getSearch'
import { useStyles } from './style/searchStyle'

export default () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const onKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      dispatch(getSearch(event.target.value))
      event.target.value = ''
    }
  }
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onKeyPress={onKeyPressHandler}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}