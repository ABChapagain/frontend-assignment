import { useState } from 'react'

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key)
      return value ? JSON.parse(value) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue // Return the initialValue on error
    }
  })

  const setValue = (value: T | ((prevState: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
      setState(valueToStore)
    } catch (error) {
      console.error(error)
    }
  }

  return [state, setValue] as const // Use 'as const' to specify the exact tuple type
}

export default useLocalStorage
