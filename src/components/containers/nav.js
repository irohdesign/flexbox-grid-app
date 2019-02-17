import React from "react";
import {Link} from "react-router-dom";

function nav() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Intro
                    </Link>
                </li>
                <li>
                    <Link to="/grid">
                        Grid
                    </Link>
                </li>
                <li>
                    <Link to="/flex">
                        Flexbox
                    </Link>
                </li>
                <li>
                    <Link to="/fused">
                        Fused
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default nav;