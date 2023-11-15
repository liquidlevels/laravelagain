import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/employee/'

const EditProduct = () => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [marca, setMarca] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            marca: marca,
        })
        navigate('/')
    }

    useEffect( () =>{

        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNombre(response.data.nombre)
            setPrecio(response.data.precio)
            setCantidad(response.data.cantidad)
            setMarca(response.data.marca)
        }
        getProductById()
        
    }, [])
  return (
    <div>
        <h2>Edit product</h2>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre} 
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Precio</label>
                <input 
                    value={precio} 
                    onChange={ (e)=> setPrecio(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Cantidad</label>
                <input 
                    value={cantidad} 
                    onChange={ (e)=> setCantidad(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Marca</label>
                <input 
                    value={marca} 
                    onChange={ (e)=> setMarca(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}

export default EditProduct