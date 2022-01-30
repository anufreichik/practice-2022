import React from 'react';
import BreadcrumbsItem from "./BreadcrumbsItem";

const HomeBreadCrumb=({text})=> {

    return <BreadcrumbsItem text={text} to={'/'} />
}


export function createRoutes() {
    return [
        {
            path: '/',
            element: <HomeBreadCrumb text="Home"/>,
            children: [
                {
                    path: '/invoices',
                    element: <BreadcrumbsItem text="Invoices" to={'/invoices'}/>,
                    children: [
                        {
                            path: 'details/:id',
                            element:<BreadcrumbsItem text="Invoice Details" to={''} /> ,
                        },
                    ]
                },
                {
                    path: '/expenses',
                    element: <BreadcrumbsItem text="Expenses" to={'/expenses'}/>,
                    children: [
                        {
                            path: 'details/:id',
                            element:<BreadcrumbsItem text="Invoice Details" to={''} /> ,
                        },
                    ]
                },
            ]
        }
    ]
}

export const breadcrumbs = createRoutes();
