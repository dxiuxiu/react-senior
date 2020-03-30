
function get(url) {

    const option = {
        method: 'GET',
        credentials: 'include', // 传 cookie 的设置
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(url, option).then((res) => {
        return res.json()
    }, (err) => {
        console.error(err)
    })
}

function post(url, data) {
    const option = {
        method: 'POST',
        credentials: 'include',
        headers: new Headers({
            // 表示发送端(客户端|服务器)发送的数据类型
            'Content-Type': 'application/json',
            // 表示客户端希望接收的数据
            'Accept': 'application/json'
        }),
        body: JSON.stringify(data)
    }
    return fetch(url, option).then((res) => {
        return res.json()
    }, (err) => {
        console.error(err)
    })
}

export {
    get,
    post
}