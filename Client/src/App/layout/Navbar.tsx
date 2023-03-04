import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"
import { UseStore } from "../Stores/BaseStore"

export default observer(function NavBar() {
    const { UserStore: { User, logout } } = UseStore()
    const navigate = useNavigate()

    return (
        <div className="flex justify-between items-center w-full bg-blue-400">
            <div className="flex items-center text-2xl">
                <h1 className="font-bold text-2xl text-red-600 m-2">
                    <button onClick={() => navigate("/")}>
                        CoolMovie
                    </button>
                </h1>
                <div className="w-2 border-l-2 h-12 mx-2 border-l-blue-600"></div>
                <div className="font-semibold text-black" >
                    <button onClick={() => navigate("/movieRoom")}>
                        Room
                    </button>
                </div>
                <div className="w-2 border-l-2 h-12 mx-2 border-l-blue-600"></div>
                <div className="font-semibold text-black" >
                    <button onClick={() => navigate("/movies")}>
                        Movie
                    </button>
                </div>
            </div>
            <h1 className="flex items-center m-2 text-xl text-red-600 gap-2 ">
                <button className="bg-red-600 text-white font-semibold p-2 rounded-xl" onClick={() => logout()}>
                    Logout
                </button>
                <div className="font-semibold ">
                    {User ?
                        User.displayname : "Name"}
                </div>
                <div className="bg-blue-800 rounded-full w-10 h-10">
                </div>
            </h1>
        </div>
    )
})