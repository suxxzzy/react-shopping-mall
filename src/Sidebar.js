import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/like">Like</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
    </div>
  );
}

export default Sidebar;