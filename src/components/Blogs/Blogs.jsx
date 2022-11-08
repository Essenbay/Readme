import React, { useState }  from 'react'
import './Blogs.css'
import searchIcon from '../../images/icons/search.png'
import editIcon from '../../images/icons/edit.png'
import photo1 from '../../images/photo1.png'
import photo2 from '../../images/photo2.png'
import BlogItem from '../BlogItem/BlogItem'
import BlogAddForm from '../BlogAddForm/BlogAddFrom'
import BlogChangeForm from '../BlogChangeForm/BlogChangeFrom'


function Blogs(){
    const title = "Lorem ipsum dolor";
    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nam doloremque praesentium ducimus quis molestiae dolores quibusdam quod eum. Sapiente error tempore quos illum tempora magnam, consequuntur laborum accusantium commodi!"
    const date = "10 Dec, 2021"

    const [addBlogActive, setAddBlogActive] = useState(false);
    const [blogs, setBlogs] = useState([])

    const addBlog = (title, description, date, photo) => {
        if(title && description && date && photo){
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                title: title,
                description: description,
                date: date,
                photo: photo
            }
            setBlogs([...blogs, newItem])
        }
    }

    const removeBlog = (id) => {
        console.log(`Deleted item: ${id}`);
        setBlogs([...blogs.filter((blog) => blog.id !== id)]);
    }

    return(
        <div className="blogs-section">
            <form action="#" className="search">
                <input type="text" id="search" name="search" placeholder="Search" />
                <button type="submit">
                    <img src={searchIcon} />
                </button>
            </form>
            {blogs.map((blog) =>{
                return (
                    <BlogItem 
                        key={blogs.id}
                        blog={blog}
                        removeBlog={removeBlog}
                    />
                )
            })}

            
             <div className="add-blog-container" onClick={() => {setAddBlogActive(true)}}>
                <button>Add Blog</button>
            </div>
            <BlogAddForm active={addBlogActive} setActive={setAddBlogActive} addBlog={addBlog} />
        </div>
    )
}

export default Blogs