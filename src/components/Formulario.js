import React, {useState} from "react";
import Swal from "sweetalert2";
import Axios from 'axios'
import logo from '../logo.jpeg'

export default function Formulario() {

    const [nombre, setNombre] = useState('')
    const[apellido,setApellido]=useState('')
    const [dependencia,setDependencia]=useState('')
    const[satisfaccion,setSatisfaccion]=useState('')

    const url='https://murmuring-ravine-77162.herokuapp.com/api'

    const registar = async (e) => {
        e.preventDefault()

        const NewEmployee={nombre,apellido,dependencia,satisfaccion}
        const response=await Axios.post(url,NewEmployee)

        const mensaje=response.data.mensaje

        Swal.fire({
            icon: 'success',
            title: mensaje
        })


    }

    return (
        <div className="container  mt-4 media">
            <img src={logo} className="align-self-center  mr-3" alt="logo"/>

            <div className="media-body">
                <form onSubmit={registar} className="mt-0">
                    <div className="form-group">
                        <input type="text" className="form-control" required placeholder="Nombre"
                               onChange={e => setNombre(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" required placeholder="Apellido"
                               onChange={e => setApellido(e.target.value)}/>
                    </div>


                    <div className="form-group ">
                        <label htmlFor="dependence">Dependencia</label>
                        <select id="dependence" className="form-control"  onChange={e => setDependencia(e.target.value)}>
                            <option>Seleccionar</option>
                            <option value="sec educación">Sec educación</option>
                            <option value="sec cultura">Sec cultura</option>
                            <option value="sec planeacion">Sec planeación</option>
                        </select>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" onChange={e => setSatisfaccion(e.target.value)}/>
                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" onChange={e => setSatisfaccion(e.target.value)}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" onChange={e => setSatisfaccion(e.target.value)}/>
                        <label className="form-check-label" htmlFor="inlineRadio1">3</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" onChange={e => setSatisfaccion(e.target.value)}/>
                        <label className="form-check-label" htmlFor="inlineRadio2">4</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5" onChange={e => setSatisfaccion(e.target.value)}/>
                        <label className="form-check-label" htmlFor="inlineRadio2">5</label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );

}