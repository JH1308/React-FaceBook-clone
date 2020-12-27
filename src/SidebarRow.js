import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';
                                            
function SidebarRow({ src, Icon, title }) {  /* Icon imported are classed as components so have to start with caps*/ 
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}{/* Only rendering the avatar & icon if the src is provided*/}
            {Icon && <Icon />}


            <h4>{title}</h4>
        </div>
    );
}

export default SidebarRow;
