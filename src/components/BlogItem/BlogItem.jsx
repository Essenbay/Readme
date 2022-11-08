import './BlogItem.css'
import React from 'react'
import deleteIcon from '../../images/icons/delete.svg'

function BlogItem({blog, removeBlog}){
    return(
        <div className="blog-item" key={blog.id}>
            <div className="blog-image-container">
                <img src={blog.photo}/>
            </div>
                <div className="blog-info">
                    <div className='blog-info-text'>
                        <div class="blog-info-details">
                            <h4>{blog.title}</h4>
                            <div className="blog-delete" onClick={()=> removeBlog(blog.id)}>
                                <img src={deleteIcon} />
                            </div>
                        </div>
                        <div className="blog-info-description">
                            <p>{blog.description}</p>
                        </div>
                    </div>
                    
                    <div className="blog-date">
                        <p>{blog.date}</p>
                    </div>
                </div>          
            
        </div>
    )
}
export default BlogItem;