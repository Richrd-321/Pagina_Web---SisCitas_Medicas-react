//import React from 'react'
import Paciente from "./Paciente"

function Listado_Citas() {
    return (
        <div className="w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Administra tus {''}
                <span className="text-indigo-600 font-bold text-lg">Pacientes y Citas</span>
            </p>

            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />

        </div>

        
    )
}

export default Listado_Citas
