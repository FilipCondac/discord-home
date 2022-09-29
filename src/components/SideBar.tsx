import ServerImages from "./ServerImages";
const SideBar = () => {

    return (
        <div className="bg-slate-800 w-16 h-screen left-0 flex flex-col">
            <div className="place-content-centre flex flex-col mt-6">
                {
                    ServerImages && ServerImages.map((item) =>
                        <div key={item.id}>
                            <img src={item.location} className="w-12 m-auto mt-2"></img>
                        </div>
                    )
                }

            </div>
        </div >
    )

};

export default SideBar;