class BaseModel {
    /** 
     * @param data object
     * @param message string
     */
    constructor(data, message) {
        if (typeof data === 'string') { // 兼容只传递一个参数的情况，即允许传一个对象一个字符串也允许只传一个对象或字符串
            this.message = data
            data = null
            message = null
        }
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message) // 实现执行父类的构造函数
        this.errno = 0
    }
}

class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.errno = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}