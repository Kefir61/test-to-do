import { useEffect, useState } from "react";
import { Calendar } from "./components/Calendar";
import Clock from "./components/Clock/Clock";
import TodoMenu from "./components/TodoMenu";

function App() {
  const [selectedDate, setSelectedDay] = useState(new Date());


  return (
    <div className="wrapper">
      <h1 className="title">todos</h1>
      <Clock />
      <TodoMenu selectedDate={selectedDate} />
      <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />
    </div>
  );
}

export default App;
