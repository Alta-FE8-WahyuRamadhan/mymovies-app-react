import { MdOutlineLocalMovies } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <nav className="w-full h-14 bg-neutral-700 px-3 py-1 flex justify-between">
        <div className="flex">
          <MdOutlineLocalMovies className="text-white w-8 h-8 mt-1 sm:w-11 sm:h-11" />
          <h1 className="text-white font-bold mt-2 ml-1 text-md sm:text-xl">
            Movies
          </h1>
          <MdOutlineLocalMovies className="text-white w-8 h-8 mt-1 sm:w-11 sm:h-11" />
          <button>
            <BsFillMoonStarsFill className="text-white w-6 h-6 mt-0 sm:ml-6 sm:mt-1" />
          </button>
        </div>
        <button className="grid text-white font-bold mt-2 ml-1 text-md sm:text-xl">
          Home
        </button>
        <button className="text-white grid font-bold mt-2 ml-1 text-md sm:text-xl">
          Favourites
        </button>
      </nav>
    </>
  );
};
export default NavBar;
