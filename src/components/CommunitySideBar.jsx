import { AiOutlinePlus } from 'react-icons/ai';
import { communities } from '../constants';
import { FaSearch } from 'react-icons/fa';


const CommunitySideBar = () => {
  return (
    <article className='community_sidebar'>
      <div>
        <div className='search'>
        <input type='text' placeholder='Search Joined Community' style={{ border:'none',outline:'none'}}/>
        <i><FaSearch/></i>
        </div>
        <h3 style={{ color:'#000', fontWeight:'550', fontSize:'16.5px'}}>Popular Communities</h3>
      </div>
      <ul className='community_list' style={{ padding:'0px',display:'flex',gap:'10px',flexDirection:'column'}}>
        {communities.map((community, index) =>(
          <li>
            <a style={{ display:'flex', gap:'5px'}}>
              <img src={community.logo}/>
              <div style={{ display: 'flex', flexDirection:'column'}}>
                <h4>{community.name}</h4>
                <h3>{community.members} members</h3>
              </div>
            </a>
            <button className='community_join'>
              <AiOutlinePlus color={'#f45046'}/> 
              Join
            </button>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default CommunitySideBar