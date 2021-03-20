import React from 'react'
import './w3.css'
import SinglePost from './SinglePost'
import AboutMe from './AboutMe'
import PopularPosts from './PopularPosts'
import Tags from './Tags'
import Footer from './Footer'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HomePage() {

  var [posts, setposts] = useState('');

  const url = '//ec2-13-233-45-16.ap-south-1.compute.amazonaws.com:4000/';

  useEffect(() => {
    getAllPosts();

  }, []);

  const getAllPosts = () => {
    axios.get(`${url}posts`, {
      headers: {
        'Content-Type': null
      }
    })
      .then((response) => {
        //console.log(response);
        const allposts = response.data.posts_array;
        setposts(allposts);
        
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  return (
    <div>

      <div className="w3-row">

        <div className="w3-col l8 s12">
        
        
          <SinglePost posts={posts} />

        </div>

        <div className="w3-col l4">

          <AboutMe />

          <PopularPosts />
          <hr></hr>

          <Tags />

        </div>

      </div>
      <Footer />
    </div>
  )
}
