import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

export default function CompletePost() {

  const [post_obj, setpost_obj] = useState('');
  const [PostErr, setPostErr] = useState('');
  const location = useLocation();
  var id = location.search;
  id = id.substring(3);
  const url = '//ec2-13-233-45-16.ap-south-1.compute.amazonaws.com:4000/';

  useEffect(() => {
    getPost(id);

  }, []);

  const getPost = (id) => {

    var payload = {
      id: id
    }

    axios.post(`${url}posts/getposts`, payload)
      .then((response) => {
        setpost_obj(response.data.post)
        setPostErr(response.data)
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  const showPost = () => {
    console.log(PostErr.status);
    if (PostErr.code === 200) {
      return (
        <div>
          <h1>{post_obj.title}</h1>
          <h2>{post_obj.post_text}</h2>
        </div>
      )
    }

    else {
      return (
        <div>
          <h1>NO POSTS</h1>
        </div>
      )
    }

  }

  //console.log(location.pathname);  // result: '/secondpage'
  //console.log(location.search);    // result: '?query=abc'
  // console.log(location.state.id); // result: 'some_value'
  return (
    <div>

      {showPost()}
    </div>
  )
}
