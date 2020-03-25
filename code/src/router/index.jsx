import React, { Suspense, lazy } from 'react'
import App from '../containers/index.jsx'

import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const NotFound = lazy(() => import('../containers/404/index.jsx'))
const Home = lazy(() => import('../containers/Home/index.jsx'))
const City = lazy(() => import('../containers/City/index.jsx'))
const Detail = lazy(() => import('../containers/Detail/index.jsx'))
const Search = lazy(() => import('../containers/Search/index.jsx'))
const User = lazy(() => import('../containers/User/index.jsx'))

// RouterMap
export default () => {
    return (
        // history = {this.props.history}
        <Router >
            <Route path='/' render={() => {
                return (
                    <App>
                        {/* 路由动态加载时最好添加 Suspense 标签，以在目标路由未加载成功时展示合适的 loading 组件，否则会报错 */}
                        <Suspense fallback={(<div>loading...</div>)}>
                            {/* Switch 包裹的 route 一旦有匹配成功的就不再向下匹配 */}
                            <Switch>
                                <Route exact path="/home" component={Home} />
                                <Route exact path="/city" component={City} />
                                <Route exact path="/detail" component={Detail} />
                                <Route exact path="/search" component={Search} />
                                <Route exact path="/user" component={User} />
                                {/* http://localhost:8080/ 出现 NotMatch */}
                                <Route exact path="/" component={Home} />
                                <Route component={NotFound} />
                                {/* <Route to='*' component={NotFound} /> */}
                                {/* <Redirect to={`/`} /> */}
                            </Switch>
                        </Suspense>
                    </App>
                )
            }} >
            </Route>
        </Router>
    )
}
