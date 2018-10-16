import Link from 'next/link'

const style = { marginRight: 20 }

const Header = () => (
    <div>
        <Link href="/">
            <button style={style}>Index</button>
        </Link>
        <Link href="/about">
            <button style={style}>About</button>
        </Link>
    </div>
)

export default Header
