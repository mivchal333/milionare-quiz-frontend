import React, {useRef} from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Card} from "@material-ui/core";
import {addQuestion} from "../actions/actions";
import {connect} from "react-redux";
import history from "../history";

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

const AddQuestionForm
    = (props) => {
    if (!props.user || !props.user.username) {
        history.replace('/')
    }

    const questionRef = useRef(null);
    const correctAnswerRef = useRef(null);
    const incorrectAnswer1Ref = useRef(null);
    const incorrectAnswer2Ref = useRef(null);
    const incorrectAnswer3Ref = useRef(null);
    const classes = useStyles();


    const onSubmit = (e) => {
        e.preventDefault()
        const question = questionRef.current.value;
        const correctAnswer = correctAnswerRef.current.value;
        const incorrectAnswer1 = incorrectAnswer1Ref.current.value;
        const incorrectAnswer2 = incorrectAnswer2Ref.current.value;
        const incorrectAnswer3 = incorrectAnswer3Ref.current.value;

        props.addQuestion(question, correctAnswer, [incorrectAnswer1, incorrectAnswer2, incorrectAnswer3]);
    }

    return (
        <Card className={classes.card}>
            <Container component="main" maxWidth="xs" className={classes.container}>
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Add question
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={onSubmit}
                    >
                        <TextField
                            inputRef={questionRef}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Question"
                            autoFocus
                        />
                        <TextField
                            inputRef={correctAnswerRef}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="CorrectAnswer"
                        />
                        <TextField
                            inputRef={incorrectAnswer1Ref}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Incorrect Answer 1"
                        />
                        <TextField
                            inputRef={incorrectAnswer2Ref}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Incorrect Answer 2"
                        />
                        <TextField
                            inputRef={incorrectAnswer3Ref}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Incorrect Answer 3"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >Submit</Button>
                    </form>
                </div>
            </Container>
        </Card>

    )
}
const mapDispatchToProps = {
    addQuestion
}
const mapStateToProps = state => ({
    user: state.global.user
})
export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionForm
)



