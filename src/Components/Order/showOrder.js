import React from "react";

const ShowOrder = props => {
    const ingredientSummary = props.order.ingredient.map(item => {
        return(
            <span style={{border: '1px solid grey', margin: '3px 5px',padding:'5px',  borderRadius: '3px',}} key={item.type}>{item.amount} X <span style={{textTransform: 'uppercase'}}>{item.type}</span> </span>
        )
    })
    return(
        <div style={{border: '1px solid grey', margin: '10px 0px', boxShadow: '#686565 4px 4px 5px', borderRadius: '8px'}}>
            <p>Show Order: {props.order.id}</p>
            <p>Address: {props.order.customer.deliveryAddress}</p>
            {ingredientSummary}
            <p>Total: {props.order.price}</p>

        </div>
    )
}
export default ShowOrder