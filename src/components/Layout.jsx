import React from 'react';
import {breadcrumbs} from "./breadcrumbs/Breadcrumbs";
import {useRoutes} from "react-router-dom";

const Layout=({children})=> {
    const breadcrumbsElements = useRoutes(breadcrumbs);
    return (
        <div>
            <div style={{marginBottom:'1em'}}>{breadcrumbsElements}</div>
            <hr/>
            {children}
        </div>
    );
}

export default Layout;
