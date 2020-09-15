import axios from "axios"
import qs from "qs"
let baseUrl = ""


//请求拦截
axios.interceptors.request.use(config => {
    if (config.url !== baseUrl + "/api/login" && config.url !== baseUrl + "/api/register") {
        config.headers.authorization = JSON.parse(sessionStorage.getItem("user")).token;
    }
    return config;
})

//响应拦截
axios.interceptors.response.use(res => {
    console.group("======本次请求的地址是" + res.config.url + "=========");
    console.log(res);
    console.groupEnd();

    console.log(res.config.url);

    // if (res.config.url == "/api/api/rolelist") {
    //     res.data.msg = "登录已过期或访问权限受限"
    // }

    // if (res.data.msg === "登录已过期或访问权限受限") {
    //     warningAlert("登录已过期或访问权限受限")
    //     //清空info
    //     store.dispatch("user/changeInfoAction", {})
    //     //跳转到登录 
    //     router.push("/login")
    // }
    return res;
})

//会员注册
export const reqMemberRegister = (params) => {
    return axios({
        url: baseUrl + "/api/register",
        method: "post",
        data: qs.stringify(params)
    })
}

//会员登录
export const reqMemberLogin = (params) => {
    return axios({
        url: baseUrl + "/api/login",
        method: "post",
        data: qs.stringify(params)
    })
}

//获取分类信息(首页)
export const reqCateInfo = () => {
    return axios({
        url: baseUrl + "/api/getcate",
        method: "get",
    })
}

//获取轮播图信息(首页)
export const reqBannerList = () => {
    return axios({
        url: baseUrl + "/api/getbanner",
        method: "get",
    })
}

//获取限时秒杀信息(首页)
export const reqSeckillList = () => {
    return axios({
        url: baseUrl + "/api/getseckill",
        method: "get",
    })
}

//获取商品信息(首页)
export const reqIndexGoods = () => {
    return axios({
        url: baseUrl + "/api/getindexgoods",
        method: "get",
    })
}

//获取分类树形结构
export const reqCateTree = () => {
    return axios({
        url: baseUrl + "/api/getcatetree",
        method: "get",
    })
}

//获取分类商品
export const reqGoods = (params) => {
    return axios({
        url: baseUrl + "/api/getgoods",
        method: "get",
        params
    })
}

//获取一个商品信息
export const reqGoodsInfo = (params) => {
    return axios({
        url: baseUrl + "/api/getgoodsinfo",
        method: "get",
        params
    })
}

//购物车列表
export const reqCartList = (params) => {
    return axios({
        url: baseUrl + "/api/cartlist",
        method: "get",
        params
    })
}

//购物车添加
export const reqCartAdd = (params) => {
    return axios({
        url: baseUrl + "/api/cartadd",
        method: "post",
        data: qs.stringify(params)
    })
}

//购物车删除
export const reqCartDelete = (params) => {
    return axios({
        url: baseUrl + "/api/cartdelete",
        method: "post",
        data: qs.stringify(params)
    })
}

//购物车修改
export const reqCartEdit = (params) => {
    return axios({
        url: baseUrl + "/api/cartedit",
        method: "post",
        data: qs.stringify(params)
    })
}