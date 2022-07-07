import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/TaskForm';

import '../../Styles/task.css'


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
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;

        setTasks(tempTasks);
    }

    const deleteTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);

        setTasks(tempTasks);
    }

    const addTask = (task) => {
        const temp = tasks.filter(item => item.name === task.name);
        console.log(temp.length)
        if(temp.length == 0) {
            const tempTasks = [...tasks];
            tempTasks.push(task);
            setTasks(tempTasks);
        }
        else{
            alert('Ya existe una tarea con ese nombre.')
        }
    }


    const TasksTable = () => {

        if (tasks.length > 0) {
            return (
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
                        {tasks.map((task, index) => {
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
                </table>)
        }
        else{
            return (
                <div>
                    <h3 className='p-3'>
                        NO HAY TAREAS EN EL SISTEMA
                    </h3>
                    <h4>Inserta una nueva...</h4>
                </div>
        )}
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
                        <div className='card-body p-1'
                            data-mdb-perfect-scrollbar='true'
                            style={{ position: 'relative', height: '400px' }}>
                            <TasksTable />
                        </div>
                       
                </div>
                <TaskForm add={addTask}></TaskForm>
            </div>

        </>
    );
};


export default TaskListComponent;
