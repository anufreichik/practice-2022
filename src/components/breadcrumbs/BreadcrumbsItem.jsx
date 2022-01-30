import React from 'react';
import {
    NavLink,
    Outlet,
    useLocation,
    useResolvedPath
} from 'react-router-dom'
import {Breadcrumbs, Typography} from "@mui/material";

const BreadcrumbsItem = ({children, to, ...props}) => {
    const {text} = props;
    const location = useLocation();
    const resolved = useResolvedPath(to);
   // let isActive = useMatch({path: resolved.pathname, end: true});
    const isActive = location.pathname===resolved.pathname;
    console.log(resolved.pathname, '-resolved', location.pathname, '-location',
        isActive, '-isActive')
    return (
        <Breadcrumbs  aria-label="breadcrumb">
            {isActive ? (
                <Typography color="text.primary">
                    {text}
                </Typography>
            ) : (

                    <NavLink to={resolved.pathname}>
                        {text}
                    </NavLink>

            )}
            <Outlet/>
        </Breadcrumbs>
    );
}

export default BreadcrumbsItem;
