import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function AppAzureRoles(){


    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/*<Route path="expenses" element={<Expenses />} />*/}
                    {/*<Route path="invoices" element={<Invoices />} />*/}
                </Routes>
            </BrowserRouter>
        </div>
        // <div className="App">
        //     <h1>AppAzureRoles</h1>
        // </div>
    );
}