
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';

const TaskComponent = ({ task, complete, delTask }) => {

    useEffect(() => {
        return () => {

        }
    }, [task])

    const taskLevelBadge = () => {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
                break;
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
                break;
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )
                break;
            default:

                break;
        }
    }
    const taskIconCompleted = () => {
        if (task.completed)
            return (<i onClick={() =>complete(task)} className='bi-toggle-on' 
               ></i>)
        else
            return (<i onClick={() =>complete(task)} className='bi-toggle-off'  
                ></i>)
    }


return (
    <tr className={task.completed? 'fw-normal task-completed': 'fw-normal task-pending'}>
        <th>
            <span className='ms-2'>{task.name}</span>
        </th>
        <td className='align-middle'>
            <span>{task.description}</span>
        </td>
        <td className='align-middle'>
            {taskLevelBadge()}
        </td>
        <td className='align-middle'>

            {taskIconCompleted()}
            <i className='bi-trash' onClick={() =>delTask(task)}
                style={{ color: 'tomato', fontSize: '20px' }}></i>
        </td>
    </tr>
)
};

TaskComponent.prototype = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    delTask: PropTypes.func.isRequired,
};

export default TaskComponent;