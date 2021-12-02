import React from 'react';
import './directory.style.scss';
import sections from './directory.data';

import MenuItem from '../menu-item/menu-item.component';

class DirectoryMenu extends React.Component{
    
    constructor(){
        super();
        this.state = {
            sections : sections 
        }
    }
    
    render(){
        const {sections} = this.state;

        return(
    <div className='directory-menu'>
        {
            sections.map(({title,imageUrl,id,size})=>{
                return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            })
        }
        
    </div>
)
        }
}


export default DirectoryMenu;