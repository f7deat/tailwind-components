export default function Search() {
    return (
        <div className="mt-4">
            <div className="text-3xl font-bold mb-4">Search Components</div>
            <div className="w-full max-w-xs mr-2 navbar-search">
                <div className="relative">
                    <input type="text" name="search" placeholder="Search..." className="border pl-8 pr-5 appearance-none h-10 w-full rounded-full text-sm focus:outline-none" autoComplete="off" />
                    <button type="submit" className="absolute top-0 left-0 p-3 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <textarea disabled={true} className="mt-4 bg-gray-900 text-gray-200 p-4 rounded w-full h-60 text-sm"
                value={`<div class="w-full max-w-xs mr-2 navbar-search">
    <div class="relative">
        <input type="text" name="search" placeholder="Search..." class="border pl-8 pr-5 appearance-none h-10 w-full rounded-full text-sm focus:outline-none" autoComplete="off" />
        <button type="submit" className="absolute top-0 left-0 p-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </div>
</div>`} />
        </div>
    )
}