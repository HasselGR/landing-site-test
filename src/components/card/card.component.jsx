import React from "react";
import './card.styles.scss'


export const Card = (props) => (
    <div className="card-container">
        <img className="monster-image" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
        <h2>{props.monster.name}</h2>
        <br></br>
        <p> {props.monster.info}</p>
    </div>
);