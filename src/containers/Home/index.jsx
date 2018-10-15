import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = store => ({
    name: store.name
})

function Home(props) {
    return (
        <div>
            <div style={{ color: 'red', fontSize: 20, marginBottom: 20 }}>我是中国人🇨🇳</div>
            <Link to="/login">
                <button>点击一下</button>
            </Link>
            <p>{props.name}</p>
        </div>
    )
}

export default connect(
    mapStateToProps,
    null
)(Home)
