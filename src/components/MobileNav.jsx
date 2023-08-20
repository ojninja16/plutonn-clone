import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiSolidVideos } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import '../styles/mobile_nav.css';
import user_avatar from '../assets/user_avatar.png';

const MobileNav = () => {
  return (
    <div className="mobile_nav">
    <nav className="mobile_navbar_subclass">
        <ul className="mobile_navbar_links">
          <li className="mobile_navbar_item">
            <AiFillHome height='30px' width='30px'/>
            <h2>Home</h2>
          </li>
            <li className="mobile_navbar_item">
            <HiUserGroup/>
            <h2>Community</h2>
            </li>
            <li className="mobile_navbar_item">
            <AiOutlineSearch/>
            <h2>Search</h2>
            </li>
            <li className="mobile_navbar_item">
            <BiSolidVideos/>
            <h2>Courses</h2>
            </li>
            <li className="mobile_navbar_item">
                <img src={user_avatar} alt="user_avatar" style={{ width:'25px',height:'25px'}}/>
            <h2>Profile</h2>
            </li>
        </ul>

    </nav>
    </div>
  )
}

export default MobileNav