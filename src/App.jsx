import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactComponent from './components/pure/contact';
import { Contact } from './models/contact.class';


function App() {
  const contacto = new Contact('Luis',"Gil",'asd@aaa.com',true)
  return (
    <>
      <h1>EJERCICIO</h1>

      <TaskListComponent></TaskListComponent>

      
  
    </>
  );
}

export default App;
