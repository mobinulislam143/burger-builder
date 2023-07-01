import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import {Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap'
import Summary from "./Summary/Summary";
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux'
import { addIngredient, removeIngredient, updatePurchable } from '../../redux/actionCreator'
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
       ingredient: state.ingredient,
       totalPrice: state.totalPrice,
       purchaseable: state.purchaseable
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIngredient: (igtype) => dispatch(addIngredient(igtype)),
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updatePurchable: () => dispatch(updatePurchable())
    }
}

class BurgerBuilders extends Component {
    state = {
        modelOpen: false,
    }

   
    addIngredientHandle = type => {
        this.props.addIngredient(type)
        this.props.updatePurchable()
          }
    removeIngredientHandle = type => {
        this.props.removeIngredient(type)
        this.props.updatePurchable()
      
    }

    toggleModal = () => {
        this.setState({
            modelOpen: !this.state.modelOpen,
        })
    }    
    HandleCheckout = () => {
        const navigate = useNavigate();
        navigate('/checkout');
    }; 
      
    render(){ 
        return (
            <div>
                <div  className="d-flex flex-md-row flex-column">
                <Burger ingredient={this.props.ingredient} />
                <Controls
                ingredientAdded = {this.addIngredientHandle}
                    ingredientRemove = {this.removeIngredientHandle}
                    price = {this.props.totalPrice}
                    toggleModal={this.toggleModal}
                    purchaseable={this.props.purchaseable}
                    />
                    </div>
                <Modal isOpen={this.state.modelOpen}  toggle={this.toggleModal}>
                    <ModalHeader>Your Order Summer</ModalHeader>
                    <ModalBody>
                        <Summary ingredient={this.props.ingredient} />
                        <h5>Total Price: {this.props.totalPrice.toFixed(0)} BDT </h5>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button onClick={this.HandleCheckout} color="success">Continue to Checkout</Button> */}
                        <Link to='/checkout'>
                            <Button style={{backgroundColor: '#D70F64'}}>Continue to Checkout</Button>
                        </Link>                       
                        <Button color='secondary' onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>

            
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (BurgerBuilders)