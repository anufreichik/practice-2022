import React from 'react';
import {Link} from "react-router-dom";
import Folder from "./Folder";
import explorer from "../data/folderData";

function Home(props) {
    return (
        <div>Home

            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
            </nav>

        </div>
    );
}

export default Home;
