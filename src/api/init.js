import { request } from './request.js'

export function _login(data) {
    return request({
        url: 'login',
        data,
        method:'post'
    })
}


export function _getVerify() {
    return request({
        url: 'verify',
        // params: data,
        // method:'post'
    })
}