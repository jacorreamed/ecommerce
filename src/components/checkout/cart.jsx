import React from 'react'
import CartItem from './cartItem.js'
import CartTotal from './cartTotal.js'
import RenderList from '../renderList.js'
import Coupon from './coupon.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Cart = (props)=>{
  console.log(props);
  return (
    <div className="col-md-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Tus productos</span>
          {/* <i className="bi-alarm"></i> */}
          <span className="badge bg-primary rounded-pill">{props.cant_items}</span>
      </h4>
      <RenderList>
      
        {props.items.map(prod=><CartItem key={prod.id} {...prod} />)}
        <CartTotal moneda="USD" total={props.totalPagar}/>
      </RenderList>
      <Coupon/>
    </div>
  )
}

export default Cart;