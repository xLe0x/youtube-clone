import Logo from "/youtube-logo.png";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../rtk/slices/SearchSlice";
export default function AppNavbar() {
  const dispatch = useDispatch();

  function handleInput(e) {
    if (e.target.value) {
      if (e.key === "Enter") {
        dispatch(setSearchValue(e.target.value));
      }
    }
  }

  return (
    <nav className="w-full backdrop-blur-xl sticky top-0 left-0 z-50 bg-transparent">
      <div className="mx-4 flex justify-between items-center p-2">
        <a href="/" className="flex items-center justify-center">
          <img src={Logo} alt="youtube logo" />
          <p className="ml-1 max-md:hidden font-medium text-sm select-none">
            by Ammar Saber
          </p>
        </a>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="search for something"
            className="text-lg text-gray-200 focus:outline-none outline-transparent bg-transparent border-solid border-white border-spacing-4"
            onKeyDown={handleInput}
            autoFocus
          />
        </form>
      </div>
    </nav>
  );
}
