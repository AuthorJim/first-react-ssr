import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <h1 style={{ color: 'blue', fontSize: 20, marginBottom: 20 }}>请你登录 干你妈的🇺🇸</h1>
            <Link to="/">回到首页</Link>
        </div>
    )
}

export default Login
