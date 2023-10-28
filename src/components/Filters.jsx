
export const Filters = () => {
    return (
        <div className="mb-7" >
            <form className="flex content-center w-full flex-wrap gap-5" >
                <div className="flex">
                <input 
                type="text"
                name="search" 
                id="search"  
                className="block focus:ring-0 w-full placeholder:text-sm border-none rounded-l-lg shadow-sm placeholder:text-gray-400 h-[40px]" 
                />
                <button type="submit"
                className="cursor-pointer text-sm bg-blue-500  rounded-r-lg h-[40px] px-4 py-2 text-white">Search</button>
                </div>

                <div className="flex-none">
                    <select id="categories" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"   >
                        <option defaultValue={"0"}>Seleccionar Categoria</option>
                        <option value="US">Deportes</option>
                        <option value="CA">Culturales</option>
                        <option value="FR">Artisticos</option>
                        <option value="DE">Videojuegos</option>
                    </select>
                </div>

            </form>
        </div>
    )
}
