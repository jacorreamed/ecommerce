import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({info})=>
  <div className="col">
    <div className="card shadow-sm">
        <img src={info.images[0]} width="100%" height="225"/>

        <div className="card-body">
            <h4>{info.title}</h4>
            <p className="card-text">{info.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                  <Link
                    className="btn btn-sm btn-outline-secondary"
                    to={`/detail/${info.id}/`}
                  >
                    <i className="bi bi-eye"></i> Ver
                  </Link>
                  <button 
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    <i className="bi bi-heart"></i> Favoritos 
                  </button>
              </div>
              <small className="text-muted">$ {info.price} USD</small>
            </div>
        </div>
    </div>
  </div>

export default Item;