import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      '& > *': {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
      },
    },
  }),
);