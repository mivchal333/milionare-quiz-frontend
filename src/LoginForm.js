import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Card} from "@material-ui/core";
import {login} from "./actions/actions";
import {connect} from "react-redux";
import {Alert} from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    container: {
        margin: theme.spacing(6),
    },
    card: {
        margin: theme.spacing(6),
    },
}));

const LoginForm = (props) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [errors, setErrors] = useState(false)
    const classes = useStyles();

    const onSubmit = (e) => {
        e.preventDefault()
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        props.login(username, password, setErrors);
    }

    return (
        <Card className={classes.card}>
            <Container component="main" maxWidth="xs" className={classes.container}>
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={onSubmit}
                    >
                        <TextField
                            inputRef={usernameRef}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            inputRef={passwordRef}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {errors && (
                            <Alert severity="error">Try again!</Alert>
                        )}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >Login</Button>
                    </form>
                </div>
            </Container>
        </Card>

    )
}

LoginForm.propTypes = {
    setupApp: PropTypes.func,
    gameStarted: PropTypes.bool,
    history: PropTypes.object
}
const mapStateToProps = state => ({})
const mapDispatchToProps = {
    login
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)



