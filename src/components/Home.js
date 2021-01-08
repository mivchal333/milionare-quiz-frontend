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
import {connect} from "react-redux";
import {setGameStarted} from "../actions/actions";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3),
    },
    card: {
        margin: theme.spacing(3),
        padding: theme.spacing(3),
    }
}));
const Home = props => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="sm">
            <Card className={classes.card}>
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <HelpOutlineIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Welcome in Millionaire Quiz!
                    </Typography>
                </div>
            </Card>
            <Card className={classes.card}>
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5" align={"center"}>
                        To play the game please login or register
                    </Typography>
                    <div>
                        <Button
                            variant="contained"
                            color="secondary" component={Link} to="/login"
                            className={classes.submit}

                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary" component={Link} to="/register"
                            className={classes.submit}
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </Card>
        </Container>
    )
}

Home.propTypes = {
    setGameStarted: PropTypes.func
}

export default connect(null, {setGameStarted})(Home)
