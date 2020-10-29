import React from 'react';
import cssPr from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';


const Profile = () => {
    return ( 
      <div className = {cssPr.mainContentGrid}>
        <div>
          Main content
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZadRfF_T-e-7C4nufNJ8T514HyWO5WDG7Ig&usqp=CAU'></img>
            
        </div>
        <div>
          AVA + DESCRIPTION
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;