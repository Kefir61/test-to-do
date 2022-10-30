import React from 'react'
import cart from '../assets/icons/cart.svg'

type TodoItemProps = {
     id: number;
     title: string;
     isCompleted: boolean;
     onClickCompleted: (id: number) => void;
     onClickRemove: (id: number) => void;
}
const TodoItem: React.FC<TodoItemProps> = ({ title, isCompleted, onClickCompleted, id, onClickRemove }) => {
     return (
          <div className={`todo--item ${isCompleted ? 'completed' : ''}`}>
               <button
                    className={`todo--item__button ${isCompleted ? 'completed--button' : ''}`}
                    onClick={() => onClickCompleted(id)}>
               </button>
               <div className='todo--item__title'>{title}</div>
               <img className='todo--item__delete' src={cart} onClick={() => onClickRemove(id)} />
          </div>
     )
}

export default TodoItem