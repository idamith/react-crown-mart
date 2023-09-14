import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo-container">
                <Link to="/">LOGO</Link>
            </div>
            <Link to='shop'>SHOP</Link>
        </div>
    )
}

export default Navbar