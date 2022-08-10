import {useState, useEffect} from 'react';

function Formulario() {
    

    const [nombre, setNombre] = useState('');



    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold text-lg">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombres del Paciente</label>

                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombres"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    
                    <label htmlFor="apellidos" className="block text-gray-700 uppercase font-bold">Apellidos del Paciente</label>

                    <input
                        id="apellidos"
                        type="text"
                        placeholder="Apellidos"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email del Paciente</label>

                    <input
                        id="email"
                        type="text"
                        placeholder="Apellidos"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>

                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>

                    <textarea
                        id="sintomas"
                        type="date"
                        placeholder="Describe los sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>


                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
                    value="Agregar Paciente"
                />
                    

            </form>
        </div>
    )
}

export default Formulario;