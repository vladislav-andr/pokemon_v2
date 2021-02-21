import { completed_list, loading_list, error_list } from "../actions"
import setList from '../../Function/setList'

export const getAllList = url => {
  return async dispatch => {
    dispatch(loading_list())
    const data = await setList(url)
    Array.isArray(data) ? dispatch(completed_list(data)) : dispatch(error_list(data))
  }
}