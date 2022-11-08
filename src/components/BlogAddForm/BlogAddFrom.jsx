import { useState } from "react";
import './BlogAddForm.css'
import defaultImage from '../../images/default-image.png'

function BlogAddForm({active, setActive, addBlog}){
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setdescriptionInput] = useState('');
    const [imageInput, setImageInput] = useState('');
    const currentDate = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const dateInput = `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]}, ${currentDate.getFullYear()}`
    
    const handleTitleChange = (e) => {
        setTitleInput(e.currentTarget.value)
    }

    const handleDescriptionChange = (e) => {
        setdescriptionInput(e.currentTarget.value)

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addBlog(titleInput, descriptionInput, dateInput, defaultImage)
        setUserInput();
        setActive(false);
    }

    const setUserInput = () => {
        setTitleInput("");
        setdescriptionInput("");
        setImageInput(defaultImage);
    }

    const handleCalcel = ()=>{
        setUserInput();
        setActive(false)
    }

    return (
        <div className={active ? "addBlogModal active" : "addBlogModal"} onClick={()=>setActive(false)}>
            <form className="addBlogModal-content" 
                onClick={e => e.stopPropagation()}
                onSubmit={handleSubmit}>
                    <img className="addblog-item-image" src={defaultImage} />
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
                            <input className="button-cancel" type="button" value="Cancel" onClick={handleCalcel}/>
                            <input className="button-save" type="submit" value="Save"/>
                        </div>
                    </div>        
            </form>
        </div>
    )
}

export default BlogAddForm