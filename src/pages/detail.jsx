import React, {useRef,useState,useContext} from 'react'
import { useParams } from 'react-router-dom'

import Frame from 'components/frame'
import Carousel from 'components/carousel'
import {useSigleProduct} from 'hooks/useProducts'
import {productContext} from 'state/globalState'

import Stars from 'components/stars'
import Price from 'components/price'
import ProductTitle from 'components/productTitle'
import BuyButton from 'components/buyButton'
import Select from 'components/select'

const Detail = ()=>{
  

    const {idItem}  = useParams()
    const product   = useSigleProduct(idItem)

    const [cantidad, setCantidad] = useState(1);

    const [state, dispatch] = useContext(productContext);

    const select_cant =  useRef(null);

    const handleSelectChange = ()=> setCantidad(select_cant.current.value)

    return (
      <Frame cant_items={0}>
        <div className="container-fluid py-4">
        <div className="row"></div>
          <div className="row justify-content-center ">
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
                  <ProductTitle title={product.title}/>
                  <Stars fill="4"/>
                  <Price value={product.price}/>
                  <div className="row  mt-3 align-items-center">
                    <div className="col-4">Cantidad: </div>
                    <div className="col-4">
                      <Select prop_ref={select_cant} handleSelectChange={handleSelectChange} value={cantidad}/>
                    </div>
                  </div>
                  <BuyButton id_prod={idItem} cantidad={cantidad}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Frame>
    )
}

export default Detail;