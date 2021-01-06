import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import * as PropTypes from "prop-types";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {Button, Card} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const Home = props => {
    const classes = useStyles();
    return (
        <div className='l-centered'>
        <Container component="main" maxWidth="xs">
            <Card>
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <HelpOutlineIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Welcome in Millionaire Quiz!
                </Typography>
                <Button
                    variant="contained"
                    color="secondary" component={Link} to="/setup"
                    onClick={props.setGameStarted}
                    className={classes.submit}

                >
                    Continue
                </Button>
            </div>
            </Card>
        </Container>
        </div>
    )
}

Home.propTypes = {
    setGameStarted: PropTypes.func
}
export default Home
