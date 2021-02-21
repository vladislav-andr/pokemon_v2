import {
    Theme,
    createStyles,
    makeStyles
} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: theme.spacing(6),
            '& > *': {
                margin: theme.spacing(1),
                marginTop: theme.spacing(3),
                width: "80%",
                [theme.breakpoints.down('xs')]: {
                    padding: 0,
                    // margin: theme.spacing(-3), 
                    width: "100%",
                    marginTop: theme.spacing(2),
                },
                height: "auto",
            },
        },

        list: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            alignSelf: 'center',
            justifyItems: 'center',
            [theme.breakpoints.up('sm')]: { gridTemplateColumns: '1fr', },
            [theme.breakpoints.up('md')]: { gridTemplateColumns: '1fr 1fr ', },
            [theme.breakpoints.up('lg')]: { gridTemplateColumns: '1fr 1fr 1fr ', },
            [theme.breakpoints.up('xl')]: { gridTemplateColumns: '1fr 1fr 1fr 1fr', },
        },
        textshow: {
            display: 'flex',
            justifyContent: 'center',
        },
        blockcontent: {
            minHeight: '100vh',
        },
    }),
);