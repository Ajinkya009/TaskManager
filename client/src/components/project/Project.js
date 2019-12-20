import React, { Component,useState,useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {compose} from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { updateProjectDetails,loadProject,deleteProject } from "../../actions/projectActions";
import { createNewTask } from "../../actions/taskActions";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });
  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: "#3f51b5",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
  

const createTask = (e,props)=>{
    e.preventDefault();
    Swal.fire({
        title: 'Create new task',
        html:'<label>Name: </label> <input id="taskName" class="swal2-input" required>',
        inputAttributes: {
          autocapitalize: 'off'
        },
        preConfirm:()=>{
            const name = document.getElementById('taskName').value;
            console.log(name);
            if(name==""){
                Swal.showValidationMessage(
                    "Enter name of the task."
                );
            }
        },
        showCancelButton: true,
        confirmButtonText: 'Create',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
      }).then((inputValue) => {
          if(!inputValue.dismiss){
                const name = document.getElementById('taskName').value;
                props.createNewTask(props.currentProject._id,name,props.history);
          }
      });
}

function Project(props){

    useEffect(()=>{
        props.loadProject(props.match.params.projectId,props.history);
    },[]);
    const [currentProject,setCurrentProject] = useState(props.currentProject);
    const [buttonStatus,enableButton] = useState(false);
    const [tasks, setTasks] = useState(props.currentProject.tasks);
    function onChange(e){
        let target = e.target.id;
        let val = e.target.value;
        let cp = currentProject;
        cp[target] = val;
        setCurrentProject({...cp,[target]:val});
        if(!buttonStatus) enableButton(true);
    }

    useEffect(()=>{
        setCurrentProject(props.currentProject);
        setTasks(props.currentProject.tasks);
        console.log(props.currentProject);
    },[props.currentProject]);


    function updateProject(e){
        props.updateProjectDetails(currentProject._id,currentProject.name,currentProject.description,currentProject.duration);
    }

    function deleteProj(e){
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
                props.deleteProject(currentProject._id,props.history);
            }
        })
    }

    const {projects,classes} = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return(
        <div >
            <div className="container" style={{border:"1px solid grey",textAlign:"center", borderRadius:"8px",marginTop:"1rem"}}>
                <label style={{color:"black",fontSize:"20px"}}> Project Details
                <div className="row">
                    <div className="col s8 offset-s2"></div>
                    <form >
                        <div className="input-field col s3">
                                <label className="active" >Name</label>
                                <input
                                onChange={onChange}
                                value={currentProject.name || " "}
                                id="name"
                                type="text"
                                />
                            
                        </div>
                        <div className="input-field col s1">
                                <label className="active" >Duration</label>
                                <input
                                onChange={onChange}
                                value={currentProject.duration || " "}
                                id="duration"
                                type="text"
                                />
                            
                        </div>
                        <div className="input-field col s5">
                                <label className="active" >Start Date</label>
                                <input
                                disabled
                                value={currentProject.startDate || " "}
                                id="startDate"
                                type="text"
                                />
                            
                        </div>
                        <div className="input-field col s3">
                                <label className="active" >Admin</label>
                                <input
                                disabled
                                value={currentProject.admin || " "}
                                id="startDate"
                                type="text"
                                />
                            
                        </div>
                        <div className="input-field col s12">
                                <label className="active" >Description</label>
                                <input
                                onChange={onChange}
                                value={currentProject.description || " "}
                                id="description"
                                type="text"
                                />
                        </div>
                        <div className="input-field col s6">
                            <button disabled={!buttonStatus && !props.auth.user.name===currentProject.admin}  onClick={updateProject} className="btn btn-md waves-effect waves-light hoverable blue accent-3">
                                Update
                            </button>
                        </div>
                        <div className="input-field col s6">
                            <button disabled={!buttonStatus && !props.auth.user.name===currentProject.admin}  onClick={deleteProj} className="btn btn-md waves-effect waves-light hoverable red accent-3">
                                Delete
                            </button>
                        </div>
                    </form>
                </div>
                </label>
            </div>
            <div>
                {currentProject.tasks.length==0?
                    <div className="row">
                        <div className="col s12 center-align">
                        <h4>
                            <b>Hey there,</b>
                            <p className="flow-text grey-text text-darken-1">
                            Would you like to create first task for this project?
                            </p>
                        </h4>
                        <button
                            style={{
                            width: "250px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem",
                            marginBottom:"2rem"
                            }}
                            onClick={(e)=>{createTask(e,props)}}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Create Task
                        </button>
                        </div>        
                    </div>:
                    <div className="row" style={{"width":"100%"}}>
                        <div className="col s12 center-align">
                        <button
                            style={{
                            width: "250px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem",
                            marginBottom: "1rem"
                            }}
                            onClick={(e)=>{createTask(e,props)}}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Create Task
                        </button>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Start Date</StyledTableCell>
                                <StyledTableCell align="center">End Date</StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tasks.map(task => (
                                <StyledTableRow key={task._id}>
                                    <StyledTableCell component="th" scope="row">
                                    <Link to={`/project/${currentProject._id}/task/${task._id}`}>{task.name}</Link>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{task.startDate}</StyledTableCell>
                                    <StyledTableCell align="right">{task.endDate}</StyledTableCell>
                                    <StyledTableCell align="right">{task.status}</StyledTableCell>
                                </StyledTableRow>
                                ))}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={tasks.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                        </div>
                    </div>}
            </div>
        </div>
    )
}

Project.propTypes = {
    auth: PropTypes.object.isRequired,
    updateProjectDetails: PropTypes.func.isRequired,
    loadProject: PropTypes.func.isRequired,
    createNewTask: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    currentProject: state.projects.currentProject
});
export default compose( withStyles(styles), connect(
    mapStateToProps,
    { updateProjectDetails,loadProject,createNewTask,deleteProject },
))(Project);