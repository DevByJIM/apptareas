import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactComponent from './components/pure/contact';
import LoginForm from './components/pure/forms/LoginForm';
import RegisterForm from './components/pure/forms/RegisterForm';
import { Contact } from './models/contact.class';


function App() {
  const contacto = new Contact('Luis',"Gil",'asd@aaa.com',true)
  return (
    <>
      <h1>EJERCICIO</h1>

      <TaskListComponent></TaskListComponent>

      <RegisterForm/>
      
  
    </>
  );
}

export default App;
