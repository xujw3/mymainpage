import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">拾光笔记</Link>
      </div>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          主页
        </NavLink>
        <NavLink to="/articles" className={({ isActive }) => (isActive ? 'active' : '')}>
          文章
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          关于
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;