import React,{useState} from 'react'


const Invoicing = (props)=>{

    return (
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Datos de Facturación</h4>
          <form onSubmit={props.handleSubmit} className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-sm-12">
                <label htmlFor="firstName" className="form-label">Nombres y Apellidos</label>
                <input name="firstName" onChange={props.handleChange} type="text" className="form-control" id="firstName" placeholder="" value={props.firstName} required/>
              </div>
              
              <div className="col-12">
                  <label htmlFor="address" className="form-label">Dirección</label>
                  <input name="address" type="text" onChange={props.handleChange} className="form-control" id="address" placeholder="calle falsa 123" value={props.address} required/>
              </div>
              <div className="col-md-5">
                  <label htmlFor="country" className="form-label">País</label>
                  <select name="country" value={props.country} onChange={props.handleChange} className="form-select" id="country" required>
                    <option value="">Seleccione ...</option>
                    <option value="COL">Colombia</option>
                    <option value="ECU">Ecuador</option>
                    <option value="PER">Perú</option>
                    <option value="MEX">México</option>
                    <option value="GTM">Guatemala</option>
                  </select>
              </div>
              <div className="col-md-4">
                  <label htmlFor="state" className="form-label">Ciudad</label>
                  <select value={props.state} name="state" onChange={props.handleChange} className="form-select" id="state" required>
                  <option value="">Seleccione ...</option>
                  <option value="Bgta">Bogotá</option>
                  </select>
              </div>
            </div>

            <hr className="my-4"/>

            <div className="form-check">
            <input name="sameAddress" onChange={props.handleChangeCheckInputs} checked={props.sameAddress} type="checkbox" className="form-check-input" id="sameAddress"/>
            <label className="form-check-label" htmlFor="sameAddress">La dirección de envío es la misma que mi dirección de facturación.</label>
            </div>

            <div className="form-check">
            <input name="saveInfo" onChange={props.handleChangeCheckInputs} checked={props.saveInfo} type="checkbox" className="form-check-input" id="saveInfo"/>
            <label className="form-check-label" htmlFor="saveInfo">Guardar esta información para la próxima vez</label>
            </div>

            <hr className="my-4"/>

            <h4 className="mb-3">Medio de pago</h4>

            <div className="my-3">
            <div className="form-check">
                <input name="credit" value="credit" onChange={props.handleChange} id="credit" name="paymentMethod" type="radio" className="form-check-input"  required/>
                <label className="form-check-label" htmlFor="credit">Tarjeta de crédito</label>
            </div>
            <div className="form-check">
                <input name="debit" value="debit" onChange={props.handleChange} id="debit" name="paymentMethod" type="radio" className="form-check-input"  required/>
                <label className="form-check-label" htmlFor="debit">Tarjeta Débito</label>
            </div>
            </div>

            <div className="row gy-3">
            <div className="col-md-6">
                <label htmlFor="ccName" className="form-label">Nombre de la tarjeta</label>
                <input name="ccName" onChange={props.handleChange} value={props.ccName} type="text" className="form-control" id="ccName" placeholder="" required/>
            </div>

            <div className="col-md-6">
                <label htmlFor="ccNumber" className="form-label">Número de tarjeta</label>
                <input name="ccNumber" onChange={props.handleChange} value={props.ccNumber} type="text" className="form-control" id="ccNumber" placeholder="" required/>
            </div>

            <div className="col-md-3">
                <label htmlFor="ccExpiration" className="form-label">Fecha de expiración</label>
                <input name="ccExpiration" onChange={props.handleChange} value={props.ccExpiration} type="text" className="form-control" id="ccExpiration" placeholder="" required/>
            </div>

            <div className="col-md-3">
                <label htmlFor="ccCvv" className="form-label">CVV</label>
                <input name="ccCvv" value={props.ccCvv} onChange={props.handleChange} type="text" className="form-control" id="ccCvv" placeholder="" required/>
            </div>
            </div>

            <hr className="my-4"/>

            <button className="w-100 btn btn-primary btn-lg" type="submit">Continuar al pago :)</button>
          </form>
        </div>
    )
}

export default Invoicing;