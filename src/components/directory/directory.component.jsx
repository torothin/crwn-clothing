import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';


const Directory = ({ sections }) => (
        
  <div className='directory-menu'>
      {
          // verbose way of sending in all the sections
          // this.state.sections.map(({ id, title, imageUrl, size, linkUrl }) => (
          //     <MenuItem key={id} 
          //               title={title} 
          //               imageUrl={imageUrl} 
          //               size={size} 
          //               linkURL={linkUrl} />
          // ))

          // cleaner way of sending props that match the map key names
          sections.map(({ id, ...otherSectionProps }) => (
              <MenuItem key={id} {...otherSectionProps} />
          ))
      }
      
  </div>
)

const mapStateToProps = createStructuredSelector({ 
  sections: selectDirectorySections
 });

export default connect(mapStateToProps)(Directory);