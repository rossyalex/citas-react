const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">Rocimar</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
        <span className="font-normal normal-case">12 de Junio de 2023</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
        <span className="font-normal normal-case">Lorem ipsum dolor, sit amet
         consectetur adipisicing elit. Aut quidem, praesentium magnam nemo laboriosam, 
         dolorum alias esse suscipit officiis enim vel ipsam? Eaque id quas ab nostrum 
         voluptatibus, suscipit illum.</span>
      </p>
    </div>
    
  )
}

export default Paciente