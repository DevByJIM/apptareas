import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/TaskForm';


const TaskListComponent = () => {

    const defaultTasks = [
        new Task
            ('Example', 'Default Description', true, LEVELS.NORMAL),
        new Task
            ('Example1', 'Default Description1', false, LEVELS.URGENT),
        new Task
            ('Example2', 'Default Description2', false, LEVELS.BLOCKING),
    ]

    const [tasks, setTasks] = useState(defaultTasks);

    useEffect(() => {
        console.log("Task State has benn modified")
        return () => {
            console.log("TaskList component us going to unmount...");
        };
    }, [tasks]);

    const completeTask = (task) => {
        console.log('Completar tarea', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;

        setTasks(tempTasks);
    }

    const deleteTask = (task) => {
        console.log('del tarea', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);

        setTasks(tempTasks);
    }

    const addTask = (task) =>{
        console.log('add tarea', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }





    return (
        <>
            <div className='col-12 card p-3 '>
                <div className='card p-1'>
                    <div className='card-header p-2'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {(tasks.length>0)
                    ? <div className='card-body p-1'
                        data-mdb-perfect-scrollbar='true'
                        style={{ position: 'relative', height: '400px' }}>
                        <table style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index) => {
                                    return (
                                        <TaskComponent
                                            key={index}
                                            task={task}
                                            complete={completeTask}
                                            delTask={deleteTask}
                                            >

                                        </TaskComponent>
                                    )
                                })}
                                {/* <TaskComponent task={defaultTask1}></TaskComponent> */}
                            </tbody>
                        </table>
                    </div>
                    :<h3 className='p-3'>NO HAY TAREAS EN EL SISTEMA</h3>}
                </div>
                <TaskForm add = {addTask}></TaskForm>
            </div>

        </>
    );
};


export default TaskListComponent;
