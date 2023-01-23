import React from 'react'

function App() {
  return (
    <div className="h-screen w-100 flex flex-col justify-center items-center bg-backdrop">
      <div id="calc" className="bg-front w-1/4">
        <div id="calc-output" className="p-5 text-main-color text-5xl font-medium text-right">0</div>
        <div id="calc-keys" className="flex flex-wrap justify-between items-start">
          {/* First Row */}
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">DEL</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">+/-</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">%</button>
          <button className="py-4 text-center text-3xl font-bold bg-operator-keys text-operator-color w-1/4">&divide;</button>

          {/* Second Row */}
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">7</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">8</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">9</button>
          <button className="py-4 text-center text-3xl font-bold bg-operator-keys text-operator-color w-1/4">&times;</button>

          {/* Third Row */}
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">4</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">5</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">6</button>
          <button className="py-4 text-center text-3xl font-bold bg-operator-keys text-operator-color w-1/4">&minus;</button>

          {/* Fourth Row */}
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">1</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">2</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">3</button>
          <button className="py-4 text-center text-3xl font-bold bg-operator-keys text-operator-color w-1/4">+</button>

          {/* Fifth Row */}
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">AC</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">0</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4">.</button>
          <button className="py-4 text-center text-3xl font-bold bg-operator-keys text-operator-color w-1/4">=</button>
        </div>
      </div>
      <p className="text-xl font-medium italic text-white mt-5">EZCalc &copy; 2023</p>
    </div>
  )
}

export default App
