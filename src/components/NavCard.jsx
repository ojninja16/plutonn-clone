import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiSolidVideos } from "react-icons/bi";
import {HiUserGroup} from "react-icons/hi";
import '../styles/navbar.css';


const NavCard = () => {
  return (
    <nav>
      <ul className="navbar_links">
        <li className="navbar_item">
          <AiFillHome height='30px' width='30px'/>
          <h2>Home</h2>
        </li>
        <li className="navbar_item">
          <HiUserGroup/>
          <h2>Community</h2>
        </li>
        <li className="navbar_item">
          <AiOutlineSearch/>
          <h2>Search</h2>
        </li>
        <li className="navbar_item">
          <BiSolidVideos/>
          <h2>Courses</h2>
        </li>
      </ul>
    </nav>
  )
}

export default NavCard