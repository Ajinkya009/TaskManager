import axios from "axios";
import {SET_PROJECTS,SET_CURRENT_PROJECT,GET_ERRORS} from "./types";

export const getProjects= () => dispatch=>{
    axios.post('/api/project/all',{})
    .then((res)=>{
        const {projects} = res.data.body;
        dispatch(setProjects(projects));
    })
    .catch(err=>{
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
    });

}

export const createNewProject = (name,description,duration,history)=> dispatch =>{
    axios.post('/api/project/create',{name,description,duration})
    .then((res)=>{
        const {projectId} = res.data.body;
        history.push(`/project/${projectId}`);
    })
    .catch(err=>{
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
    });
}

export const loadProject = (id,history)=>dispatch=>{
    axios.get(`/api/project/${id}`)
    .then((res)=>{
        let {projectData} = res.data.body;
        projectData = {...projectData,admin:projectData.admin.name};
        dispatch(setCurrentProject(projectData));
    })
    .catch(err=>{
        history.push('/dashboard');
    });
}

export const updateProjectDetails = (id,name,description,duration)=> dispatch =>{
    axios.post('/api/project/update',{id,name,description,duration})
    .then((res)=>{
        let {projectData} = res.data.body;
        projectData = {...projectData,admin:projectData.admin.name};
        dispatch(setCurrentProject(projectData));
    })
    .catch(err=>{
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
    });
}

export const deleteProject = (id,history) => dispatch =>{
    axios.post('/api/project/delete',{id:id})
    .then((res)=>{
        history.push('/dashboard');
    })
    .catch(err=>{
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
    });
}

export const setProjects = (projects)=>{
    return {
        type:SET_PROJECTS,
        payload: projects
    };
}

export const setCurrentProject = (projectData)=>{
    return{
        type:SET_CURRENT_PROJECT,
        payload:projectData
    }
}