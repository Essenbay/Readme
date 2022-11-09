import { useState } from "react";
import './BlogAddForm.css'
import defaultImage from '../../images/default-image.png'
import addIcon from '../../images/icons/add.svg'

function BlogAddForm({active, setActive, addBlog}){
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setdescriptionInput] = useState('');
    const [imageInput, setImageInput] = useState(defaultImage);
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
        console.log(e.target.files);
        setImageInput(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addBlog(titleInput, descriptionInput, dateInput, imageInput)
        setUserInput();
        setActive(false);
    }

    const setUserInput = () => {
        setTitleInput("");
        setdescriptionInput("");
        setImageInput(defaultImage);
    }

    const handleCancel = ()=>{
        setUserInput();
        setActive(false)
    }

    return (
        <div className={active ? "addBlogModal active" : "addBlogModal"} onClick={()=>setActive(false)}>
            <form className="addBlogModal-content" 
                onClick={e => e.stopPropagation()}
                onSubmit={handleSubmit}>
                        <label className="addblog-item-image" htmlFor="uploadBlogImage">
                            <input  type="file" id="uploadBlogImage" onChange={handleImageUpload}/>
                            <div className="addblog-item-image-preview">
                                <img src={imageInput} alt="not found" />
                            </div>
                            <img className="addblog-item-image-icon" src={addIcon} alt="Add" />
                        </label>
                    <div className="addblog-info">
                        <div className="addblog-info-text">
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
                        <div className="addButton-group">
                            <input className="button-cancel" type="button" value="Cancel" onClick={handleCancel}/>
                            <input className="button-save" type="submit" value="Save"/>
                        </div>
                    </div>        
            </form>
        </div>
    )
}

export default BlogAddForm