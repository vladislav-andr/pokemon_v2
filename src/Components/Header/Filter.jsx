import React from 'react';
import { Typography, Select, MenuItem } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setShowFilter } from '../../store/actions'
import { BootstrapInput } from './style/filterStyle'

export default function FilterOutPut() {
  const dispatch = useDispatch()
  const showFilter = useSelector(state => state.list_Urls.showFilter)

  const filter = [20, 50, 100]

  return (
    <Typography component='span'>
      <Select
        value={showFilter}
        onChange={e => dispatch(setShowFilter(e.target.value))}
        input={<BootstrapInput />}
      >
        {filter?.map((res, index) => <MenuItem key={index} value={res}>{res}</MenuItem>)}
      </Select>
    </Typography>
  );
}