import {ChangeEventHandler, useState} from 'react'

type UseNumber = (
  init: number
) => [number, ChangeEventHandler<HTMLInputElement>]

export const useNumber: UseNumber = init => {
  const [value, setValue] = useState(init)
  return [
    value,
    ({target: {value}}) => {
      if (value === '') setValue(0)
      else setValue(parseInt(value))
    },
  ]
}
