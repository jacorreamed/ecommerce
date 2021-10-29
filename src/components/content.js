import React from 'react'
import Item from './item'
import Loader from './loader.jsx'

const Content = ({products,ClickCompra,listar,handleChangeList,is_loading})=>{
    
    return  <div className="card">
      <div className='card-body d-grid gap-3'>
        <div className="row align-items-start">
          
          <div className="col-4">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Mostrar</label>
            <select id="inputGroupSelect01" name="listar" value={listar} className="form-select" onChange={handleChangeList}>
              <option value="1">1 artículo</option>
              <option value="5">5 artículos</option>
              <option value="10">10 artículos</option>
              <option value="15">15 artículos</option>
              <option value="20">20 artículos</option>
              <option value="50">50 artículos</option>
            </select>
          </div>
          </div>
        </div>
        <div className = 'row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4'>
          {is_loading?<Loader/>:products.map((prod,idx)=><Item info={prod} key={prod.id} ClickCompra={ClickCompra}/>)}
        </div>
      </div>
    </div>      
}

export default Content;