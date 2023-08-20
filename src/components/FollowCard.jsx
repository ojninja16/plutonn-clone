import { AiOutlinePlus } from "react-icons/ai"

import { follow_people } from "../constants"

const FollowCard = () => {
  return (
    <section className="follow_card">
      {follow_people.map((user,index) => (
        <li className="follow_people_item">
          <a style={{ display:'flex', gap:'5px'}}>
            <img src={user.user_img} alt={`${user.name}_img`}/>
            <div className="follow_people_name" style={{ display: 'flex', flexDirection:'column'}}>
              <span style={{ lineHeight:'14px'}}>
                @
                {user.username}
                .
                </span>
              <h4>{user.name}</h4>
            </div>
          </a>
          <button className='community_join'>
            <AiOutlinePlus color={'#f45046'}/> 
            Follow
          </button>
        </li>

      ))}
      </section>
  )
}

export default FollowCard