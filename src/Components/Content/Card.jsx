import React, {
  useState,
  useEffect
} from 'react';
import pokemontype from '../../pokemonTypes'
import {
  Container,
  Typography,
  Paper,
} from '@material-ui/core';
import getPokemon from '../../Function/getPokemon'
import { useStyles } from './style/cardStyle'

export default ({ url }) => {
  const classes = useStyles();

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    const info = async name => setPokemon(await getPokemon(name))
    info(url.name)
  }, [])
  if (!pokemon) return null;

  const { id, name, types, img } = pokemon

  return (
    <div className={classes.root}>
      <Paper>
        <Container>
          <img
            src={img}
            alt="pokemon_img"
            className={classes.pokemon_img} />
          <Typography
            component={'span'}
          >ID: {id}
          </Typography>
          <p >{name}</p>
          <p className={classes.type}>
            {types?.map(({ type }) => (
              <Typography
                component={'span'}
                className={classes.type_div}
                style={{ backgroundColor: pokemontype[type.name] }}
                key={type.name}
              >
                {type.name}
              </Typography>
            ))}
          </p>
        </Container>
      </Paper>
    </div>
  );
}
