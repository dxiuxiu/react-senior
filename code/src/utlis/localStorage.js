export default {
    getItem: (key) => {
        const result = window.localStorage.getItem(key)
        if (result) {
            return JSON.parse(result)
        }
        return null
    },
    setItem: (key, value) => {
        window.localStorage.setItem(key, JSON.stringify(value))
        // window.localStorage.key = JSON.stringify(value);
        // window.localStorage[`${key}`] = JSON.stringify(value)

    },
    deleteItem: function () {
        return new Promise((resolve) => {
            window.localStorage.removeItem(key)
            resolve({ 'isDeleted': true })
        })
    },
    clear: function () {
        return new Promise((resolve) => {
            window.localStorage.clear()
            resolve({ 'isClear': true })
        })
    }
}