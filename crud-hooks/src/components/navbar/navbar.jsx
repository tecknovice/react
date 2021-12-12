import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <ul>
            <li> <Link to='/create'>Create</Link> </li>
            <li> <Link to='/'>Read</Link> </li>
        </ul>
    )
}
