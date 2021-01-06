import React from 'react'
import PropTypes from 'prop-types'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import history from './history'
import {Router} from "react-router";
import MainPanel from "./MainPanel";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import MenuCard from "./MenuCard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    lCentered: {
        marginLeft: theme.spacing(9),
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
