import { Link } from "react-router-dom";
import "./HeaderComponent.css";

function HeaderComponent() {
  return (
    <header className="header">
      <h1 className="title">Welcome!</h1>
      <nav>
        <ul className="link-list">
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/blog">Blog</Link>
          </li>
          <li>
            <Link className="link" to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
