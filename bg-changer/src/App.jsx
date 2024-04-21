import { useState } from "react";

function App() {
  const [color, setColor] = useState("#ab0066");
  return (
    <>
      <h1 className="flex justify-center bg-green-400 text-black p-3 rounded-xs">
        Background Color Changer
      </h1>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button
              className="rounded-xl text-white px-3 py-2"
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              className="rounded-xl text-white px-3 py-2"
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              className="rounded-xl text-white px-3 py-2"
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              className="rounded-xl text-white px-3 py-2"
              onClick={() => setColor("grey")}
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>

            <button
              className="rounded-xl text-black px-3 py-2"
              onClick={() => setColor("yellow")}
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>

            <button
              className="rounded-xl text-white px-3 py-2"
              onClick={() => setColor("purple")}
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>

            <button
              className="rounded-xl text-white px-3 py-2"
              onClick={() => setColor("black")}
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
