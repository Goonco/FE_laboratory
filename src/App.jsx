import { useState, useEffect } from "react";
import Display from "./Display";
import axios from "axios";

export default function App() {
  const [displayState, setDisplayState] = useState("Default");

  const handleButtonClick = async (e) => {
    // console.log(e.target.id);

    setDisplayState("Loading");
    try {
      const response = await axios.get(import.meta.env.VITE_BASE_URL);
      setDisplayState(response.data.displayState);
    } catch (e) {
      console.log(e);
    }
  };

  const convertToDefaultState = () => setDisplayState("Default");

  return (
    <div
      id="check"
      className="w-3/5 h-full p-8 mx-auto flex flex-col justify-center items-start bg-white"
    >
      <h1 className="text-3xl font-bold underline">예외 처리 테스트</h1>

      <div className="flex gap-3 my-4">
        <button
          id="1"
          onClick={handleButtonClick}
          className="bg-sky-400 hover:bg-sky-700 px-4 py-2 rounded-lg text-white font-serif font-medium"
        >
          Success
        </button>

        {/* <button
          id="2"
          onClick={handleButtonClick}
          className="bg-sky-400 px-4 py-2 rounded-lg text-white font-serif font-medium"
        >
          Success
        </button>

        <button
          id="3"
          onClick={handleButtonClick}
          className="bg-sky-400 px-4 py-2 rounded-lg text-white font-serif font-medium"
        >
          Success
        </button> */}
      </div>

      <Display
        displayState={displayState}
        convertToDefaultState={convertToDefaultState}
      />
    </div>
  );
}
