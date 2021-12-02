import React from 'react';
import './directory-menu.style.scss';
import MenuItem from '../menu-items/menu-items.component';
import sections from './directory.data';

class DirectoryMenu extends React.Component{
    constructor(){
        super()
        this.state = {
            sections:sections
        }
    }


    render(){
        const {sections} = this.state;
        return(
            <div className = 'directory-menu'>
                {
                sections.map(({title,imageUrl,size,id})=>{
                    return <MenuItem key = {id} imageUrl = {imageUrl} size = {size} title= {title} />
                })
                }
            </div>
          
            
        )
    }
}

export default DirectoryMenu;