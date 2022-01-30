import React, {useState} from 'react';

function Folder({explorer}) {
    const [expand, setExpand]=useState(false);
    return (
        <div>
        <div onClick={() => setExpand(!expand)}>
            {explorer.name}
            <br/>
        </div>
            {explorer.isFolder && (
                <div style={{display:expand?"block":"none", paddingLeft:"10px"}}>
                {
                    explorer.items.map(item => {
                        return (<Folder key={item.name} explorer={item}/> )
                    })
                }
            </div>)}
    </div>

    );
}

export default Folder;
