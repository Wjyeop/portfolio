import Menu from "./Menu";
import Footer from "./Footer";
import './css/style.css';
import './css/common.css';
import Profile from "./Profile";
import Skills from "./Skills";

function Main() {
  return (
    <div>
      <Menu/>
      <Profile/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default Main;
