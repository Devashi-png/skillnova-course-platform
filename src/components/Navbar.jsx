import { Link } from "react-router-dom";
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        SkillNova
      </Link>
     <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/login">Login</Link>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;