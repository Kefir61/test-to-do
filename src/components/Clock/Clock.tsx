import React, { useState } from 'react'
import './Clock.scss'
function Clock() {
     const [active, setActive] = useState(false)
     const mounthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]
     const weekDayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
     const date = new Date();
     const mounth = mounthArr[date.getMonth()]
     const weekDay = weekDayArr[date.getDay()]
     return (
          <div className='clock' onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}>
               <div className={`clock--front ${active ? 'active--clock' : ''}`}>
                    {active
                         ?
                         <span>
                              {date.getMinutes()}
                         </span>
                         : <div className='clock--front__container'>
                              <span>{mounth}</span>
                              <span className='clock--front__date'>{date.getDate()}</span>
                              <span>{weekDay}</span>
                         </div>

                    }
               </div>
               <div className={`clock--right ${active ? 'active--clock' : ''}`}>{active ? date.getSeconds() : ''}</div>
               <div className={`clock--left ${active ? 'active--clock' : ''}`}>{active ? date.getHours() : ''}</div>
          </div>
     )
}

export default Clock