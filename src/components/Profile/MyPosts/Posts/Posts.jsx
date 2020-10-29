import React from 'react';
import cssPs from './Posts.module.css';

const Post = (props) => {
  return (
    <div className={cssPs.item}>
      <img src={props.postava}></img>
        POST: {props.posttxt}
      <div>
        <span> Like  {props.likecount} </span>
        <span> Dislike  </span>
      </div>
    </div>
  );
}

export default Post;