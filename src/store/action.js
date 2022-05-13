export const SET_TASKS = 'SET_TASKS';
export const SET_TASKS_ID = 'SET_TASKS';

export const setTasks = tasks => dispatch =>{
    dispatch({
        type:SET_TASKS,
        payload:tasks,
    });
}

export const setTaskID = taskID => dispatch =>{
    dispatch({
        type:SET_TASK_ID,
        payload:taskID,
    });
}