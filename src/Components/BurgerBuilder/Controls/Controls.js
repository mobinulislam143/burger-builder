import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]
const BuildControl = props => {
    return(
        <div className="d-flex">
            <div>{props.label}</div>
            <button className='btn btn-danger btn-sm m-1' onClick={props.remove}>Less</button>
            <button className='btn btn-primary btn-sm m-1' onClick={props.added} >More</button>
        </div>
    )
}
const Controls = props => {
    return(
        <div className="container ml-md-5" style={{ textAlign:"center" }} >
            <Card style={{
                marginTop: '30px',
                marginBottom: '30px',
                textAlign: 'center'    
            }}>
                <CardHeader className="CardHeader" style={{
                    backgroundColor: "#D70F64",
                    color: '#fff'
                }} ><h3>Add Ingredients</h3></CardHeader>
                <CardBody>
                    {
                        controls.map(item => {
                            return <BuildControl
                            label={item.label}
                            type={item.type}
                            key={Math.random()}
                            added={() => props.ingredientAdded(item.type)}
                            remove={() => props.ingredientRemove(item.type)}
                            
                             />
                        })
                    }
                </CardBody>
                <CardFooter>
                    <h5>Price: {props.price} </h5>
                </CardFooter>
                <Button style={{backgroundColor: '#D70F64'}} disabled={!props.purchaseable} onClick={props.toggleModal} >Order Now</Button>
            </Card>
        </div>
    )
}
export default Controls