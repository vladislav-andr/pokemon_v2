import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core'

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({

    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '5px 26px 5px 12px',
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 4,
      },
    },
  }),
)(InputBase);