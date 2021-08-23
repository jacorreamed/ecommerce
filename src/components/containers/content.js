import Item from '../views/item.js'

const c = React.createElement;

const Content = (props)=>{

  return  c('div',{className:'card'},
            c('div',{className:'card-body'},
              c('div',{className:'row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'},
                props.products.map((prod,idx)=>c(Item,{...prod,key: prod.id,ClickCompra:props.ClickCompra}))
              )
            )
          )
            
}



//
export default Content;



{/* <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        
</div> */}