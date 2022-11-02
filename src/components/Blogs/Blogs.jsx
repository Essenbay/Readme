import React from 'react'
import './Blogs.css'
import searchIcon from '../../images/icons/search.png'
import editIcon from '../../images/icons/edit.png'
import photo1 from '../../images/photo1.png'
import photo2 from '../../images/photo2.png'

function Blogs(){
    return(
        <div className="blogs-section">
            <form action="#" class="search">
                <input type="text" id="search" name="search" placeholder="Search" />
                <button type="submit">
                    <img src={searchIcon} />
                </button>
                </form>
                    <div class="blog-item">
                        <div class="blog-item-image">
                            <img src={photo1} />
                        </div>
                        <div class="blog-info">
                            <div class="blog-info-details">
                                <h4>Lorem ipsum dolor</h4>
                                <div class="blog-edit">
                                    <img src={editIcon} />
                                </div>
                            </div>
                            <div class="blog-info-description">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nam doloremque praesentium ducimus quis molestiae dolores quibusdam quod eum. Sapiente error tempore quos illum tempora magnam, consequuntur laborum accusantium commodi!</p>
                            </div>
                            <div class="date">
                                <p>10 Dec, 2021</p>
                            </div>
                        </div>
                    </div>

                    <div class="blog-item">
                        <div class="blog-item-image">
                            <img src={photo2}/>
                        </div>
                        <div class="blog-info">
                            <div class="blog-info-details">
                                <div class="title">
                                    <h4>Lorem ipsum dolor</h4>
                                </div>
                                <div class="blog-edit">
                                    <img src={editIcon} />
                                </div>
                            </div>
                            <div class="blog-info-description">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nam doloremque praesentium ducimus
                                    quis molestiae dolores quibusdam quod eum. Sapiente error tempore quos illum tempora magnam,
                                    consequuntur laborum accusantium commodi!</p>
                            </div>
                            <div class="date">
                                <p>10 Dec, 2021</p>
                            </div>
                        </div>
                    </div>
                    <div class="add-blog-container">
                        <a href="#">Add Blog</a>
                    </div>     
        </div>
    )
}

export default Blogs