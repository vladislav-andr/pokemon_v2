import {
  LOADING_LIST,
  COMPLETE,
  COMPLETED_LIST,
  ERROR_LIST,
  SET_TYPE_SHOWFILTER,
  SET_FILTERS_POKEMON,
  SET_SEARCH_POKEMON,
} from './nameTYPE'

const defaultStore = {
  list: [],
  loading: true,
  showFilter: 20,
  typeFilter: [],
  searchFilter: '',
}

export default (state = defaultStore, action) => {
  switch (action.type) {

    case LOADING_LIST:
      return {
        ...state,
        loading: true,
      }

    case COMPLETE:
      return {
        ...state,
        loading: false,
      }

    case COMPLETED_LIST:
      return {
        ...state,
        list: [...action.payload],
        loading: false,
      }

    case ERROR_LIST:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case SET_TYPE_SHOWFILTER:
      return {
        ...state,
        showFilter: action.payload,
      }

    case SET_FILTERS_POKEMON:
      return {
        ...state,
        loading: false,
        searchFilter: '',
        list: [...action.payload.data],
        typeFilter: [...action.payload.types],
      }

    case SET_SEARCH_POKEMON:
      return {
        ...state,
        loading: false,
        typeFilter: [],
        list: [...action.payload.data],
        searchFilter: action.payload.value,
      }

    default:
      return state
  }
}
// ? касается загрузки
export const loading_list = () => ({ type: LOADING_LIST })
export const complete = () => ({type: COMPLETE})
export const completed_list = (payload) => ({ type: COMPLETED_LIST, payload })
export const error_list = (payload) => ({ type: ERROR_LIST, payload })

export const setSearch = (payload) => ({ type: SET_SEARCH_POKEMON, payload })   // ? search
export const setTypeFilter = (payload) => ({ type: SET_FILTERS_POKEMON, payload })   // ? typefilter
export const setShowFilter = (payload) => ({ type: SET_TYPE_SHOWFILTER, payload })   // ? showfilter


