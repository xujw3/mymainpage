import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">拾光笔记</Link>
      </div>
      <nav>
        <Link to="/">主页</Link>
        <Link to="/articles">文章</Link>
        <Link to="/about">关于</Link>
      </nav>
    </header>
  );
};

export default Header;
