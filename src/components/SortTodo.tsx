import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

type PopupClick = React.MouseEvent<HTMLBaseElement> & {
     path: Node[]
}

type SortTodoProps = {
     onClick: (title: string) => void;
     title: string;
}

const SortTodo: React.FC<SortTodoProps> = ({ onClick, title }) => {

     const [isVisible, setIsVisible] = useState(false)

     const sortRef = useRef<HTMLDivElement>(null)

     const onClickSortPopup = (title: string) => {
          onClick(title)
          setIsVisible(false)
     }

     useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
               const _event = event as unknown as PopupClick

               if (sortRef.current && !_event.path.includes(sortRef.current)) {
                    setIsVisible(false)
               }
          }
          document.body.addEventListener('click', handleClickOutside)

          return () => document.body.removeEventListener('click', handleClickOutside)
     }, [])

     return (
          <div ref={sortRef} >
               <div className="sort">
                    <div className='sort--label'>
                         <b>Sorting by:</b>
                         <span onClick={() => setIsVisible(!isVisible)}> {title}</span>
                    </div>
               </div>
               {isVisible &&
                    <div className="sort--popup">
                         <ul>
                              <li
                                   onClick={() => onClickSortPopup('all')}>
                                   all
                              </li>
                              <li
                                   onClick={() => onClickSortPopup('completed')}>
                                   comleted
                              </li>
                              <li
                                   onClick={() => onClickSortPopup('active')}>
                                   active
                              </li>
                         </ul>
                    </div>
               }

          </div>)
}

export default SortTodo