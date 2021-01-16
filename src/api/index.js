// 配置API接口地址
// var root = 'https://cnodejs.org/api/v1'
// 引用axios
var axios = require('axios')
function apiAxios (obj, method, url, params, success, failure, errorFunctionAndRefreshToken) {
    console.log(method)
    axios({
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
        // method: method,
        method: method,
        url: url,
        /* 若传参数--params,若传body(对象)--data */
        data: method === 'POST' ? params : null,
        params: method === 'GET' ? params : null,
        withCredentials: false
    })
        .then(function (res) {
            success(res)
        })
        .catch(function (err) {
            errorFunctionAndRefreshToken(err, obj, method, url, params, success, failure)
        })
}

// 若提示token过时，先用refresh_token刷新token
function errorFunctionAndRefreshToken (err, obj, method, url, params, success, failure) {
    if (err && err.response) {
        let status = err.response.status
        switch (status) {
        case 401:
            console.log(window.location.pathname,400001)
            obj.$store.commit('reLogin', true)
            break
        case 403:
            console.log(window.location.pathname,400003)
            obj.$store.commit('reLogin', true)
            break
        /* case 504:
                if (failure) {
                    failure();
                }
                obj.toast('请求超时，请检查网络情况');
                break; */
        default:
        // obj.toast('api error,HTTP CODE:' + status);
            if (failure) {
                failure()
            }
            obj.$message({
                message: '请求超时，请检查网络情况',
                type: 'error'
            })
        }
    }
}
// 返回在vue模板中的调用接口
export default {
    get: function (obj, url, params, success, failure) {
        return apiAxios(obj, 'GET', url, params, success, failure, errorFunctionAndRefreshToken)
    },
    post: function (obj, url, params, success, failure) {
        return apiAxios(obj, 'POST', url, params, success, failure, errorFunctionAndRefreshToken)
    },
}
