import { useState, Fragment, useReducer } from 'react';
import '../styles/community_content.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import { communities } from '../constants';

const CommunityPosts = ({posts}) =>{
  
  const initialState = posts.map(() => true);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_TRUNCATE':
        return state.map((truncated, index) =>
          index === action.index ? !truncated : truncated
        );
      default:
        throw new Error();
    }
  }

  const [isTruncated, dispatch] = useReducer(reducer, initialState);


  return(
    <>
    { Array.isArray(posts) && posts.map((post,index)=>(
      <div className='posts'>
         <li>
             <a style={{ display:'flex', gap:'5px'}}>
               <img src={post.author.user_img}/>
               <div style={{ display: 'flex', flexDirection:'column'}}>
                 <h3>{post.author.username}</h3>
                 <h4>{post.author.name}</h4>
               </div>
             </a>
             <button className='community_join'>
               <AiOutlinePlus color={'#f45046'}/> 
               Follow
             </button>
           </li>

           <div className='post_content'>
              <p className={`description ${isTruncated[index] ? 'truncated' : ''}`}>
                {post.description.split('\n').map((line, index) => (
                  <Fragment key={index}>
                    {line}
                    <br />
                  </Fragment>
                ))}
              </p>
              <a style={{ marginTop:'10px'}} onClick={()=>dispatch({type: 'TOGGLE_TRUNCATE', index: index})}>
                {isTruncated[index] ? 'Read more' : 'Read less'}</a>
              <div className='img_holder'>
                 <img src={post.img} width='100%' height={'100%'}/> 
              </div> 
           </div>
           <div className='engagement'>
            Like
           </div>

      </div>
    ))}
    </>
  )
}

const CommunityAnnouncements = () =>{
  return(
    <div>

    </div>
  )
}

const CommunityContent = () => {

  const [showPosts, setShowPosts] = useState(true);

  const community = communities[0];
  const {posts} = community;
  console.log(posts);
  return (
    <article className='community_content'>
      <div className='community_topbar'>
        <header className='community_header'>
          <div className='header_display'>
            <img src={community.logo} alt={community.name}/>
            <div className='header_details'>
              <h2>{community.name}</h2>
              <h3>{community.members} Members</h3>
            </div>
          </div>
          <div className='header_display' style={{gap:'10px'}}>
            <button className='community_join'>
              <AiOutlinePlus color={'#f45046'}/> 
              Join
            </button>
            <button style={{display:'flex', alignItems:'center'}}>
              <BiDotsVerticalRounded/>
            </button>
          </div>
        </header>
        <div className='content_type'>
            <a onClick={()=>setShowPosts(true)} style={{ color:`${showPosts ? '#f45046' : 'black'}`}}>
              Posts</a>
            <a onClick={()=>setShowPosts(false)} style={{ color:`${showPosts ? 'black' : '#f45046'}`}}>
              Announcements</a>
        </div>

        <section className='community_joinbtn'>
          <div></div>
          <button>Join {community.name}</button>
        </section>
      </div>
      <article className='community_posts'>
        {showPosts ?
        <CommunityPosts posts={posts}/>
        :
        <CommunityAnnouncements announcemens={community.posts}/>
        }
      </article>
    </article>
  )
}

export default CommunityContent