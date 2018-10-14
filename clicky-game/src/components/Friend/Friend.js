import React from "react";
import "./Friend.css"

const Friend = props => (
        <div className="img-container" id={props.id} >
            <img class ="click-item" alt={props.name} src={props.img} />
        </div>
)


export default Friend;