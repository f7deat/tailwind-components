function Header() {
    return(
        <div className="p-4 border-solid border-b border-gray-200 flex align-center">
            <div className="font-bold w-1/5 p-2">
                Tailwind Components
            </div>
            <div className="w-4/5 flex align-center">
                <input type="search" className="border-none flex-grow p-2 outline-none" placeholder="Search docs..."/>
                <a href="#/demo" className="py-2 px-4">Try Demo</a>
                <a href="#/demo" className="py-2 px-4">Docs</a>
                <button className="p-2 rounded border" type="button">Get Started</button>
            </div>
        </div>
    )
}
export default Header