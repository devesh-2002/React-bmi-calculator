import './App.css'
import { useState } from 'react'
function App () {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmiResult, setBmiResult] = useState(null)
  const [status, setStatus] = useState('')

  function calculateBMI () {
    const bmi = Number(weight / (height / 100) ** 2).toFixed(2)
    // toFixed is used to convert number to string, and toFixed(2) will convert into 2 decimals
    setBmiResult(bmi)
    const bmiStatus = getStatus(bmi)
    setStatus(bmiStatus)

    console.log({ bmi })
    setHeight("");
    setWeight("");
    // Initialising setHeight and setWeight as empty strings
    // It will auto refresh after clicking the button
  }
  function getStatus (bmi) {
    if (bmi < 18.5) { return 'Underweight' } else if (bmi < 25) { return 'Normal' } else if (bmi < 30) { return 'Overweight' } else { return 'Obese' }
  }
  return (
    <div className=' w-full max-w-xs m-10 '>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            Height
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='height' type='text' placeholder='Height' value={height}
            onChange={e => setHeight(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Weight
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='weight' type='text' placeholder='Weight' value={weight}
            onChange={e => setWeight(e.target.value)}
          />
          {/* <p className='text-red-500 text-xs italic'>Please choose a password.</p> */}
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={calculateBMI}
            type='button'
          >
            Calculate BMI
          </button>
          {/* <a className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' href='#'>
            Forgot Password?
          </a> */}
         
        </div> <p>Your BMI is : <b>{bmiResult}</b><br></br>You are <b>{status}</b></p>
      </form>
    </div>

  )
}

export default App
