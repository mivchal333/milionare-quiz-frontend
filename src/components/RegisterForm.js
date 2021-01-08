import React, {useRef, useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Card} from "@material-ui/core";
import {connect} from "react-redux";
import {Alert} from "@material-ui/lab";
import {register} from '../actions/actions'

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

const RegisterForm = (props) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const nickRef = useRef(null);
    const [errors, setErrors] = useState(false)
    const classes = useStyles();

    const onSubmit = (e) => {
        e.preventDefault()
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const nick = nickRef.current.value;

        props.register(username, password, nick, setErrors);
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
                        Register
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={onSubmit}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            autoComplete="username"
                            autoFocus
                            inputRef={usernameRef}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="nick"
                            label="Nick"
                            name="Nick"
                            autoComplete="nick"
                            autoFocus
                            inputRef={nickRef}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            inputRef={passwordRef}

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
                        >Register</Button>
                    </form>
                </div>
            </Container>
        </Card>

    )
}

RegisterForm.propTypes = {}
const mapDispatchToProps = {
    register
}
export default connect(null, mapDispatchToProps)(RegisterForm)




