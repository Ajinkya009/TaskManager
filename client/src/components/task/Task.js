import React, { Component,useState,useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {compose} from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { setErrors } from "../../actions/errorAction";
import moment from "moment";
import { ToastContainer, toast } from 'react-toastify';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import { loadTask,updateTaskDetails,addAssignees,deleteTask } from "../../actions/taskActions";


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

function add(e,props){
    e.preventDefault();
    Swal.fire({
        title: 'Add Assignees',
        html:'<label>Email Id: </label> <input id="addAssignees" placeholder="Add email ids separated by comma(,)" class="swal2-input" required>',
        inputAttributes: {
          autocapitalize: 'off'
        },
        preConfirm:()=>{
            const name = document.getElementById('addAssignees').value;
            if(name==""){
                Swal.showValidationMessage(
                    "Enter valid mail id."
                );
            }
        },
        showCancelButton: true,
        confirmButtonText: 'Create',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
      }).then((inputValue) => {
          if(!inputValue.dismiss){
                const emailIds = document.getElementById('addAssignees').value;
                props.addAssignees(props.currentTask.project,props.currentTask._id,emailIds);
          }
      }).catch(err=>{
          console.log(err);
      });
}


function goBack(e,props){
    props.history.push(`/project/${props.currentTask.project}/`);
}

function Task(props){
    const classes = useStyles();
    useEffect(()=>{
        props.loadTask(props.match.params.taskId,props.history);
    },[]);
    const [currentTask,setCurrentTask] = useState(props.currentTask);
    const [status,setStatus] = useState(props.currentTask.status);
    const [buttonStatus,enableButton] = useState(false);

    function onChange(e){
        let target = e.target.id;
        let val = e.target.value;
        if(target!="assignee"){
            setCurrentTask({...currentTask,[target]:val});
        }
        if(!buttonStatus) enableButton(true);
    }

    function updateStatus(e){
        let target = e.target.id;
        let val = e.target.value;
        if(!buttonStatus) enableButton(true);
        setStatus(e.target.value);
        setCurrentTask({...currentTask,["status"]:val});
    }

    useEffect(()=>{
        setCurrentTask(props.currentTask);
        setStatus(props.currentTask.status);
    },[props.currentTask]);

    useEffect(()=>{
        if(props.errors.response){
            toast.error(props.errors.response.data.error,{position:toast.POSITION.TOP_RIGHT});
            props.setErrors({});
        }
        
    },[props.errors])

    function callUpdateTask(e){
        e.preventDefault();
        props.updateTaskDetails(currentTask,props.history);
    }

    function callDeleteTask(e){
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                props.deleteTask(currentTask._id,currentTask.project,props.history);
            }
        })
        
    }

    return(
        <div >
            <div className="container" style={{border:"1px solid grey",textAlign:"center", borderRadius:"8px",marginTop:"1rem"}}>
                <label style={{color:"black",fontSize:"20px"}}> Task Details
                <div className="row">
                    <div className="col s8 offset-s2"></div>
                    <form >
                        <div className="input-field col s4">
                                <label className="active" >Name</label>
                                <input
                                    onChange={onChange}
                                    value={currentTask.name || " "}
                                    id="name"
                                    type="text"
                                />
                            
                        </div>
                        <div className="input-field col s4">
                                <label className="active">Admin</label>
                                <input
                                    disabled
                                    value={currentTask.admin || " "}
                                    id="startDate"
                                    type="text"
                                />
                            
                        </div>
                        <div className="input-field col s4">
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    onChange={updateStatus}
                                >
                                    <MenuItem value={"to-do"}>To Do</MenuItem>
                                    <MenuItem value={"in-progress"}>In Progress</MenuItem>
                                    <MenuItem value={"completed"}>Completed</MenuItem>
                                </Select>
                        </div>
                        <div className="input-field col s6">
                                <label className="active">Start Date</label>
                                <input
                                    onChange={onChange}
                                    value={currentTask.startDate || " "}
                                    id="startDate"
                                    type="text"
                                />
                            
                        </div>
                        <div className="input-field col s6">
                                <label className="active">End Date</label>
                                <input
                                    onChange={onChange}
                                    value={currentTask.endDate || " "}
                                    id="endDate"
                                    type="text"
                                />
                            
                        </div>
                        <div className="input-field col s12">
                                <label className="active" >Description</label>
                                <input
                                onChange={onChange}
                                value={currentTask.description || " "}
                                placeholder="Task Description"
                                id="description"
                                type="text"
                                />
                        </div>
                        <div className="input-field col s12">
                            <label className="active">Assignees</label>
                            <input
                                value = {currentTask.assignees || " "}
                                onChange={onChange}
                                placeholder="Assignees"
                                id="assignee"
                                type="text"
                            />
                            
                        </div>
                        <div className="input-field col s3">
                            <button disabled={!buttonStatus}  onClick={callUpdateTask} className="btn btn-md waves-effect waves-light hoverable blue accent-3">
                                Update
                            </button>
                        </div>
                        <div className="input-field col s3">
                            <button   onClick={callDeleteTask} className="btn btn-md waves-effect waves-light hoverable red accent-3">
                                Delete
                            </button>
                        </div>
                        <div className="input-field col s3">
                            <button  onClick={(e)=>{add(e,props)}} className="btn btn-md waves-effect waves-light hoverable blue accent-3">
                                Add Assignees
                            </button>
                        </div>
                        <div className="input-field col s3">
                            <button  onClick={(e)=>{goBack(e,props)}} className="btn btn-md waves-effect waves-light hoverable blue accent-3">
                                Go Back
                            </button>
                        </div>
                    </form>
                </div>
                </label>
            </div>
        </div>
    )
}

Task.propTypes = {
    auth: PropTypes.object.isRequired,
    updateTaskDetails: PropTypes.func.isRequired,
    addAssignees: PropTypes.func.isRequired,
    loadTask: PropTypes.func.isRequired,
    setErrors: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    currentTask: state.tasks.currentTask
});
export default connect(
    mapStateToProps,
    { loadTask,updateTaskDetails,addAssignees,setErrors,deleteTask },
)(Task);