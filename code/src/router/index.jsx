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
const Login = lazy(() => import('../containers/Login/index.jsx'))
const Test = lazy(() => import('../Test/index.jsx'))

const routers = [
    {
        id: 'home',
        exact: true,
        path: '/home',
        component: Home
    },
    {
        id: 'city',
        exact: true,
        path: '/city',
        component: City
    },
    {
        id: 'detail',
        exact: true,
        path: '/detail',
        component: Detail
    },
    {
        id: 'search',
        exact: true,
        path: '/search',
        component: Search
    },
    {
        id: 'user',
        exact: true,
        path: '/user',
        component: User
    },
    {
        id: 'test',
        exact: true,
        path: '/test',
        component: Test
    },
    {
        id: 'root',
        exact: true,
        path: '/',
        component: Home
    },
    {
        id: '404',
        exact: undefined,
        path: undefined,
        component: NotFound
    }

]

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
                                {/* {
                                    routers.map((item) => {
                                        return <Route exact={item.exact} key = {item.id} path={item.path} component={item.component} />
                                    })
                                }
                                <Route component={NotFound} /> */}


                                <Route exact path="/home" component={Home} />
                                <Route exact path="/city" component={City} />
                                <Route exact path="/detail/:id" component={Detail} />
                                {/* <Route exact path="/search/:category(/:keyword)" component={Search} />  */}
                                <Route exact path="/search/:category/:keyword?" component={Search} />
                                <Route exact path="/user" component={User} />
                                <Route exact path="/login/:router?/:id?" component={Login} />
                                <Route exact path="/test" component={Test} />
                                <Route exact path="/" component={Home} />
                                <Route component={NotFound} />
                            </Switch>
                        </Suspense>
                    </App>
                )
            }} >
            </Route>
        </Router>
    )
}
