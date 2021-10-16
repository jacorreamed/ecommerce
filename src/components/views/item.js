import React from 'react'

const Item = ({info,ClickCompra})=>
  <div className="col">
    <div className="card shadow-sm">
        <img src={info.image} width="80%" height="225"/>

        <div className="card-body">
            <h4>{info.title}</h4>
            <p className="card-text">{info.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>ClickCompra({id:info.id,title:info.title, price: info.price})}>Comprar</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">+ Favoritos</button>
              </div>
              <small className="text-muted">$ {info.price} USD</small>
            </div>
        </div>
    </div>
  </div>

export default Item;