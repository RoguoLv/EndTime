import axios from '../utils/request'
import '../mock/mock'

export function getTime(){
    return axios({
        url:'/time/list',
        method:'post'
    })
}
