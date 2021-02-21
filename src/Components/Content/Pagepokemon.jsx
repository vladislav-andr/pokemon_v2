import React, { useState, useEffect } from 'react';
import pokemontype from '../../pokemonTypes'
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog, Button,
  Typography,
} from '@material-ui/core';
import getPokemon from '../../Function/getPokemon'
import { Link } from "react-router-dom"
import { useStyles } from './style/pagePokemonStyle'



export default (res) => {
  const classes = useStyles()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    const info = async name => setPokemon(await getPokemon(name))
    info(res.match.params.name)
  }, [])
  if (!pokemon) return null;

  const { id, name, stats, types, img } = pokemon

  return (
    <div className={classes.root}>
      <Dialog open={true}>
        <DialogTitle>
          Pokemon Information
            </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <img
              src={img}
              alt="pokemon_img"
              className={classes.pokemon_img} />
            <Typography
              component={'span'}
              variant={'body2'}
            >ID: {id}
            </Typography>
            <br />
            <Typography component={'span'}>{name}</Typography>
            <Typography component={'span'} className={classes.type}>
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
            </Typography>
            <Typography
              component={'span'}
              className={classes.blockChar}
            >CHARACTER:
              </Typography>
            {stats?.map(({ base_stat, stat: { name } }) => (
              <li key={name}>
                <Typography component={'span'}>
                  {name}: {base_stat}
                </Typography>
              </li>
            ))
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link
            style={{ textDecoration: 'none', }}
            to={`pokemonAPI/`}
          >
            <Button>Return</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}  