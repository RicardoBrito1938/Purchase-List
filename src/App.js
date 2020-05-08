import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import pink from '@material-ui/core/colors/pink';

import './App.css';
import Header from './common/Header';
import Home from './Home';
import createList from './createList';
import store from './store';

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: pink,
            secondary: {
                main: '#2979ff',
            },
        },
    });

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/list" component={createList} />
                        </Switch>
                    </>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
