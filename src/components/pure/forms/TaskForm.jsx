import { useRef } from "react";
import ProtoTypes from 'prop-types'
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add }) => {

  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-iten-center mb4'>
      <div className="form-outline flex-fill">
        <input
          ref={nameRef}
          id='inputName'
          type='text'
          placeholder="Ingresa nombre de la tarea"
          className="form-control mt-1"
          required autoFocus />
        <input
          ref={descriptionRef}
          id='inputDescription'
          type='text'
          placeholder="Ingresa descripción de la tarea"
          className="form-control mt-1"
          required />
        <label
          htmlFor='SelectLevel'
          className="sr-only mt-1 me-2"
        >Priority</label>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success btn-lg ms-2 mt-1">Add Task</button>
    </form>
  )
}

TaskForm.protoTypes = {
  add: ProtoTypes.func.isRequired,
}
export default TaskForm;