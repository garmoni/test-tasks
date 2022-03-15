import { Link} from "react-router-dom";

import './styles.css';

export const Header = () => {
    return (
        <div className="header">
            <div className="header-wrap">
                <Link to="/Task1">Test Task 1</Link>
                <Link to="/Task2">Test Task 2</Link>
                <Link to="/Task3">Test Task 3</Link>
            </div>
        </div>
    )
}