function Sidebar() {
    return (
        <div className="ml-10">
            <Item name="Home" icon="home" />
            <Item name="Input" icon="pencil" hasChild={true} />
        </div>
    )
}

function Item(props) {
    return (
        <div>
            <div className="cursor-pointer font-medium p-3 flex items-center hover:text-red-500 d-flex">
                <div className="flex-grow flex items-center">
                    <ion-icon name={props.icon}></ion-icon>
                    <div className="ml-2">{props.name}</div>
                </div>
                {
                    props.hasChild ? (
                        <div>
                            <ion-icon name="chevron-down"></ion-icon>
                        </div>
                    ) : (<div></div>)
                }
            </div>
            {
                props.hasChild ? (
                    <div className="ml-10">
                        <div className="py-1 px-3 cursor-pointer border-l-4 border-solid border-transparent hover:border-red-500 font-medium text-red-500">Search</div>
                        <div className="py-1 px-3 cursor-pointer border-l-4 border-solid border-transparent hover:border-red-500">Input group</div>
                    </div>
                ) : (<div></div>)
            }

        </div>
    )
}

export default Sidebar