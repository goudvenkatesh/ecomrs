import {Link} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const Header = ()=>{
    const onclickButton=()=>{
        Cookie.remove('jwt_token')
        
    }

    return (
    <nav className="nav-header">
        <h1 className='logo'>VG</h1>
        <ul className='nav-elements'>
            <li className='nav-item'>
                <Link to="/">Home</Link>
            </li>
            <li className='nav-item'>
                <Link to="/about">About</Link>
            </li>
                <li className='nav-item'>
                <Link to="/products">Products</Link>
            </li>
            <button type='button' onClick={onclickButton}>
                Logout
            </button>
        </ul>
    </nav>
)
}
export default Header