import React from "react";
import "./Friend.css"

const Friend = props => (
        <div className="img-container" picked={props.picked}>
            <img className ="click-item" id={props.id} alt={props.name} src={props.img} onClick={()=> props.handleClick(props.id)} />
        </div>
)


export default Friend;