import { useState } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("cyan");
  return (
    <>
      <main
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl">
            <button
              className="bg-red border-2 border-black px-4 py-2 bg-red-600 rounded-xl shadow-lg"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="bg-red border-2 border-black px-4 py-2 bg-green-600 rounded-xl shadow-lg"
              onClick={() => setColor("green")}
            >
              Green
            </button>{" "}
            <button
              className="bg-red border-2 border-black px-4 py-2 bg-blue-600 rounded-xl shadow-lg"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default BackgroundChanger;
