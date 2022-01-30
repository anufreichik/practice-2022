import React from 'react';
import {useParams, Outlet} from "react-router-dom";


const InvoiceDetails=()=> {
    let params = useParams();
    return (
        <div>
            Details for Invoice {params.id}
        </div>
    );
}

export default InvoiceDetails;
