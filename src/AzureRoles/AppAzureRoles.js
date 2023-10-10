import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import NoMatch from "./NoMatch";

export default function AppAzureRoles(){


    return (
        <div>
            <h1>Custom Link Example</h1>

            <p>
                This example demonstrates how to create a custom{" "}
                <code>&lt;Link&gt;</code> component that knows whether or not it is
                "active" using the low-level <code>useResolvedPath()</code> and{" "}
                <code>useMatch()</code> hooks.
            </p>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}