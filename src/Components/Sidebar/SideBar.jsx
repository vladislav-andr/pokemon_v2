import React, { useState, useEffect } from 'react';
import pokemontype from '../../pokemonTypes'
import { Checkbox, FormControlLabel, Drawer } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from '../../store/asyncActions/setFilters'
import setList from '../../Function/setList'
import { useStyles } from './sideBarStyle'


export default ({ menuStatus, setMenuStatus }) => {
  const classes = useStyles();

  const getType = async () => setTypes(await setList('https://pokeapi.co/api/v2/type'))

  const [types, setTypes] = useState([])
  useEffect(() => getType(), [])

  const dispatch = useDispatch()
  const active = useSelector(state => state.list_Urls.typeFilter)

  const setCheckedFilter = value => {

    if (!active.includes(value))
      dispatch(setFilters([...active, value]))
    else
      dispatch(setFilters(active.filter(res => res != value)))
  }

  return (
    <Drawer
      open={menuStatus}
      onClose={() => setMenuStatus(false)}
    >
      {types?.map(res =>
        <div key={res.name}>
          <FormControlLabel
            style={{ backgroundColor: pokemontype[res.name] }}
            className={classes.type_div}
            control={
              <Checkbox
                checked={active.includes(res.name)}
                onClick={() => setCheckedFilter(res.name)}
              />
            }
            label={res.name}
          />
        </div>
      )}
    </Drawer>
  );
}




