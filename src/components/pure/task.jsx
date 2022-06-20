
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

const TaskComponent = ({ task }) => {
    return (
        <>
            <h2>
                Nombre: {task.name}
            </h2>
            <h3>
                Descripción: {task.description}
            </h3>
            <h4>
                Level: {task.level}
            </h4>
            <h5>
                Esta tarea esta: {task.completed
                    ? 'COMPLETADA'
                    : 'PENDIENTE'}
            </h5>
        </>
    )
};

TaskComponent.prototype = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent;