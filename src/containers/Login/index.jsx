import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = ({ age }) => ({ age })

function Login(props) {
    return (
        <div>
            <h1 style={{ color: 'blue', fontSize: 20, marginBottom: 20 }}>请你登录 干你妈的🇺🇸</h1>
            <Link to="/">回到首页</Link>
            <p>{props.age}</p>
        </div>
    )
}

export default connect(
    mapStateToProps,
    null
)(Login)
