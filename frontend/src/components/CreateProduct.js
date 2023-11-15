import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/testinglaravel/product'
const CreateProduct = () => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [marca, setMarca] = useState('')
    const navigate = useNavigate()
    
    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {nombre: nombre, precio: precio, cantidad: cantidad, marca: marca})
        navigate('/')

    }
  return (
    <div>
        <h2>Creat a new Product</h2>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre} 
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Precio</label>
                <input 
                    value={precio} 
                    onChange={ (e)=> setLastName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Cantidad</label>
                <input 
                    value={cantidad} 
                    onChange={ (e)=> setJob(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Marca</label>
                <input 
                    value={marca} 
                    onChange={ (e)=> setPhone(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-success'>Save</button>
        </form>
    </div>
  )
}

export default CreateProduct