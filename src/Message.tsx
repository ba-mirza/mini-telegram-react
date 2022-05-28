import React from "react";
import {MessageType} from "./interface";

export function Message(props: MessageType): JSX.Element {
    return (
        <div className="main">
            <div className="message-template">
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "300px"}}>
                    <div className="message-avatar">
                        <img src={props.avatar} alt={props.name}/>
                    </div>
                    <h2>{props.name}</h2>
                </div>
                <div>
                    <span>{props.message}</span>
                </div>
                <div>
                    {props.time}
                </div>
            </div>
        </div>
    )
}