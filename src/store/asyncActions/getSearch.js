import axios from 'axios'
import { loading_list, setSearch, completed_list } from '../actions'
import setList from '../../Function/setList'

export const getSearch = (value, url = 'https://pokeapi.co/api/v2/pokemon?limit=9999') => {
  return async dispatch => {
    dispatch(loading_list())
    const list = await setList(url)
    let data = []

    if (!value) dispatch(completed_list(data))

    if (isNaN(value)) {
      data = list.filter(el => el.name.indexOf(value) > -1) // ! поиск по имени
    } else {                                                // ! Поиск по id
      data = list.filter(el => {
        const id = el.url.split('/')
        if (id[6].indexOf(value) > -1)
          return el
      })
    }
    console.log(data)
    dispatch(setSearch({ value, data }))
  }
}