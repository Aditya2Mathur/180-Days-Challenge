import "./App.css";
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  function decreseHandler() {
    setCount(count - 1);
  }
  function increseHandler() {
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center  bg-[#433151] flex-col gap-10 ">
      <div className="text-stone-50 text-2xl"> Increment & Decrement </div>
      {/* Value Div */}
      <div className=" w-20 bg-slate-100 h-20 text-2xl text-center pt-6 rounded-full">{count}</div>
      <div className="flex bg-gray-50 gap-10 justify-center py-3 rounded-sm text-[25px]  ">
        <button className=" border-r-2 text-center w-20 border-zinc-800 text-5xl" onClick={decreseHandler}>
          -
        </button>
        <button className=" border-r-2 text-center pr-10  border-zinc-800" onClick={reset}>
          RESET
        </button>
        <button className=" text-center w-20 border-zinc-800 text-5xl " onClick={increseHandler}>
          +
        </button>

      </div>
    </div>

  );
}

export default App;
