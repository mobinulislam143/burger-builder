import React from "react";

const Summary = props =>{
    const ingredientSummery = props.ingredient.map(item => {
        return(
            <li key={item.type}>
                <span style={{textTransform: 'uppercase'}} >{item.type}</span> : {item.amount}
            </li>
        )
    })
    return(
        <div>
            <ul>
                {ingredientSummery}
            </ul>
        </div>
    )
}
export default Summary