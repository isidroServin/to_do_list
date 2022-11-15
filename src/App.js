import Card from "./components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import { useEffect, useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import EmptyList from "./components/EmptyList";

function App() {
  const [lista, setLista] = useState([]);

  useEffect(() =>{
  },[lista]);

  const [newTaskDescription,setNewTaskDescription] = useState("");

  useEffect(() =>{

  },[newTaskDescription]);

  const taskDone =  (e) => {
    let newTaskList = lista.filter(l => 
      {
        return l.id !== parseInt(e.target.id);
      });
    setLista(newTaskList);
  };

  const addTask = (newTaskDescrip) => {
    let newTask = {
      id : lista.length + 1,
      task: newTaskDescrip
    };
    setLista([
      ...lista, newTask
    ]);
    setNewTaskDescription("");
  };
  
  const eventHandler = (e) => {
    setNewTaskDescription(e.target.value);
  };
  return (
    <div>
      <Header/>
      <div className="container" >
        <NewTaskForm newTaskDescription={newTaskDescription}  eventHandler={eventHandler}  addTask = {addTask} />
        {
          lista.length === 0 ? <EmptyList/> : 
          lista.map(t => {
            return <Card taskDescription= {t.task} taskInfo={t.id} doIt={taskDone} key={t.id}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
