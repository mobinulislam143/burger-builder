import React from "react";
import BreadTop from '../../../assets/images/top.png'
import BreadBottom from '../../../assets/images/bottom.png'
import Salad from '../../../assets/images/salad.png'
import Meat from '../../../assets/images/meat.png'
import Cheese from '../../../assets/images/cheese.png'
import "../Ingredient/ingredient.css"

const Ingredient = props => {
    let ingredient = null;

    switch(props.type){
        case 'bread-bottom':
            ingredient = <div> <img src={BreadBottom} alt="breadBottom" /> </div>
            break;
        case 'bread-top':
            ingredient = <div> <img src={BreadTop} alt="topBreat"/> </div>
            break;
        case 'meat':
            ingredient = <div> <img src={Meat} alt="meat"/> </div>
            break;
        case 'salad':
            ingredient = <div> <img src={Salad} alt="salad"/> </div>
            break;
        case 'cheese':
            ingredient = <div> <img src={Cheese} alt="cheese"/> </div>
            break;
        default:
    }

    
    return (
        <div>
            <div className="Ingredient">
                {ingredient}
            </div>

        </div>
    )
}
export default Ingredient