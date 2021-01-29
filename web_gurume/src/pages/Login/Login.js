import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <div className='loginBigBox'>
            <div className='centerBox'>
                <div className='loginTitle'>Big Gurume</div>
                <div className='inputTypeBox'>
                    <div><input className='userIdBox' type='text' placeholder='ID를 입력해주세요'/></div>
                    <div><input className='userPwBox' type='password' placeholder='PW를 입력해주세요'/></div>
                    <div><Link to='/bigGurume'><input className='loginButton' type='button' value='Login'/></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Login
