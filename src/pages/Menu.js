import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillFolderOpen,
  AiFillGithub,
  AiFillTool,
  AiOutlineHome,
  GiHamburgerMenu,
  FaHamburger,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    console.log(menuVisible);
  };

  return (
    <div className="Menu">
      <div className="Menu-1">
        <h1>
          <Link to="/">PORTFOLIO</Link>
        </h1>
      </div>
      <div className={`Menu-2 ${menuVisible ? "show" : ""}`}>
        <div className="ham">
          <RxHamburgerMenu size={30} onClick={toggleMenu} />
        </div>

        <Link to="/" className="menu-item">
          <AiOutlineHome />
        </Link>
        <Link to="/skills" className="menu-item">
          <AiFillTool />
        </Link>
        <Link to="/projects" className="menu-item">
          <AiFillFolderOpen />
        </Link>
        <Link to="https://github.com/Wjyeop" className="menu-item">
          <AiFillGithub />
        </Link>
      </div>
    </div>
  );
}

export default Menu;
