import React from 'react'
const CartItem = (props)=>(
    <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
            <h6 className="my-0">{props.title}</h6>
            {/*<small className="text-muted">{info.description}</small>*/}
        </div>
        <span className="text-muted">$ {props.price}</span>
    </li>
)

export default CartItem