import React, {
  useState,
  useEffect
} from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  Container,
  Typography,
  Paper
} from '@material-ui/core';
import { Link } from "react-router-dom";
import Card from './Card'
import PageList from './PageList'
import { useStyles } from './style/contentStyle'

export default function Content() {
  const classes = useStyles();

  const dispatch = useDispatch()
  const { list, loading, showFilter, typeFilter, searchFilter } = useSelector(state => state.list_Urls)

  const [page, setPage] = useState(1)
  const [pokemons, setPokemons] = useState([])
  const [statusPokemons, setStatusPokemons] = useState(false)

  useEffect(() => setPage(1), [list, showFilter])

  useEffect(() => {
    setStatusPokemons(true)

    const begin = ((page - 1) * showFilter)
    const end = ((page * showFilter) < list.length ? (page * showFilter) : list.length)
    const temp = list.slice(begin, end)

    block(temp)

    setStatusPokemons(false)
  }, [(page && list), page, showFilter])

  // ? Тут мы дизайним покемонов в блоки и прочее
  const block = async (arr) => {
    const data = await arr.map(res =>
      <Link
        style={{ textDecoration: 'none', }}
        key={res.name}
        to={`pokemonAPI/${res.name}/`}
      >
        <Card
          key={res.name}
          url={res}
        />
      </Link>)
    setPokemons(data)
  }


  // ? Вывод одного из блока
  const show = () => { // * loading , statusPokemons, list.length, typeFilter.length , searchFilter.length (pokemons)
    if (loading || statusPokemons) {

      return (
        <Typography className={classes.textshow}>
          Loading...
        </Typography>
      )
    }

    else if (!loading && typeFilter.length && !list.length) {

      return (
        <Typography className={classes.textshow}>
          По вашему фильтровому запросу «{typeFilter}­» ничего не найдено :(
        </Typography>)
    }

    else if (!loading && searchFilter.length && !list.length) {

      return (
        <Typography className={classes.textshow}>
          По вашему запросу «{searchFilter}­» ничего не найдено :(
        </Typography>)
    }

    else {
      return (pokemons)
    }
  }

  return (
    <div className={classes.root}>
      <Paper
        elevation={20}
        className={classes.blockcontent}>
        <Container className={classes.list}>
          {show()}
        </Container>
        <PageList
          length={list.length}
          filter={showFilter}
          page={page}
          setPage={setPage}
        />
      </Paper>
    </div>
  );
}