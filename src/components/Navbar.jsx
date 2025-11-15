import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-row gap-2">
      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
