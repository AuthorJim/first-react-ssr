import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div style={{ color: 'red', fontSize: 20, marginBottom: 20 }}>我是中国人🇨🇳</div>
            <Link to="/login">
                <button>点击一下</button>
            </Link>
        </div>
    )
}

export default Home
