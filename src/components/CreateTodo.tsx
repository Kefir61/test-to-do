import React, { useState } from 'react'
import { useInput } from '../hooks/use-input';

type CreateTodoProps = {
     addTodo: (value: string) => void;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ addTodo }) => {

     const input = useInput('')
     const onClickAddTodo = () => {
          addTodo(input.value)
          input.onClear()
     }
     const onEnterDown = (e: React.FormEvent) => {
          input.onChange(e)
          addTodo(input.value)
          input.onClear()
     }
     return (
          <>
               <div className='todo--create'>
                    <input
                         type="text"
                         placeholder='What needs to be done?'
                         className='todo--create__input'
                         value={input.value}
                         onChange={(e) => input.onChange(e)}
                         onKeyDown={(e) => e.key === 'Enter' && onEnterDown(e)} />
                    <button className='todo--create__button' onClick={onClickAddTodo}></button>
               </div>
          </>
     )
}

export default CreateTodo