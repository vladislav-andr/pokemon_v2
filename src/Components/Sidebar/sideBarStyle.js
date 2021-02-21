import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    type: {
      color: 'white',

      display: 'block',
      borderSpacing: '5px',
    },
    type_div: {
      cursor: 'pointer',
      width: '125px',
      margin: '2px',
      padding: '0px 10px',
      borderRadius: '5px',
      fontSize: '8pt',
    },
  }),
);