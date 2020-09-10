import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//全局数据仓库0
export default new Vuex.Store({
    //共同维护的一个状态，state里面可以是很多个全局状态
    state: {
        userName: sessionStorage.getItem('userName'), //定义用户名
        isLogin: sessionStorage.getItem('isLogin')     //定义登录状态
    },
    //处理数据的唯一途径，state的改变或赋值只能在这里
    mutations: {
        login(state,userName) {
            state.userName = userName;                      //修改状态
            state.isLogin = true;                           //修改状态
            sessionStorage.setItem('userName' ,userName);       //保存用户名
            sessionStorage.setItem('isLogin' , true)            //保存登录状态
        },
        loginOut(state) {
            state.userName = null;
            state.isLogin = false;
            sessionStorage.removeItem('userName')      //删除用户名
            sessionStorage.removeItem('isLogin')       //删除登陆状态
        }

    },
    //数据的异步操作
    actions: {
        loginAction(context ,userName){
            context.commit('login' ,userName)
        },
        loginAction(context){
            context.commit('loginOut')
        }
    },
    //将局部变量分解到各个局部仓库，防止store更加臃肿
    modules: {
        
    },
    //获取数据并渲染
    getters: {

    }
})