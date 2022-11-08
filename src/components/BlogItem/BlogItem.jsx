import './BlogItem.css'
import React from 'react'
import editIcon from '../../images/icons/edit.png'


function BlogItem({id, title, description, date, photoSource}){
    return(
        <div class="blog-item" key={id}>
                <img src={photoSource} className="blog-item-image"/>
                <div class="blog-info">
                    <div className='blog-info-text'>
                        <div class="blog-info-details">
                            <h4>{title}</h4>
                            <div class="blog-edit">
                                <img src={editIcon} />
                            </div>
                        </div>
                        <div class="blog-info-description">
                            <p>{description}</p>
                        </div>
                    </div>
                    
                    <div class="blog-date">
                        <p>{date}</p>
                    </div>
                </div>          
            
        </div>
    )
}
export default BlogItem;