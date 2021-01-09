import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Button, Card} from "@material-ui/core";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setGameStarted} from "../actions/actions";
import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import EqualizerIcon from "@material-ui/icons/Equalizer";

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
const MenuCard = props => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth={"md"}>

            <Card className={classes.card}>
                <CssBaseline/>
                <div className={classes.paper}>
                    <div>
                        <Button
                            variant="contained"
                            color="secondary" component={Link} to="/game"
                            className={classes.submit}
                            startIcon={<PlayArrowIcon/>}
                        >
                            Play
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary" component={Link} to="/stats"
                            className={classes.submit}
                            startIcon={<EqualizerIcon/>}
                        >
                            Statistics
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary" component={Link} to="/questionAdd"
                            className={classes.submit}
                            startIcon={<AddIcon/>}
                        >
                            Add question
                        </Button>
                    </div>
                </div>
            </Card>
        </Container>
    )
}

export default connect(null, {setGameStarted})(MenuCard)
