function Header() {
    return(
        <div className="px-4 py-3 border-solid border-b border-gray-300 flex align-center">
            <div className="font-bold md:w-1/5 p-3 ml-10 text-xl">
                <span className="text-red-500">Tailwind</span> Components
            </div>
            <div className="w-4/5 align-center hidden md:flex">
                <input type="search" className="border-none flex-grow p-3 outline-none" placeholder="Search docs..."/>
                <a href="#/demo" className="py-3 px-4 mx-4">Try Demo</a>
                <a href="#/demo" className="py-3 px-4 mx-4">Docs</a>
                <button className="py-3 px-4 rounded border border-gray-600 mx-4 hover:border-red-500 hover:bg-red-500 hover:text-white mr-10" type="button">Get Started</button>
            </div>
        </div>
    )
}
export default Header