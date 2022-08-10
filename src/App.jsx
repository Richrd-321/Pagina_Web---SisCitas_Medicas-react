import Header from "./components/Header"
import Formulario from "./components/Formulario"
import Listado_Citas from "./components/Listado_Citas"

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 flex md:flex">
        <Formulario />

        <Listado_Citas />
      </div>

      
    </div>
  )
}

export default App
