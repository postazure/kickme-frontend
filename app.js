import { Router, Route, Link } from 'react-router'
import React from 'react'
import Main from './src/views/main.js'
import AuthForm from './src/views/auth_form.js'

import createBrowserHistory from 'history/lib/createBrowserHistory'

React.render((
    <Router history={createBrowserHistory()}>
        <Route path="/" component={Main}>
            <Route path="auth" component={AuthForm} />
        </Route>
    </Router>
), document.getElementById('main'))