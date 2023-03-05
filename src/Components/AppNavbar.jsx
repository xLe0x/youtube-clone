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
    <nav className="w-full backdrop-blur-3xl backdrop-brightness-150 sticky top-0 left-0 z-50 py-1 bg-transparent">
      <div className="mx-5 flex justify-between items-center p-3">
        <img src={Logo} />
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
