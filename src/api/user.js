import { request } from './request.js'

export function _information(id) {
    return request({
        url: 'information',
        method:'get',
        data:id,
        
    })
}

export function _updateInfo(data) {
    return request({
        url: 'update',
        method:'put',
        data
        
    })
}