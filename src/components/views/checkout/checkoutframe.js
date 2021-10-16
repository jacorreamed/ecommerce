import React from 'react'

const CheckoutFrame = (props)=>{
  const img_uri = "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.1/mercadolibre/logo__large_plus.png"
  return(
    <div className="card p-4">
      <div className="py-4 text-center">
        <img className="d-block mx-auto mb-3" src={img_uri} alt="" />
        <h2>Fomulario de pago</h2>
        <p className="lead">Descripción del proceso de compra</p>
      </div>
      {props.children}
    </div>
  )
}

export default CheckoutFrame