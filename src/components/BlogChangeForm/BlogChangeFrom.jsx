import { useState } from "react";
import './BlogChangeForm.css'
import addIcon from '../../images/icons/add.svg'

function BlogChangeForm({active, setActive, changeBlog, title, description, image}){
    const [titleInput, setTitleInput] = useState(title);
    const [descriptionInput, setdescriptionInput] = useState(description);
    const [imageInput, setImageInput] = useState(image);
    const currentDate = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const dateInput = `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]}, ${currentDate.getFullYear()}`
    
    const handleTitleChange = (e) => {
        setTitleInput(e.currentTarget.value)
    }

    const handleDescriptionChange = (e) => {
        setdescriptionInput(e.currentTarget.value)
    }

    const handleImageUpload = (e) =>{
        setImageInput(e.target.files[0]);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        changeBlog(titleInput, descriptionInput, dateInput, imageInput)
        setUserInput();
        setActive(false);
    }

    const setUserInput = () => {
        setTitleInput(title);
        setdescriptionInput(description);
        setImageInput(image);
    }

    const handleCancel = ()=>{
        setUserInput();
        setActive(false)
    }

    return (
        <div className={active ? "changeBlogModal active" : "changeBlogModal"} onClick={()=>setActive(false)}>
            <form className="changeBlogModal-content" 
                onClick={e => e.stopPropagation()}
                onSubmit={handleSubmit}>
                        <label className="changeblog-item-image" htmlFor="uploadBlogImage">
                            <input  type="file" id="uploadBlogImage" onChange={handleImageUpload}/>
                            <div className="changeblog-item-image-preview">
                                <img src={imageInput} alt="Image" />
                            </div>
                            <img className="changeblog-item-image-icon" src={addIcon} alt="change" />
                        </label>
                    <div className="changeblog-info">
                        <div className="changeblog-info-text">
                            <input 
                                className="input-title"
                                type="text" 
                                value={titleInput}
                                onChange={handleTitleChange}
                                placeholder="Title"/>
                            <textarea 
                                className="input-description"
                                type="text" 
                                value={descriptionInput}
                                onChange={handleDescriptionChange}
                                placeholder="Description"
                                maxLength={700}/>
                        </div>
                        <div className="changeButton-group">
                            <input className="button-cancel" type="button" value="Cancel" onClick={handleCancel}/>
                            <input className="button-save" type="submit" value="Save"/>
                        </div>
                    </div>        
            </form>
        </div>
    )
}
export default BlogChangeForm