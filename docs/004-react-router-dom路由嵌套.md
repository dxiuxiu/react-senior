
# react-router-dom路由嵌套

`为什么相同的写法有时候能正常运行有时候不能呢?`

```javascript
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
                    <Route component={NotFound} />
                    {/* <Redirect to={`/`} /> */}
                    {/* <Redirect to='*' component={NotFound} /> */}
                </Switch>
            </Suspense>
        </App>
    )
    }} >
</Route>
```


??
```javascript
<Route path='/' component={App} >
    <Suspense fallback={(<div>loading...</div>)}>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/city" component={City} />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/user" component={User} />
            <Route component={NotFound} />
        </Switch>
    </Suspense>
</Route>
```