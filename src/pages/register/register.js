import React, { Component } from 'react'
import './register.css'
import Header from '../../components/Header/Header'
import { reqMemberRegister } from "../../util/request"
import { successAlert } from "../../util/alert"
export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                nickname: '',
                password: ''
            },
        }
    }

    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }

    register() {
        reqMemberRegister(this.state.user).then(res => {
            if (res.data.code === 200) {
                successAlert(res.data.msg)
                this.props.history.push("/login")
            } else {
                successAlert(res.data.msg)
                this.setState({
                    user: {
                        phone: "",
                        nickname: '',
                        password: ''
                    }
                })
            }
        })
    }
    render() {
        let { user} = this.state
        return (
            <div className="register">
                <Header back title='注册' ></Header>
                <div className="register_form">
                    <ul>
                        <li className='li'>  手机号：</li>
                        <li>
                            <input type="text" placeholder="请输入手机号" onChange={e => this.changeUser(e, 'phone')} value={user.phone} />
                        </li>
                        <li className='li'>昵称：</li>
                        <li>
                            <input type="text" placeholder="请输入昵称" onChange={e => this.changeUser(e, 'nickname')} value={user.nickname} />
                        </li>
                        <li className='register_li'> 密码：</li>
                        <li>
                            <input type="password" placeholder="请输入密码" onChange={e => this.changeUser(e, 'password')} value={user.password} />
                        </li>
                        <li className=' register_button'>
                            <button onClick={() => { this.register() }}>注册</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}