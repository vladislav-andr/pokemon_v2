import {
  Theme,
  createStyles,
  makeStyles
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(-2.9),
      },
      '& > *': {
        margin: theme.spacing(1),
        width: '260px',
        height: '400px',
      },
    },
    type: {
      color: 'white',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'table',
      borderSpacing: '5px',
    },
    type_div: {
      display: 'table-cell',
      padding: '3px 10px',
      borderRadius: '5px',
    },
    pokemon_img: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '150px',
      height: '150px',
      padding: '20px 0',
    },
  }),
);