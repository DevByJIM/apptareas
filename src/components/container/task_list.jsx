import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task
        (
            'Example',
            'Default Description',
            false,
            LEVELS.NORMAL
        );

    const changeState = (id) => {
        console.log('TODO:Cambiar estado de la tarea');
    }

    return (
        <>
            <div>
                <h1>Your Tasks:</h1>
            </div>

            <TaskComponent task={defaultTask}></TaskComponent>
        </>
    );
};


export default TaskListComponent;
