import React, {Component} from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios'
import Spinner from "../../spinner/spinner";

const mapStateToProps = (state) => {
    return {
        ingredient: state.ingredient,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable
    }
}

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: '', 
            phoneNumber: '',
            paymentType: 'Cash on Delivery',
        },
        purchasable: false,
        isLoading: false,
        isModalopen: false,
        modalMsg: '',
        modalOpen: true,
    }
    inputChangeHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        })
    }
    submitHandler = () => {
        if(this.state.values.deliveryAddress === '' ||this.state.values.phoneNumber === '' ||this.state.values.paymentType === ''  ){
            alert("Please fill out all state")
        }
        else{
            this.setState({isLoading: true});
            const order = {
                ingredient: this.props.ingredient,
                customer: this.state.values,
                price: this.props.totalPrice,
                orderTime: new Date(),
            }
            axios.post('https://burger-builder-fea96-default-rtdb.firebaseio.com/orders.json', order)
            .then(response => {
                if (response.status === 200){
                    this.setState({
                        isLoading: false,
                        isModalopen: true,
                        modalMsg: 'Order placed Successfully'
                    })
                  }
                  else{
                    this.setState({
                        isLoading: false,
                        isModalopen: true,
                        modalMsg: 'Something went wrong! Please try again'
                    })
                  }
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    isModalopen: true,
                    modalMsg: 'You are not connected internet!!'
                })
            })
        }
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render(){
        let form = (<div>
             <h4 style={{ marginTop: '5px', border: '1px solid grey', boxShadow: '1px 1px #88888', borderRadius: '5px', padding: '5px'}}>
                    Payment: {this.props.totalPrice}
                </h4>
                <form style={{ marginTop: '5px', border: '1px solid grey', boxShadow: '1px 1px #88888', borderRadius: '5px', padding: '5px'}}>
                    <textarea style={{marginTop: '5px'}} name="deliveryAddress" onChange={this.inputChangeHandler} value={this.state.values.deliveryAddress} className="form-control" placeholder="Address"></textarea>
                    
                    <input value={this.state.values.phoneNumber} style={{margin: '5px 0px'}} name="phoneNumber" className="form-control" onChange={this.inputChangeHandler} placeholder="Your phone number" />
                    <select onChange={this.inputChangeHandler} className="form-control" name="paymentType" value={this.state.values.paymentType} >
                        <option value='Cash on Delivery'>Cash on delivery</option>
                        <option value='Bkash'>Bkash</option>

                    </select>
                    <br/>
                    <div style={{textAlign: 'left'}}>
                    <Button style={{backgroundColor: '#d70f64', border: 'none'}} onClick={this.submitHandler} >Submit</Button>

                    <Link to='/'>
                            <Button className="m-2" style={{backgroundColor: '#d5b902', border: 'none'}}>Cancel</Button>
                        </Link>            
                    </div>
                </form>
        </div>)
        return(
            <div>
                {this.state.isLoading? <Spinner/> : form} 
                    <Modal onClick={this.toggleModal} isOpen={this.state.isModalopen}>
                        <ModalBody>
                            <p>{this.state.modalMsg}</p>
                        </ModalBody>
                    </Modal>   
            </div>
        )
    }
}
export default connect( mapStateToProps)(Checkout)