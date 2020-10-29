import React from 'react';
import cssPs from './MyPosts.module.css';
import Post from './Posts/Posts.jsx';


const MyPosts = () => {
    return ( 
        <div  >
          MY POSTS
          <div>
            <textarea></textarea>
            <button>Add new post</button>
          </div>
          <div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
    );
}

export default MyPosts;