import { React, useState } from 'react'

function App() {
  const [expression, setExpression] = useState("0")
  const [secExpression, setSecExpression] = useState("0")
  const [isOperatorPressed, setIsOperatorPressed] = useState(false)

  const showDigitInScreen = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    let mainScreen: HTMLParagraphElement = document.getElementById("calc-output") as HTMLParagraphElement
    let secondaryScreen: HTMLParagraphElement = document.getElementById("calc-small-output") as HTMLParagraphElement

    let digit: string = (e.target as Element).innerHTML

    if (!isOperatorPressed) {
      if (!expression.startsWith('0')) setExpression(expression + digit)
      else setExpression(digit)
    } else {
      setIsOperatorPressed(false)
      setExpression(digit)
    }
  }

  return (
    <div className="h-screen w-100 flex flex-col justify-center items-center bg-backdrop">
      <div id="calc" className="bg-front w-2/3 xs:w-1/3 md:w-2/3 lg:w-1/2 xl:w-1/4">
        <p id="calc-small-output" className="px-5 pt-5 mb-2 text-gray-400 text-xl font-medium text-right invisible">{secExpression}</p>
        <p id="calc-output" className="px-5 pb-5 text-main-color text-5xl font-medium text-right">{expression}</p>
        <div id="calc-keys" className="flex flex-wrap justify-between items-start">
          {/* First Row */}
          <button className="py-4 text-center font-semibold text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">DEL</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">+/-</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">%</button>
          <button className="py-4 text-center text-3xl font-bold bg-operator-keys text-operator-color w-1/4 hover:bg-hover">&divide;</button>

          {/* Second Row */}
          <button onClick={(e) => showDigitInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">7</button>
          <button onClick={(e) => showDigitInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">8</button>
          <button onClick={(e) => showDigitInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">9</button>
          <button className="py-4 text-center text-3xl font-bold bg-operator-keys text-operator-color w-1/4 hover:bg-hover">&times;</button>

          {/* Third Row */}
          <button onClick={(e) => showDigitInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">4</button>
          <button onClick={(e) => showDigitInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">5</button>
          <button onClick={(e) => showDigitInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">6</button>
          <button className="py-4 text-center text-3xl font-bold bg-operator-keys text-operator-color w-1/4 hover:bg-hover">&minus;</button>

          {/* Fourth Row */}
          <button onClick={(e) => showDigitInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">1</button>
          <button onClick={(e) => showDigitInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">2</button>
          <button onClick={(e) => showDigitInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">3</button>
          <button className="py-4 text-center text-3xl font-bold bg-operator-keys text-operator-color w-1/4 hover:bg-hover">+</button>

          {/* Fifth Row */}
          <button className="py-4 text-center font-semibold text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">AC</button>
          <button onClick={(e) => showDigitInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">0</button>
          <button className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">.</button>
          <button className="py-4 text-center text-3xl font-bold bg-equals text-white w-1/4">=</button>
        </div>
      </div>
      <p className="text-xl font-medium italic text-white mt-5">EZCalc &copy; 2023</p>
    </div>
  )
}

export default App
