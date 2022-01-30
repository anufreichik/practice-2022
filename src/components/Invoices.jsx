import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {getInvoices} from "../data/invoices";
import InvoiceDetails from "./invoice_details/InvoiceDetails";


const Invoices=()=> {
    let invoices = getInvoices();
    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 2px blue",
                    padding: "1rem"
                }}
            >
                {invoices.map(invoice => (
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`details/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </Link>
                ))}
            </nav>
            <Routes>
                <Route path="details/:id" element={<InvoiceDetails/>}/>
            </Routes>
        </div>

    );
}

export default Invoices;
