import React,{ useState, useEffect } from 'react';
import Error from './Error';
const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [contacto, setContacto] = useState({
        'nombre':'',
        'propietario': '',
        'email': '',
        'alta': '',
        'sintomas': '',
        'id': generarId()
    });

    const [error, setError] = useState(false);

    function generarId() {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }

    const handleOnChange = (e) => setContacto({
        ...contacto,
        [e.target.name]: e.target.value
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        for(const key in contacto){
            if (contacto[key] === ''){
                setError(true);
                return;
            }
        }

        if(paciente.id){
            const tmpPacientes = pacientes.map( paciente => paciente.id === contacto.id ? contacto : paciente);
            setPacientes([...tmpPacientes]);  
        } else {
            setPacientes([...pacientes, contacto]);
        }
    
        //Reiniciar el form
        setContacto({
            'nombre':'',
            'propietario': '',
            'email': '',
            'alta': '',
            'sintomas': '',
            'id': generarId()
        });
        setPaciente({});
        setError(false)
    }

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
           setContacto(paciente)
        }
    }, [paciente]);

    return ( 
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 text-center mb-5">Añade pacientes y {""}
             <span className="text-indigo-600 font-bold">administralos</span>
            </p>
            {error && <Error mensaje="Todos los campos son obligatorios" />
               
            }
            <form 
                onSubmit={ (e) => handleSubmit(e) }
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
            >
                <div className='mb-5'>
                    <label 
                        htmlFor="nombre"
                        className='block'
                    >
                        Nombre mascota
                    </label>
                    <input
                        id="nombre"
                        name="nombre"
                        value={contacto.nombre || ""}
                        onChange= { (e) => handleOnChange(e) } 
                        type="text"
                        placeholder='Nombre de la mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    />
                </div>
                <div className='mb-5'>
                    <label 
                        htmlFor="propietario"
                        className='block'
                    >
                        Nombre propietario
                    </label>
                    <input
                        id="propietario"
                        name="propietario"
                        value={contacto.propietario || ""}
                        onChange= { (e) => handleOnChange(e) } 
                        type="text"
                        placeholder='Nombre del propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    />
                </div>
                <div className='mb-5'>
                    <label 
                        htmlFor="email"
                        className='block'
                    >
                        Email
                    </label>
                    <input
                        id= "email"
                        name= "email"
                        value={contacto.email || ""}
                        onChange= { (e) => handleOnChange(e) } 
                        type="email"
                        placeholder='Email de contacto'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    />
                </div>
                <div className='mb-5'>
                    <label 
                        htmlFor="alta"
                        className='block'
                    >
                        Fecha de alta
                    </label>
                    <input
                        id="alta"
                        name="alta"
                        value={contacto.alta || ""}
                        onChange= { (e) => handleOnChange(e) } 
                        type="date"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    />
                </div>
                <div className='mb-5'>
                    <label 
                        htmlFor="sintomas"
                        className='block'
                    >
                        Sintomas
                    </label>
                    <textarea 
                        id="sintomas"
                        name="sintomas"
                        value={contacto.sintomas || ""}
                        onChange= { (e) => handleOnChange(e) } 
                        rows="10" 
                        className="mt-2 w-full resize-none border-2 textarea-gray-400 rounded-md"
                        placeholder='Describa los sintomas...'    
                    >

                    </textarea>
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={paciente.id ? "Editar paciente" : "Agregar paciente"}
                />
            </form>
        </div>
     );
}
 
export default Formulario;