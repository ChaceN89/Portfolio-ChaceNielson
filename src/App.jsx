import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return(
    <h1 className="text-3xl font-bold underline text-pink-600 h-screen flex items-center justify-center">
        Hello world!
      </h1>

  )
}
