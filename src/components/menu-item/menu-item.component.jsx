import React from 'react';
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`) }>
        <div className='background-image' 
             style ={{
                backgroundImage: `url(${imageUrl})`
             }}/>
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>

)

// adding withRouter adds stuff to the component like history so that history tunneling is avoided
export default withRouter(MenuItem);