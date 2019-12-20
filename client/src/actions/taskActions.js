import axios from "axios";
import {SET_TASKS,SET_CURRENT_TASK,GET_ERRORS} from "./types";


export const createNewTask = (projectId,name,history)=> dispatch =>{
    axios.post('/api/task/create',{projectId,name})
    .then((res)=>{
        const {taskId} = res.data.body;
        history.push(`/project/${projectId}/task/${taskId}`);
    })
    .catch(err=>{
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
    });
}

export const loadTask = (id,history)=>dispatch=>{
    axios.get(`/api/task/${id}`)
    .then((res)=>{
        let {taskData} = res.data.body;
        let assigneeData = "";
        taskData.assignee.forEach(data=>{assigneeData+=data.name+","});
        assigneeData = assigneeData.slice(0,-1);
        taskData = {...taskData,admin:taskData.admin.name,assignees:assigneeData};
        dispatch(setCurrentTask(taskData));
    })
    .catch(err=>{
        history.push('/dashboard');
    });
}

export const updateTaskDetails = (task,history)=> dispatch =>{
    axios.post(`/api/task/update`,task)
    .then((res)=>{
        history.push(`/project/${task.project}`);
    })
    .catch(err=>{
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
    })
    
}

export const deleteTask = (taskId,projectId,history) => dispatch =>{
    axios.post('/api/task/delete',{id:taskId})
    .then((res)=>{
        history.push(`/project/${projectId}`);
    })
    .catch(err=>{
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
    });
}

export const addAssignees = (projectId,taskId,assignees) => dispatch =>{
    axios.post('/api/task/addAssignees',{projectId,taskId,assignees})
    .then((res)=>{
        let {taskData} = res.data.body;
        let assignees = "";
        taskData.assignee.forEach(d=>{assignees+=d.name+","});
        assignees = assignees.slice(0,-1);
        taskData = {...taskData,admin:taskData.admin.name,assignees:assignees};
        dispatch(setCurrentTask(taskData));
    })
    .catch(err=>{
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
    });
}


export const setCurrentTask = (taskData)=>{
    return{
        type:SET_CURRENT_TASK,
        payload:taskData
    }
}