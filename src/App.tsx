import React from 'react'
import { useState } from 'react'
import { create, all } from 'mathjs'

function App() {
  const [expression, setExpression] = useState("0")
  const [secExpression, setSecExpression] = useState("0")
  const [isOperatorPressed, setIsOperatorPressed] = useState(false)
  const [isDecimalPressed, setIsDecimalPressed] = useState(false)
  const [isPlusMinusPressed, setIsPlusMinusPressed] = useState(false)

  const math = create(all, {})

  const showDigitInScreen = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()

    let digit: string = (e.target as Element).innerHTML

    if (!isOperatorPressed) {
      if (!expression.startsWith('0') || expression.startsWith('0.')) setExpression(expression + digit)
      else setExpression(digit)
    } else {
      setIsOperatorPressed(false)
      setExpression(digit)
    }
  }

  const showDecimalPointInScreen = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()

    let point: string = (e.target as Element).innerHTML

    if (!isDecimalPressed) {
      if (!isOperatorPressed) setExpression(expression + point)
      else {
        setIsOperatorPressed(false)
        setExpression(expression + point)
      }

      setIsDecimalPressed(true)
    }
  }

  const showPlusMinusInScreen = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()

    if (!expression.startsWith('0') || expression.startsWith('0.')) {
      // true if +, false if -
      if (!isPlusMinusPressed) {
        setExpression(`-${expression}`)
        setIsPlusMinusPressed(true)
      } else {
        setExpression(expression.slice(1))
        setIsPlusMinusPressed(false)
      }
    }
  }

  const showPercentInScreen = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()

    let mainScreen: HTMLParagraphElement = document.getElementById("calc-output") as HTMLParagraphElement
    let result = math.divide(math.bignumber(Number(mainScreen.innerHTML)), math.bignumber(100))

    setExpression(result.toString())
  }

  return (
    <div className="h-screen w-100 flex flex-col justify-center items-center bg-backdrop">
      <div id="calc" className="bg-front w-2/3 xs:w-1/3 md:w-2/3 lg:w-1/2 xl:w-1/4">
        <p id="calc-small-output" className="mx-5 pt-5 mb-2 text-gray-400 text-xl font-medium overflow-hidden flex flex-1 justify-end items-end invisible">{secExpression}</p>
        <p id="calc-output" className="mx-5 pb-5 text-main-color text-5xl font-medium overflow-hidden flex flex-1 justify-end items-end">{expression}</p>
        <div id="calc-keys" className="flex flex-wrap justify-between items-start">
          {/* First Row */}
          <button className="py-4 text-center font-semibold text-keys-color text-3xl bg-keys w-1/4 hover:bg-hover">AC</button>
          <button onClick={(e) => showPlusMinusInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">+/-</button>
          <button onClick={(e) => showPercentInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">%</button>
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
          <button className="py-4 text-center font-semibold text-keys-color text-3xl bg-keys w-1/4 hover:bg-hover">&lt;</button>
          <button onClick={(e) => showDigitInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">0</button>
          <button onClick={(e) => showDecimalPointInScreen(e)} className="py-4 text-center font-thin text-main-color text-3xl bg-keys w-1/4 hover:bg-hover">.</button>
          <button className="py-4 text-center text-3xl font-bold bg-equals text-white w-1/4">=</button>
        </div>
      </div>
      <p className="text-xl font-medium italic text-white mt-5">EZCalc &copy; 2023 v0.0.1</p>
    </div>
  )
}

export default App
