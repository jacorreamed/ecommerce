const c = React.createElement;

const Item = (props)=> c('div',{className:'col'},
                          c('div',{className:'card shadow-sm'},
                            c('img',{className:"bd-placeholder-img card-img-top",src:props.image,width:"80%",height:"225"}),
                            c('div',{className:'card-body'},
                              c('h4',null,props.title),
                              c('p',{className:'card-text'},props.description),
                              c('div',{className:'d-flex justify-content-between align-items-center'},
                                c('div',{className:'btn-group'},
                                  c('button',{type:"button",className: "btn btn-sm btn-outline-secondary"},"Comprar"),
                                  c('button',{type:"button",className: "btn btn-sm btn-outline-secondary"},"+ Favoritos"),
                                ),
                                c('small',{className:'text-muted'},`$ ${props.price}`)
                              )

                            )
                          )
                        );

export default Item;

{/* <div class="col">
    <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
        </div>
    </div>
</div> */}