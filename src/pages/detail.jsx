import React from 'react'
import { useParams,Redirect } from 'react-router-dom'

import Frame from 'components/frame'
import Carousel from 'components/carousel'
import {useSigleProduct} from 'hooks/useProducts'

const Detail = ()=>{

    const {idItem}  = useParams()
    const product   = useSigleProduct(idItem)
    console.log(product)
    return (
      <Frame cant_items={0}>
        <div className="container-fluid py-4">
        <div className="row"></div>
          <div className="row justify-content-center">
            <div className="col-8 ">
              <div className="card">
                <div className="card-body">
                  <Carousel
                    images={
                      product.images.map((image)=>({
                        original: image,
                        thumbnail: image,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <a href="#" className="link-secondary">Nuevo | 10 vendidos</a>
                  <h5 className="card-title">{product.title}</h5>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">Comprar ahora</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Frame>
    )
}

export default Detail;