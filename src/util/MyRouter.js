import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";
export default class MyRouter extends Component {
    render() {
        // 取出session 存的值 
        let isLogin = sessionStorage.getItem('isLogin')
        return (
            <div className='MyRouter'>
                {
                    isLogin ? <Route {...this.props} ></Route> : <Redirect to='/login' ></Redirect>
                }
            </div>
        )
    }
}