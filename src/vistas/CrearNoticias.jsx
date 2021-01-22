import React,{useState} from 'react'
import shortid from 'shortid'
import CreacionCartas from '../components/pruena'


const Boxer2 = () => {
    
  const [box, setBox] = useState('')
  const [imagen, setImagen] = useState('')
  const [boxs,setBoxs] = useState([])
  const [id, setId] = useState('')
  const [modoEdicion, setModoEdicion] = useState(false)
  const [error, setError] = useState(null)
  
  const agregarBox = e => {
      e.preventDefault()
      if(!box.trim()){
        console.log('Elemento vacio')
        setError('Campo vacio')
        return
      }if(!imagen.trim()){
        console.log('Falta cargar imagen')
        setError('Falta imagen')
        return
      }
      //console.log(box)
      setBoxs([
        ...boxs,
        {id:shortid.generate() , nombreBox:box, nombreImagen:imagen}
      ])
     
  
      setBox('')
      setImagen('')
      setError(null)
    }

    const editarBox = e => {
      e.preventDefault()
      if(!box.trim()){
        console.log('Elemento vacio')
        setError('Escriba una nueva tarea')
        return
      }
      const arrayEditado = boxs.map(
        item => item.id === id ? {id, nombreBox:box, nombreImagen:imagen} : item 
        )
      setBoxs(arrayEditado)
      setModoEdicion(false) 
      setBox('')
      setId('')
      setError(null)
  
    }
          
    return (
        <div>
          <CreacionCartas 
          setBoxs={boxs}
          setBox={box}
          
          />
          <div className="col-4 container">
            <h4 className="text-center">
              {
                modoEdicion ? 'Editar Box' : 'Agregar Box'
              }
            </h4>
            <form onSubmit={modoEdicion ? editarBox : agregarBox}>
              {
                error ? <span className="text-danger">{error}</span> : null 
              }
              <textarea 
                type="textarea" 
                className="form-control mb-2"
                placeholder="Ingrese Tarea"
                onChange={(e) => setBox(e.target.value)}
                value={box}
              />
              <input 
                type="text" 
                className="form-control mb-2"
                placeholder="Coloque url de la imagen"
                onChange={(e) => setImagen(e.target.value)}
                value={imagen}
              />
              {
                modoEdicion ? (
                  <button type="submit" className="btn btn-warning btn-block">Editar</button>
                ) : (
                  <button type="submit" className="btn btn-dark btn-block">Agregar</button>
                )
              }
            </form>
          </div>
        </div>
    )
}

export default Boxer2
