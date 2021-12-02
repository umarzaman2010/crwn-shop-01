import React from 'react'
import './homepage.style.scss'
import DirectoryMenu from '../../component/directory/directory-menu.component';

const HomePage = ()=>{
    return (
        <div className = 'homepage'>
           <DirectoryMenu />
        </div>
    )
}

export default HomePage; 