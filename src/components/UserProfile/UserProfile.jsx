import './UserProfile.css'
import React from 'react'

import profileAvatar from '../../images/person1.png'
import locationSign from '../../images/icons/location.png'
import editSing from '../../images/icons/edit.png'
import profileBackgound from '../../images/cover.png'

function UserProfile(){
    const userAvatar = profileAvatar;
    const userName = "Rayna Franci";
    const userLocation = "Bern, Switzerland"
    const userDescription = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus vero impedit architecto expedita accusamus neque quis suscipit facere recusandae deleniti obcaecati, minus quaerat hic laboriosam. Corrupti facere itaque sed mollitia id laboriosam ex eligendi delectus adipisci aperiam quibusdam, impedit, quae fuga dicta asperiores laborum. Esse temporibus quaerat reiciendis eaque."
    const userBackgound = profileBackgound;
    
    return (
        <section className="profile-container ">
            <div className='profile-backgound'>
                <img src={userBackgound} alt="Backgound" srcset="" />
            </div>
            <div class="profile-bottom">
                <div class="profile-image">
                    <img src={userAvatar}/>
                    <h4 class="profile-name">
                        {userName}
                    </h4>
                </div>
                <div class="profile-info">
                    <div class="profile-info-details">
                        <div class="location">
                            <img src={locationSign}/>
                            <p>{userLocation}</p>
                        </div>
                        <img src={editSing}/>
                    </div>
                    <div class="profile-info-description">
                       {userDescription}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default UserProfile;