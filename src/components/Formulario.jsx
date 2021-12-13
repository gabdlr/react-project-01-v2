import React from 'react';
const Formulario = () => {
    return ( 
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 text-center mb-5">Añade pacientes y {""}
             <span className="text-indigo-600 font-bold">administralos</span>
            </p>
            <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                <div className='mb-5'>
                    <label 
                        htmlFor="nombre"
                        className='block'
                    >
                        Nombre mascota
                    </label>
                    <input
                        id="nombre" 
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
                        id="email" 
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
                    <textarea name="sintomas" id="sintomas" rows="10" className="mt-2 w-full resize-none border-2 textarea-gray-400 rounded-md">
                    Describa los sintomas...
                    </textarea>
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value="Agregar paciente"
                />
            </form>
        </div>
     );
}
 
export default Formulario;