import CustomLink from "./CustomLink";
import {Outlet} from "react-router-dom";

export default function Layout(){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <CustomLink to="/">Home</CustomLink>
                    </li>
                    <li>
                        <CustomLink to="/about">About</CustomLink>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}