import React from "react";
import "./Guest.css"

function Guest({guest}) {
return (
    <div>
        <p className="guest__name">{`-${guest}`}</p>
    </div>
)
}

export default Guest