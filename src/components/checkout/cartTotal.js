import React from 'react'
const CartTotal = (props)=>
<li className="list-group-item d-flex justify-content-between">
    <span>Total ({props.moneda})</span>
    <strong>$ {props.total}</strong>
</li>

export default CartTotal;