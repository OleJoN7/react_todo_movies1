import React from "react";

function Button(props) {
    return (
            <button style={{float:"right"}} type={props.type} {...props}>{props.children}</button>
    )
}
export default Button;