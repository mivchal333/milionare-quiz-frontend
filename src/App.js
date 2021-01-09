import React from 'react'
import PropTypes from 'prop-types'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Game from './components/Game'
import history from './history'
import {Router} from "react-router";
import MainPanel from "./components/MainPanel";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import MenuCard from "./components/MenuCard";
import {makeStyles} from "@material-ui/core/styles";
import Statistics from "./components/statistics/Statistics";
import AddQuestionForm from "./components/AddQuestionForm";

const useStyles = makeStyles((theme) => ({

    lCentered: {
        paddingLeft: theme.spacing(9),
    }
}));
const App = (props) => {

    const classes = useStyles();
    return (
        <Router history={history}>
            <Switch>
                <div className={`l-centered ${classes.lCentered}`}>
                    <Route
                        exact
                        path='/'
                        component={Home}
                    />
                    <Route
                        exact
                        path='/login'
                        component={LoginForm}
                    />
                    <Route
                        exact
                        path='/register'
                        component={RegisterForm}
                    />
                    <Route
                        exact
                        path='/dashboard'
                        component={MenuCard}
                    />

                    <Route
                        exact path='/game'
                        component={Game}
                    />
                    <Route
                        exact path='/stats'
                        component={Statistics}
                    />
                    <Route
                        exact path='/questionAdd'
                        component={AddQuestionForm}
                    />
                </div>
            </Switch>
            <MainPanel/>
        </Router>
    )
}

App.propTypes = {
    history: PropTypes.object
}

export default App
