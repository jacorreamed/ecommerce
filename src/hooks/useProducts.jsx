import { useState, useEffect } from "react";

const URL_API = `https://api.escuelajs.co/api/v1/products`


export const useProducts = limit => {

    const [products,setProducts] = useState([])

    useEffect(()=>{

        fetch(`${URL_API}?offset=0&limit=${limit}`)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        }).catch(e=>{
            console.log(e)
            setProducts([])
        })

    },[limit])

    return products
}

export const useSigleProduct = id => {

    const [product,setProduct] = useState({images:[]})

    useEffect(()=>{
        fetch(`${URL_API}/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
        }).catch(e=>{
            console.log(e)
            setProduct([])
        })
    },[id])

    return product
}