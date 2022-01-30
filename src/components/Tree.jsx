import React from 'react';
import Folder from "./Folder";
import explorer from "../data/folderData";

const Tree=(props)=> {
    return (
        <Folder explorer={explorer}/>
    );
}

export default Tree;
