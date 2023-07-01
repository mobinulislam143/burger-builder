import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actionCreator";
import ShowOrder from "./showOrder";
import Spinner from "../spinner/spinner";

const mapStateToProps = (state) => {
    return {
        orders: state.orders,
        orderLoading: state.orderLoading,
        orderErr: state.orderErr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => {
            dispatch(fetchOrders())
        }
    }
}

class Orders extends Component {
    componentDidMount(){
        this.props.fetchOrders()
    }
    componentDidUpdate(){
        console.log(this.props)
    }
    render(){
        let orders = null;
        if (this.props.orderErr){
            orders = <p style={{border: '1px solid grey', margin: '10px 0px', boxShadow: '#686565 4px 4px 5px',  padding: '10px 0px', borderRadius: '8px'}} >Sorry to Load Orders...</p>
        }
        else{
            if(this.props.orders.length === 0) {
                orders = <p style={{border: '1px solid grey', margin: '10px 0px', boxShadow: '#686565 4px 4px 5px', padding: '10px 0px', borderRadius: '8px'}} >You have no orders. please order something!!!</p>
            }
            else{

                orders = this.props.orders.map(order => {
                    return <ShowOrder order={order} key={order.id} />
                })
            }
        }

        return(
            <div>
                { this.props.orderLoading? <Spinner/>: orders}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Orders)