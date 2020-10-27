import React from 'react';
import './Profile.css';


const Profile = () => {
    return ( 
      <div className = 'main-content-grid'>
        <div>
          Main content
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZadRfF_T-e-7C4nufNJ8T514HyWO5WDG7Ig&usqp=CAU'></img>
            
        </div>
        <div>
          AVA + DESCRIPTION
        </div>
        <div  className = 'posts'>
          MY POSTS
          <div>
            NEW POSTS
          </div>
          <div>
            <div className = 'item'>
              post 1
            </div>
            <div className = 'item'>
              post 2
            </div>
            <div className = 'item'>
              post 3
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;