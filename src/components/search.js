export default function Search() {
    return (
        <div>
            <div className="w-full max-w-xs mr-2 navbar-search">
                <div className="relative">
                    <input type="text" name="search" placeholder="Search..." className="border pl-8 pr-5 appearance-none h-10 w-full rounded-full text-sm focus:outline-none" autoComplete="off" />
                    <button type="submit" className="absolute top-0 left-0 py-3 px-3 text-gray-400">
                    <ion-icon name="search"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    )
}