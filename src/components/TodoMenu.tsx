import React, { useEffect, useState } from 'react'
import CreateTodo from './CreateTodo'
import SortTodo from './SortTodo';
import TodoItem from './TodoItem'

type TodoItem =
     {
          title: string;
          isCompleted: boolean
     }
const TodoMenu: React.FC = () => {
     const [todoItems, setTodoItems] = useState<TodoItem[]>([
          {
               title: 'Тестовое задание',
               isCompleted: true
          },
          {
               title: 'Прекрасный код',
               isCompleted: false
          },
          {
               title: 'Покрытие тестами',
               isCompleted: true
          }])
     const [sortTodoItems, setSortTodoItems] = useState<TodoItem[]>([...todoItems])
     const [sortPopup, setSortPopup] = useState<string>('all')

     const todoCompleted = (number: number) => {
          const newTodoItems = [...todoItems]
          setTodoItems(newTodoItems.map((item, id) => (
               id == number ?
                    {
                         title: item.title,
                         isCompleted: !item.isCompleted
                    } : item
          )))
     }
     const todoRemove = (number: number) => {
          setTodoItems([...todoItems].filter((item, id) => id != number))
     }
     const addTodo = (title: string) => {
          setTodoItems([...todoItems, {
               title,
               isCompleted: false
          }])
     }

     const onClickSort = (title: string) => {
          setSortPopup(title)
     }

     const drawingTodoItems = (sortPopup: string, oldTodoItems: TodoItem[]) => {
          const newTodoItems =
               (sortPopup == 'active') ? [...oldTodoItems].filter((item) => item.isCompleted === false) :
                    (sortPopup == 'completed') ? [...oldTodoItems].filter((item) => item.isCompleted === true)
                         : [...oldTodoItems]
          return newTodoItems
     }

     useEffect(() => {
          const newTodoItems = drawingTodoItems(sortPopup, todoItems)
          setSortTodoItems(newTodoItems)
     }, [sortPopup, todoItems])


     return (
          <div className='todo'>
               <CreateTodo addTodo={addTodo} />
               <div className='todo--header'>
                    <h2 className='todo--header__title'>Your tasks</h2>
                    <SortTodo onClick={onClickSort} title={sortPopup} />
               </div>
               {
                    sortTodoItems.map((item, id) => <TodoItem key={id} id={id} title={item.title} isCompleted={item.isCompleted} onClickCompleted={todoCompleted} onClickRemove={todoRemove} />)
               }
               <div className='todo--clear' onClick={() => setTodoItems([])}>Clear Complited</div>
          </div>
     )
}

export default TodoMenu