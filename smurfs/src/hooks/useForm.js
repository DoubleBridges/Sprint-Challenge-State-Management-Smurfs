import { useState } from 'react'

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue)

  const handleChanges = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const resetForm = () => {
    setValues({
        name: '',
        age: '',
        height: ''
    })
  }
  return [values, handleChanges, resetForm]
}