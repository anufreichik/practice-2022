import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import ExpenseDetails from "./expense_details/ExpenseDetails";

const Expenses=() =>{
    return (
        <div>
            Expenses
            <div>
                <Link to="details/1">Medical</Link> |{" "}
                <Link to="details/2">Dental</Link>
            </div>
            <Routes>
                <Route path="details/:id" element={<ExpenseDetails/>}/>
            </Routes>
        </div>
    );
}

export default Expenses;
