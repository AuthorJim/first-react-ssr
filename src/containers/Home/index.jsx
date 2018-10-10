import React from 'react'

function Home() {
    const handleClick = () => {
        alert('nihao')
    }
    return (
        <div>
            <div style={{ color: 'red', fontSize: 20, marginBottom: 20 }}>我是中国人🇨🇳</div>
            <button onClick={handleClick}>点击一下</button>
        </div>
    )
}

export default Home
