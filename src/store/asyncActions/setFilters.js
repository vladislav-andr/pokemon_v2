import axios from 'axios'
import { loading_list, setTypeFilter } from '../actions'
import setList from '../../Function/setList'

export const setFilters = types => {
  return async dispatch => {
    dispatch(loading_list())
    let data = []
    
    if (!types.length) {
      data = await setList('https://pokeapi.co/api/v2/pokemon?limit=9999')
      dispatch(setTypeFilter({data, types}))
    }

    for (const type of types) {
      const temp = await axios
        .get(`https://pokeapi.co/api/v2/type/${type}/`)
        .then(res => res.data.pokemon.map(res => res.pokemon))
      temp.forEach(j => {
        if (!data.find(i => i.name === j.name)) {
          data.push(j)
        }
      })
    }
    dispatch(setTypeFilter({data, types}))
  }
}