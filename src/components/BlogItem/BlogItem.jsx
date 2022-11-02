import './BlogItem.css'
import React from 'react'
import editIcon from '../../images/icons/edit.png'

function BlogItem(props){
    return(
        <div class="blog-item">
              <div class="blog-item-image">
                    <img src={props.photoSource} />
                </div>
                <div class="blog-info">
                    <div class="blog-info-details">
                        <h4>{props.title}</h4>
                        <div class="blog-edit">
                            <img src={editIcon} />
                        </div>
                    </div>
                    <div class="blog-info-description">
                        <p>{props.description}</p>
                    </div>
                    <div class="date">
                        <p>{props.date}</p>
                    </div>
                </div>          
        </div>
    )
}
export default BlogItem;