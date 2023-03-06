import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Navbar from "../../../App/layout/Navbar";
import { UseStore } from "../../../App/Stores/BaseStore";
import Browse from "../Browse/Browse";
import Edit from "./edit";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";

export default observer(function Dashboard() {
    const { MovieStore } = UseStore();
    const { movieList: movie, isOpenDetails, isOpenForm, CloseDetailsResetMovie } = MovieStore

    useEffect(() => {
        MovieStore.getMovie();
    }, [])

    return (
        <>
            <div>
                <ul>
                    {movie.map(x => (
                        <li key={x.id}>
                            <MovieList movie={x} />
                        </li>
                    ))}
                </ul>
                <button className="bg-red-200 p-2 rounded-xl shadow-md font-semibold capitalize w-fit ml-4" onClick={() => CloseDetailsResetMovie(true)}>
                    New Movie
                </button>
                {isOpenDetails &&
                    <MovieDetails />
                }
                {isOpenForm &&
                    <Edit />
                }
            </div>
        </>
    )
})