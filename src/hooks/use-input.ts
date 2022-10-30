import React, { useEffect, useState } from 'react'


export const useInput = (initialValue: string) => {
     const [value, setValue] = useState(initialValue)

     const onChange = (e: any) => {
          setValue(e.target.value)
     }

     const onClear = () => {
          setValue('')
     }

     return {
          value,
          onChange,
          onClear
     }
}