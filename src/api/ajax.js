/**
 * ajax请求函数模块
 * 返回值，promise对象(异步返回的数据是：response.data)
 */
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {

    return new Promise(function (resolve, reject) {//resolve成功回调函数，reject失败回调函数,直接外部调用得到想要的数据
        //执行异步ajax请求
        let promise
        if (type === 'GET') {
            //准备url query参数数据
            let dataStr = ''//数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'//表示携带参数的拼接a=1&b = 2
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))//从0开始到最后一个&下标结束，左闭右开
            }
            //发送get请求
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }
        
        promise.then(response => {
            //成功调用resolve()
            resolve(response.data)
        }).catch(error => {
            //失败调用reject()
            reject(error)
        })


    })


}