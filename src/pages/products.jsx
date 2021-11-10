import React,{useState,useRef} from 'react'
import Content from 'components/content'
import Frame from 'components/frame'
import { useProducts } from 'hooks/useProducts'

import '../components/auth/style.css'

const Products = props =>{

      //const [selectedProducts,setSelectedProducts] = useState(0)
      const [limit,setLimit]          = useState(20) 
      const [isLoading,setIsLoading]  = useState(false)
      const products                  = useProducts(limit)
      const refSelector               = useRef(null)

      const handleChangeList  = () => setLimit(refSelector.current.value)

    return(
      <Frame cant_items={0}>
        <Content 
          products          = {products}
          listar            = {limit}
          refSelector       = {refSelector}
          handleChangeList  = {handleChangeList}
          is_loading        = {isLoading}
        />
      </Frame>
    )
    
}

export default Products