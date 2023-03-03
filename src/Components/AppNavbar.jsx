import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <nav className="w-full backdrop-blur-3xl sticky top-0 left-0 z-50 py-4">
      <div className="mx-5 flex justify-between item-center p-3">
        <p className="text-3xl text-gray-100">MeTube</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="px-2 py-1 ml-auto text-slate-900 rounded focus-within:outline-none transition-all focus-within:px-4"
            placeholder="Search . . ."
            // value={searchedItem}
            onKeyDown={handleInput}
          />
        </form>
      </div>
    </nav>
  );
}
