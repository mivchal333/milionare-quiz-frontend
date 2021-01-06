import React, {useEffect} from 'react'
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
    const classes = useStyles();

    useEffect(() => {
        if (!props.gameStarted) {
            // props.history.replace('/')
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()

        const {
            props: {
                setupApp,
                history
            },
            refs: {
                nickName: {
                    value: nickNameVal
                },
                difficulty: {
                    value: difficultyVal
                }
            }
        } = this

        if (!nickNameVal.length) {
            window.alert('Please enter the name :)')
            return
        }

        setupApp(nickNameVal, difficultyVal, () => {
            history.push('/game')
        })
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
                            name="username"
                            autoComplete="username"
                            autoFocus
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
                        />

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

RegisterForm.propTypes = {
    setupApp: PropTypes.func,
    gameStarted: PropTypes.bool,
    history: PropTypes.object
}

export default RegisterForm



