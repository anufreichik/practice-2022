import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Expenses from "./components/Expenses";
import Invoices from "./components/Invoices";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Tree from "./components/Tree";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="expenses/*" element={<Expenses/>}/>
                <Route path="invoices/*" element={<Invoices/>}/>
                <Route path="tree/*" element={<Tree/>}/>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>

        </Layout>
    );
}

export default App;
