
import { Link } from "react-router-dom";

const Navigation = () => {
    // returns links to navigate between dashboard and watchlist
    return <nav className="navigation-container">
        <ul>
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="/watchlist">watchlist</Link>
            </li>
        </ul>
    </nav>

}
export default Navigation;