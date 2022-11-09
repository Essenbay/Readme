import './UserProfile.css'
import React, {useState} from 'react'


import defaultProfile from '../../images/icons/default-profile.svg'
import defaultBackgound from '../../images/default-image.png'
import locationIcon from '../../images/icons/location.png'
import editIcon from '../../images/icons/edit.svg'
import submitIcon from '../../images/icons/submit.svg'
import cancelIcon from '../../images/icons/cancel.svg'
import addIcon from '../../images/icons/add.svg'

function UserProfile(){
    const [changeMode, setChangeMode] = useState(false);
    const [nameInput, setNameInput] = useState('Name Surname');
    const [descriptionInput, setdescriptionInput] = useState('Description');
    const [profileImage, setProfileImage] = useState(defaultProfile);
    const [backgroundImage, setBackgroundImage] = useState(defaultBackgound)
    const [locationInput, setLocation] = useState('Town, Country');

    const userAvatar = defaultProfile;
    const userName = "Rayna Franci";
    const userLocation = "Bern, Switzerland"
    const userDescription = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus vero impedit architecto expedita accusamus neque quis suscipit facere recusandae deleniti obcaecati, minus quaerat hic laboriosam. Corrupti facere itaque sed mollitia id laboriosam ex eligendi delectus adipisci aperiam quibusdam, impedit, quae fuga dicta asperiores laborum. Esse temporibus quaerat reiciendis eaque."
    const userBackgound = defaultBackgound;
    
    const handleNameChange = (e) => {
        setNameInput(e.currentTarget.value)
    }

    const handleDescriptionChange = (e) => {
        setdescriptionInput(e.currentTarget.value)
    }

    const handleProfileImageUpload = (e) =>{
        console.log(e.target.files);
        setProfileImage(URL.createObjectURL(e.target.files[0]));
    }

    const handleBackgoundUpload = (e) =>{
        console.log(e.target.files);
        setBackgroundImage(URL.createObjectURL(e.target.files[0]));
    }
    const handleLocationChange = (e) =>{
        setLocation(e.currentTarget.value)
    }

    const goChangeMode = () => {

    }

    const handleProfileChange = () => {

    }

    const handleSubmit = () => {

    }

    const handleCancelChange = () => {

    }


    return (
        <form className='profile-container' onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
            <label className="profile-backgound" htmlFor="uploadBackgound">
                <input  type="file" id="uploadBackgound" onChange={handleBackgoundUpload}/>
                <div className="uploadBackgound-preview">
                    <img src={backgroundImage} alt="not found" />
                </div>
                <img className="uploadBackgound-icon" src={addIcon} alt="Add" hidden={changeMode}/>
            </label>

            <div className="profile-bottom">
                <div className="profile-left">
                    <label className="profile-image" htmlFor="profile-image">
                        <input type="file" id='profile-image' onChange={handleProfileChange}/>
                        <div className="profile-image-preview">
                            <img src={profileImage} alt="not found" />
                        </div>
                        <img className="profile-image-icon" src={addIcon} alt="Add" hidden={changeMode}/>
                    </label>
                    <label className='profile-name'>
                        <input className='input-profile-name'
                        type="text" 
                        value={nameInput}
                        onChange={handleNameChange}
                        placeholder="Name Surname"/>
                    </label>
                </div>

                <div className="profile-right">
                    <div className="profile-right-head">
                        <label className="profile-location">
                            <img src={locationIcon} alt="Loc" />
                            <input className='input-location'
                                type="text"
                                value={locationInput}
                                onChange={handleLocationChange}
                                placeholder="Location" />
                        </label>
                        <div className="button-group">
                            <div className="profile-cancel" onClick={handleCancelChange} hidden={changeMode}>
                                <img src={cancelIcon} />
                            </div>
                            <div className="profile-submit" onClick={handleProfileChange} hidden={changeMode}>
                                <img src={submitIcon} />
                            </div>
                            <div className="profile-change" onClick={()=>setChangeMode(true)} hidden={!changeMode}>
                                <img src={editIcon} />
                            </div>
                        </div>
                    </div>

                    <label className="profile-right-profileDescription">
                        <input 
                            className='input-profileDescription'
                            type="text" 
                            value={descriptionInput}
                            onChange={handleDescriptionChange}
                            placeholder="Description"/>
                    </label>
                </div>
            </div>
        </form>
        
    )
}
export default UserProfile;