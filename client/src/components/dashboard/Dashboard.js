import React, { Component,useState,useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {compose} from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { getProjects,createNewProject } from "../../actions/projectActions";
import Swal from 'sweetalert2';
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

const onClick = (e,props) => {
  e.preventDefault();
  Swal.fire({
    title: 'Create new project',
    html:'<input id="name" class="swal2-input" placeholder="Enter name of the project">' +
    '<input id="description" class="swal2-input" placeholder="Enter description of the project">'+
    '<input id="duration" class="swal2-input" placeholder="Enter duration of the project">',
    inputAttributes: {
      autocapitalize: 'off'
    },
    preConfirm:()=>{
      const name = document.getElementById('name').value;
      const description = document.getElementById('description').value;
      const duration = document.getElementById('duration').value;
      if(name=="" || description=="" || duration==""){
          Swal.showValidationMessage(
              "Enter all details"
          );
      }
    },
    showCancelButton: true,
    confirmButtonText: 'Create',
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !Swal.isLoading()
  }).then((inputValue) => {
      if(!inputValue.dismiss){
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const duration = document.getElementById('duration').value;
        props.createNewProject(name,description,duration,props.history);
      }
  });
};

function Dashboard(props) {
  useEffect(()=>{
    props.getProjects();
  },[])
  const { user } = props.auth;
  const {projects,classes} = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
      <div className="container valign-wrapper">
        {projects.length==0?
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a Task Manager{" "}app 👏
              </p>
            </h4>
            <button
              style={{
                width: "250px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={(e)=>{onClick(e,props)}}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Add Project
            </button>
          </div>
        </div>:<div className="row" style={{"width":"100%"}}>
          <div className="col s12 center-align">
          <button
              style={{
                width: "250px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginBottom: "1rem",
                backgroundColor: "rgb(220, 0, 78)"
              }}
              onClick={(e)=>{onClick(e,props)}}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Add Project
            </button>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Duration</StyledTableCell>
                    <StyledTableCell align="center">Start Date</StyledTableCell>
                    <StyledTableCell align="center">Admin</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projects.map(project => (
                    <StyledTableRow key={project._id}>
                      <StyledTableCell component="th" scope="row">
                        <Link to={`/project/${project._id}`}>{project.name}</Link>
                      </StyledTableCell>
                      <StyledTableCell align="right">{project.duration}</StyledTableCell>
                      <StyledTableCell align="right">{project.startDate}</StyledTableCell>
                      <StyledTableCell align="right">{project.admin.name}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={projects.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            </div>
          </div>}
      </div>
    );
}
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  logoutUser: PropTypes.func.isRequired,
  getProjects: PropTypes.func.isRequired,
  createNewProject: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  projects: state.projects.all
});
export default compose( withStyles(styles), connect(
  mapStateToProps,
  { logoutUser,getProjects,createNewProject },
))(Dashboard);