import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'
import UserListContainer from './components/userlist/userlistcontainer.js'
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={UserListContainer} />
        </Route>
    </Router>)
    , document.getElementById('root')
)
