import { Link } from "react-router-dom";
import logo from "../assets/pics/hklogo.png";
const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center fixed px-8 py-4   text-white  ">
      <img src={logo} className="h-15" alt="LOGO" />
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
