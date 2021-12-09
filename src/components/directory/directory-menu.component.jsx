import React from 'react';
import MenuItem from '../menu-items/menu-items.component';
import './directory-menu.style.scss';
import SECTIONS_DATA from './directory.data';

class DirectoryMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            sections : SECTIONS_DATA
        }
    }

    render(){
    const {sections} = this.state;

        return(
            <div className = 'directory-menu'>
                {
                    sections.map(({id,...otherProps})=>{
                       return  <MenuItem key = {id} {...otherProps} />
                    })
                }
            </div>
        )
    }
}


export default DirectoryMenu;