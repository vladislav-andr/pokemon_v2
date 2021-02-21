import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '300px',
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
      width: '200px',
      height: '200px',
      padding: '20px 0',
      [theme.breakpoints.down('sm')]: {
        width: '125px',
        height: '125px',
      },
    },
    blockChar: {
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'table',
      borderSpacing: '5px',
    },
  }),
);