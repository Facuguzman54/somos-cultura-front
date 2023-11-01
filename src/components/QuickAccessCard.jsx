const QuickAccessCard = ({title, users = null, categories=null , events=null}) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 shadow-lg text-white relative flex flex-col md:flex-row justify-between items-center cursor-pointer">
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {events ? <p className="text-gray-200">Eventos Publicandos: {events}</p> : 
        (categories ? <p className="text-gray-200">Categorias Publicandas: {categories}</p> :
        (users ? <p className="text-gray-200">Usarios dados de alta: {users}</p> : "")
        )}
      </div>
      <span className="icon-[bi--file-plus] text-[40px] hover:-scale-125 duration-25 ease-in"></span>
    </div>
  )
}

export default QuickAccessCard