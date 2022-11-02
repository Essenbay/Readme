import React from 'react'
import './Blogs.css'
import searchIcon from '../../images/icons/search.png'
import editIcon from '../../images/icons/edit.png'
import photo1 from '../../images/photo1.png'
import photo2 from '../../images/photo2.png'
import BlogItem from '../BlogItem/BlogItem'


function Blogs(){
    const title = "Lorem ipsum dolor";
    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nam doloremque praesentium ducimus quis molestiae dolores quibusdam quod eum. Sapiente error tempore quos illum tempora magnam, consequuntur laborum accusantium commodi!"
    const date = "10 Dec, 2021"
    return(
        <div className="blogs-section">
            <form action="#" class="search">
                <input type="text" id="search" name="search" placeholder="Search" />
                <button type="submit">
                    <img src={searchIcon} />
                </button>
                </form>
     
                    <BlogItem title = {title} photoSource ={photo1} description={description} date={date}/>
                    <BlogItem title = {title} photoSource ={photo2} description={description} date={date}/>

                    <div class="add-blog-container">
                        <a href="#">Add Blog</a>
                    </div>
        </div>
    )
}

export default Blogs