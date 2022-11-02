import './UserProfile.css'
import React from 'react'

import profileAvatar from '../../images/person1.png'
import locationSign from '../../images/icons/location.png'
import editSing from '../../images/icons/edit.png'

function UserProfile(){
    return (
        <section className="profile-container ">
            <div class="profile-bottom">
                <div class="profile-image">
                    <img src={profileAvatar}/>
                    <h4 class="profile-name">
                        Rayna Franci
                    </h4>
                </div>
                <div class="profile-info">
                    <div class="profile-info-details">
                        <div class="location">
                            <img src={locationSign}/>
                            <p>Bern, Switzerland</p>
                        </div>
                        <img src={editSing}/>
                    </div>
                    <div class="profile-info-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus vero impedit architecto expedita accusamus neque quis suscipit facere recusandae deleniti obcaecati, minus quaerat hic laboriosam. Corrupti facere itaque sed mollitia id laboriosam ex eligendi delectus adipisci aperiam quibusdam, impedit, quae fuga dicta asperiores laborum. Esse temporibus quaerat reiciendis eaque.
                    </div>
                </div>
            </div>
        </section>
    )
}
export default UserProfile;