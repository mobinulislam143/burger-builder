import React from "react";
import Ingredient from "../Ingredient/Ingredient";
import "../Burger/Burger.css"

const Burger = props => {
    let ingredientArr = props.ingredient.map(item => {
        let amountArr = [...Array(item.amount).keys()];
        return amountArr.map(_ => {
            return <Ingredient type={item.type} key={Math.random()} />
        })
    })
  .reduce((arr, element) => {
    return arr.concat(element)
  }, [])
  if (ingredientArr.length === 0){
    ingredientArr = <p style={{fontSize:"15px", margin: '-3px 0px'}}>Please add some element!!!</p>
  }
    return (
        <div className="Burger">
           <Ingredient type="bread-top"/>
                {ingredientArr}
           <Ingredient type="bread-bottom"/>
   
        </div>
        
    )
}
export default Burger