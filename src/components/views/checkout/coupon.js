import React from 'react'

const Coupon = (props)=><form className="card p-2">
    <div className="input-group">
    <input type="text" className="form-control" placeholder="Código Promocional"/>
    <button type="submit" className="btn btn-secondary">Redimir</button>
    </div>
</form>

export default Coupon;