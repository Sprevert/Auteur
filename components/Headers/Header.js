import React from "react";

function Header(props) {
    return (
        <>
            <div
                className={"header pb-8 pt-1 pt-lg-2 d-flex align-items-center " + props.className}                
            >
                {props.children}
            </div>
        </>
    );
}

export default Header;
