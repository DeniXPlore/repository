import { useState } from "react"

const UseLocalStarage = <T>(key: string, initialValue: T | (() => T)) => {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key)
  })

}
export default UseLocalStarage