import { request } from './request.js'

export function _allExpertInfo() {
    return request({
        url: 'Expert/get/All',
        method:'get',
        // data:id,
        
    })
}
