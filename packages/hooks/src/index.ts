import { useState } from 'react'

export const useCount = () => {
  const [count, setCount] = useState(0)
  const inc = () => {
    setCount(count + 1)
  }
  const dec = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }
  const set = (val: number) => {
    setCount(val)
  }
  return { count, inc, dec, reset, set } as const
}
