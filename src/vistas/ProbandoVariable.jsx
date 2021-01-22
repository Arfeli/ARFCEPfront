import React from 'react'

const ProbandoVariable = (props) => {
    return (
        <div>
            <div className="album py-5 bg light" >
            <div className="container">
              <div className="row">
                {
                  props.setBoxs.length === 0 ? (
                    <p>Sin Anuncios</p>
                  ) : (
                    props.setBoxs.map (item =>(
                      <div className="col-3">
                          <div className="card mb-4" key={item}>
                          <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Servicios [100%x225]" 
                            src={item.nombreImagen}
                            data-holder-rendered="true" />
                          <div className="card-body">
                            {item.nombreBox}
                          </div>
                          <button className="btn btn-danger btn-block">Editar</button>
                        </div>
                      </div>
                    ))
                  )
                }
              </div>
            </div>
          </div>
        </div>
    )
}

export default ProbandoVariable
