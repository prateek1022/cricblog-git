import React from 'react'
import history from '../history';
import  './w3.css'
var dateFormat = require("dateformat");

export default function SinglePost(props) {
  
const singlepost = (props) => {
  const posts=props.posts;
  if(posts.length>0){
    return(
      posts.map((post,index)=>{
        return (
          <div key={post._id}>
          <input type="hidden"  value={post._id}></input>
  
              <div className="w3-card-4 w3-margin w3-white">
            <img src="./woods.jpg" alt="Nature" style={{width:"100%"}}/> 
            <div className="w3-container">
              <h3><b>{post.title}</b></h3>
              <h5>{post.desc}, <span className="w3-opacity">{
                dateFormat(post.created,'mmmm dd, yyyy')
              }</span></h5>
            </div>
            <div className="w3-container">
              <p>{post.post_text}</p>
              <div className="w3-row">
                <div className="w3-col m8 s12">
                  <p><button className="w3-button w3-padding-large w3-white w3-border"
                  onClick={() => history.push({
                    pathname:'/posts',
                    search: `q=${post._id}`,
                    state:{id:post._id}
                  })}
                   ><b>READ MORE »</b></button></p>
                </div>
                <div className="w3-col m4 w3-hide-small">
                  <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span className="w3-tag">0</span></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
      )
      })
    )
  }
  else{
    return(
      <>
        <h3>no posts</h3>
      </>
    )
  }
}

return(
  <>
    {singlepost(props)}
  </>
)
 
}
