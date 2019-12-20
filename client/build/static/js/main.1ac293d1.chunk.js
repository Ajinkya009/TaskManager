(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=(a(102),a(26)),s=a(18),i=a(31),u=a(32),d=a(37),m=a(15),p=a(41),f=a(51),h=a.n(f),b=a(11),E=a.n(b),g=function(e){e?E.a.defaults.headers.common.Authorization=e:delete E.a.defaults.headers.common.Authorization},v="GET_ERRORS",w=function(e){return{type:"SET_CURRENT_USER",payload:e}},j=function(){return function(e){localStorage.removeItem("jwtToken"),g(!1),e(w({}))}},y=a(16),N=a(40),O=(a(126),a(19)),k=a(80),C=a(13),T=a(60),x={isAuthenticated:!1,user:{},loading:!1},S={},D=(a(60),{all:[],currentProject:{name:"",description:"",duration:"",tasks:[],_id:"",startDate:"",admin:"",__v:0}}),P=(a(60),{all:[],currentTask:{name:"",description:"",startDate:"",endDate:"",status:"",assignee:""}}),_=Object(O.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(C.a)({},e,{isAuthenticated:!T(t.payload),user:t.payload});case"USER_LOADING":return Object(C.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.payload;default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROJECTS":return Object(C.a)({},e,{all:t.payload});case"SET_CURRENT_PROJECT":return Object(C.a)({},e,{currentProject:t.payload});default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TASKS":return Object(C.a)({},e,{all:t.payload});case"SET_CURRENT_TASK":return Object(C.a)({},e,{currentTask:t.payload});default:return e}}}),A=[k.a],R=Object(O.e)(_,{},Object(O.d)(O.a.apply(void 0,A),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||O.d)),I=a(17),B=a(168),U=a(171),L=a(173),z=a(174),M=a(175),G=a(82),W=a.n(G),V=a(184),F=a(83),J=Object(B.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var X=Object(y.b)((function(e){return{auth:e.auth}}),{logoutUser:j})((function(e){var t=J(),a=r.a.useState(null),n=Object(I.a)(a,2),c=n[0],o=n[1],l=Boolean(c);return r.a.createElement("div",{className:t.root},r.a.createElement(U.a,{position:"static"},r.a.createElement(L.a,null,r.a.createElement(z.a,{variant:"h6",className:t.title},r.a.createElement(m.b,{to:"/",style:{color:"white"}},r.a.createElement("i",{className:"material-icons left"},"TASK MANAGER"))),e.auth.isAuthenticated&&r.a.createElement("div",null,r.a.createElement(M.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit"},r.a.createElement(W.a,null)),r.a.createElement(F.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){o(null)}},r.a.createElement(V.a,{onClick:function(t){t.preventDefault(),o(null),e.logoutUser()}},"Logout"))))))})),Y=(n.Component,a(10)),H=a(24),K=a.n(H),q=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onChange=function(t){e.setState(Object(Y.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement(m.b,{to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Register")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",r.a.createElement(m.b,{to:"/login"},"Log in"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:K()("",{invalid:e.name})}),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("span",{className:"red-text"},e.name)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:K()("",{invalid:e.email})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:K()("",{invalid:e.password})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:K()("",{invalid:e.password2})}),r.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.a.createElement("span",{className:"red-text"},e.password2)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}]),t}(n.Component),$=Object(y.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){E.a.post("/api/user/signUp",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:v,payload:e.response.data})}))}}})(Object(p.g)(q)),Q=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onChange=function(t){e.setState(Object(Y.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&(console.log(e.errors),N.a.error(e.errors.error,{position:N.a.POSITION.TOP_RIGHT}),this.setState({errors:e.errors}))}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Login")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",r.a.createElement(m.b,{to:"/register"},"Register"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:K()("",{invalid:e.email||e.emailnotfound})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:K()("",{invalid:e.password||e.passwordincorrect})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Login"))))))}}]),t}(n.Component),Z=Object(y.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){E.a.post("/api/user/login",e).then((function(e){var a=e.data.body.token;localStorage.setItem("jwtToken",a),g(a);var n=h()(a);t(w(n))})).catch((function(e){return t({type:v,payload:e.response.data})}))}}})(Q),ee=a(3),te=Object(y.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(ee.a)(e,["component","auth"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))})),ae=function(e){return{type:"SET_PROJECTS",payload:e}},ne=function(e){return{type:"SET_CURRENT_PROJECT",payload:e}},re=a(20),ce=a.n(re),oe=a(5),le=a(179),se=a(181),ie=a(176),ue=a(178),de=a(180),me=a(177),pe=a(183),fe=a(133),he=Object(oe.a)((function(e){return{head:{backgroundColor:"#3f51b5",color:e.palette.common.white},body:{fontSize:14}}}))(ie.a),be=Object(oe.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(me.a),Ee=function(e,t){e.preventDefault(),ce.a.fire({title:"Create new project",html:'<input id="name" class="swal2-input" placeholder="Enter name of the project"><input id="description" class="swal2-input" placeholder="Enter description of the project"><input id="duration" class="swal2-input" placeholder="Enter duration of the project">',inputAttributes:{autocapitalize:"off"},preConfirm:function(){var e=document.getElementById("name").value,t=document.getElementById("description").value,a=document.getElementById("duration").value;""!=e&&""!=t&&""!=a||ce.a.showValidationMessage("Enter all details")},showCancelButton:!0,confirmButtonText:"Create",showLoaderOnConfirm:!0,allowOutsideClick:function(){return!ce.a.isLoading()}}).then((function(e){if(!e.dismiss){var a=document.getElementById("name").value,n=document.getElementById("description").value,r=document.getElementById("duration").value;t.createNewProject(a,n,r,t.history)}}))};var ge=Object(O.d)(Object(oe.a)((function(e){return{root:{width:"100%",marginTop:3,overflowX:"auto"},table:{minWidth:700},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})),Object(y.b)((function(e){return{auth:e.auth,projects:e.projects.all}}),{logoutUser:j,getProjects:function(){return function(e){E.a.post("/api/project/all",{}).then((function(t){var a=t.data.body.projects;e(ae(a))})).catch((function(t){e({type:v,payload:t})}))}},createNewProject:function(e,t,a,n){return function(r){E.a.post("/api/project/create",{name:e,description:t,duration:a}).then((function(e){var t=e.data.body.projectId;n.push("/project/".concat(t))})).catch((function(e){r({type:v,payload:e})}))}}}))((function(e){Object(n.useEffect)((function(){e.getProjects()}),[]);var t=e.auth.user,a=e.projects,c=e.classes,o=r.a.useState(0),l=Object(I.a)(o,2),s=l[0],i=l[1],u=r.a.useState(5),d=Object(I.a)(u,2),p=d[0],f=d[1];return r.a.createElement("div",{className:"container valign-wrapper"},0==a.length?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Hey there,")," ",t.name.split(" ")[0],r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"You are logged into a Task Manager"," ","app \ud83d\udc4f")),r.a.createElement("button",{style:{width:"250px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:function(t){Ee(t,e)},className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Add Project"))):r.a.createElement("div",{className:"row",style:{width:"100%"}},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("button",{style:{width:"250px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem",marginBottom:"1rem",backgroundColor:"rgb(220, 0, 78)"},onClick:function(t){Ee(t,e)},className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Add Project"),r.a.createElement(ue.a,{component:fe.a},r.a.createElement(le.a,{className:c.table,"aria-label":"customized table"},r.a.createElement(de.a,null,r.a.createElement(me.a,null,r.a.createElement(he,{align:"center"},"Name"),r.a.createElement(he,{align:"center"},"Duration"),r.a.createElement(he,{align:"center"},"Start Date"),r.a.createElement(he,{align:"center"},"Admin"))),r.a.createElement(se.a,null,a.map((function(e){return r.a.createElement(be,{key:e._id},r.a.createElement(he,{component:"th",scope:"row"},r.a.createElement(m.b,{to:"/project/".concat(e._id)},e.name)),r.a.createElement(he,{align:"right"},e.duration),r.a.createElement(he,{align:"right"},e.startDate),r.a.createElement(he,{align:"right"},e.admin.name))}))))),r.a.createElement(pe.a,{rowsPerPageOptions:[5,10,15],component:"div",count:a.length,rowsPerPage:p,page:s,onChangePage:function(e,t){i(t)},onChangeRowsPerPage:function(e){f(+e.target.value),i(0)}}))))})),ve=function(e){return{type:"SET_CURRENT_TASK",payload:e}},we=Object(oe.a)((function(e){return{head:{backgroundColor:"#3f51b5",color:e.palette.common.white},body:{fontSize:14}}}))(ie.a),je=Object(oe.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(me.a),ye=function(e,t){e.preventDefault(),ce.a.fire({title:"Create new task",html:'<label>Name: </label> <input id="taskName" class="swal2-input" required>',inputAttributes:{autocapitalize:"off"},preConfirm:function(){var e=document.getElementById("taskName").value;console.log(e),""==e&&ce.a.showValidationMessage("Enter name of the task.")},showCancelButton:!0,confirmButtonText:"Create",showLoaderOnConfirm:!0,allowOutsideClick:function(){return!ce.a.isLoading()}}).then((function(e){if(!e.dismiss){var a=document.getElementById("taskName").value;t.createNewTask(t.currentProject._id,a,t.history)}}))};var Ne=Object(O.d)(Object(oe.a)((function(e){return{root:{width:"100%",marginTop:3,overflowX:"auto"},table:{minWidth:700},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})),Object(y.b)((function(e){return{auth:e.auth,currentProject:e.projects.currentProject}}),{updateProjectDetails:function(e,t,a,n){return function(r){E.a.post("/api/project/update",{id:e,name:t,description:a,duration:n}).then((function(e){var t=e.data.body.projectData;t=Object(C.a)({},t,{admin:t.admin.name}),r(ne(t))})).catch((function(e){r({type:v,payload:e})}))}},loadProject:function(e,t){return function(a){E.a.post("/api/project/".concat(e),{}).then((function(e){var t=e.data.body.projectData;t=Object(C.a)({},t,{admin:t.admin.name}),a(ne(t))})).catch((function(e){t.push("/dashboard")}))}},createNewTask:function(e,t,a){return function(n){E.a.post("/api/task/create",{projectId:e,name:t}).then((function(t){var n=t.data.body.taskId;a.push("/project/".concat(e,"/task/").concat(n))})).catch((function(e){n({type:v,payload:e})}))}},deleteProject:function(e,t){return function(a){E.a.post("/api/project/delete",{id:e}).then((function(e){t.push("/dashboard")})).catch((function(e){a({type:v,payload:e})}))}}}))((function(e){Object(n.useEffect)((function(){e.loadProject(e.match.params.projectId,e.history)}),[]);var t=Object(n.useState)(e.currentProject),a=Object(I.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!1),s=Object(I.a)(l,2),i=s[0],u=s[1],d=Object(n.useState)(e.currentProject.tasks),p=Object(I.a)(d,2),f=p[0],h=p[1];function b(e){var t=e.target.id,a=e.target.value,n=c;n[t]=a,o(Object(C.a)({},n,Object(Y.a)({},t,a))),i||u(!0)}Object(n.useEffect)((function(){o(e.currentProject),h(e.currentProject.tasks),console.log(e.currentProject)}),[e.currentProject]),e.projects;var E=e.classes,g=r.a.useState(0),v=Object(I.a)(g,2),w=v[0],j=v[1],y=r.a.useState(10),N=Object(I.a)(y,2),O=N[0],k=N[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"container",style:{border:"1px solid grey",textAlign:"center",borderRadius:"8px",marginTop:"1rem"}},r.a.createElement("label",{style:{color:"black",fontSize:"20px"}}," Project Details",r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"}),r.a.createElement("form",null,r.a.createElement("div",{className:"input-field col s3"},r.a.createElement("label",{className:"active"},"Name"),r.a.createElement("input",{onChange:b,value:c.name||" ",id:"name",type:"text"})),r.a.createElement("div",{className:"input-field col s1"},r.a.createElement("label",{className:"active"},"Duration"),r.a.createElement("input",{onChange:b,value:c.duration||" ",id:"duration",type:"text"})),r.a.createElement("div",{className:"input-field col s5"},r.a.createElement("label",{className:"active"},"Start Date"),r.a.createElement("input",{disabled:!0,value:c.startDate||" ",id:"startDate",type:"text"})),r.a.createElement("div",{className:"input-field col s3"},r.a.createElement("label",{className:"active"},"Admin"),r.a.createElement("input",{disabled:!0,value:c.admin||" ",id:"startDate",type:"text"})),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("label",{className:"active"},"Description"),r.a.createElement("input",{onChange:b,value:c.description||" ",id:"description",type:"text"})),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("button",{disabled:!i&&!e.auth.user.name===c.admin,onClick:function(t){e.updateProjectDetails(c._id,c.name,c.description,c.duration)},className:"btn btn-md waves-effect waves-light hoverable blue accent-3"},"Update")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("button",{disabled:!i&&!e.auth.user.name===c.admin,onClick:function(t){t.preventDefault(),ce.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.value&&e.deleteProject(c._id,e.history)}))},className:"btn btn-md waves-effect waves-light hoverable red accent-3"},"Delete")))))),r.a.createElement("div",null,0==c.tasks.length?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Hey there,"),r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"Would you like to create first task for this project?")),r.a.createElement("button",{style:{width:"250px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem",marginBottom:"2rem"},onClick:function(t){ye(t,e)},className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Create Task"))):r.a.createElement("div",{className:"row",style:{width:"100%"}},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("button",{style:{width:"250px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem",marginBottom:"1rem"},onClick:function(t){ye(t,e)},className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Create Task"),r.a.createElement(ue.a,{component:fe.a},r.a.createElement(le.a,{className:E.table,"aria-label":"customized table"},r.a.createElement(de.a,null,r.a.createElement(me.a,null,r.a.createElement(we,{align:"center"},"Name"),r.a.createElement(we,{align:"center"},"Start Date"),r.a.createElement(we,{align:"center"},"End Date"),r.a.createElement(we,{align:"center"},"Status"))),r.a.createElement(se.a,null,f.map((function(e){return r.a.createElement(je,{key:e._id},r.a.createElement(we,{component:"th",scope:"row"},r.a.createElement(m.b,{to:"/project/".concat(c._id,"/task/").concat(e._id)},e.name)),r.a.createElement(we,{align:"right"},e.startDate),r.a.createElement(we,{align:"right"},e.endDate),r.a.createElement(we,{align:"right"},e.status))}))))),r.a.createElement(pe.a,{rowsPerPageOptions:[10,25,100],component:"div",count:f.length,rowsPerPage:O,page:w,onChangePage:function(e,t){j(t)},onChangeRowsPerPage:function(e){k(+e.target.value),j(0)}})))))})),Oe=(a(130),a(185)),ke=a(182),Ce=Object(B.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var Te=Object(y.b)((function(e){return{auth:e.auth,errors:e.errors,currentTask:e.tasks.currentTask}}),{loadTask:function(e,t){return function(a){E.a.post("/api/task/".concat(e),{}).then((function(e){var t=e.data.body.taskData,n="";t.assignee.forEach((function(e){n+=e.name+","})),n=n.slice(0,-1),t=Object(C.a)({},t,{admin:t.admin.name,assignees:n}),a(ve(t))})).catch((function(e){t.push("/dashboard")}))}},updateTaskDetails:function(e,t){return function(a){E.a.post("/api/task/update",e).then((function(a){t.push("/project/".concat(e.project))})).catch((function(e){a({type:v,payload:e})}))}},addAssignees:function(e,t,a){return function(n){E.a.post("/api/task/addAssignees",{projectId:e,taskId:t,assignees:a}).then((function(e){var t=e.data.body.taskData,a="";t.assignee.forEach((function(e){a+=e.name+","})),a=a.slice(0,-1),t=Object(C.a)({},t,{admin:t.admin.name,assignees:a}),n(ve(t))})).catch((function(e){n({type:v,payload:e})}))}},setErrors:function(e){return function(t){t({type:v,payload:e})}},deleteTask:function(e,t,a){return function(n){E.a.post("/api/task/delete",{id:e}).then((function(e){a.push("/project/".concat(t))})).catch((function(e){n({type:v,payload:e})}))}}})((function(e){Ce(),Object(n.useEffect)((function(){e.loadTask(e.match.params.taskId,e.history)}),[]);var t=Object(n.useState)(e.currentTask),a=Object(I.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(e.currentTask.status),s=Object(I.a)(l,2),i=s[0],u=s[1],d=Object(n.useState)(!1),m=Object(I.a)(d,2),p=m[0],f=m[1];function h(e){var t=e.target.id,a=e.target.value;"assignee"!=t&&o(Object(C.a)({},c,Object(Y.a)({},t,a))),p||f(!0)}return Object(n.useEffect)((function(){o(e.currentTask),u(e.currentTask.status)}),[e.currentTask]),Object(n.useEffect)((function(){e.errors.response&&(N.a.error(e.errors.response.data.error,{position:N.a.POSITION.TOP_RIGHT}),e.setErrors({}))}),[e.errors]),r.a.createElement("div",null,r.a.createElement("div",{className:"container",style:{border:"1px solid grey",textAlign:"center",borderRadius:"8px",marginTop:"1rem"}},r.a.createElement("label",{style:{color:"black",fontSize:"20px"}}," Task Details",r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"}),r.a.createElement("form",null,r.a.createElement("div",{className:"input-field col s4"},r.a.createElement("label",{className:"active"},"Name"),r.a.createElement("input",{onChange:h,value:c.name||" ",id:"name",type:"text"})),r.a.createElement("div",{className:"input-field col s4"},r.a.createElement("label",{className:"active"},"Admin"),r.a.createElement("input",{disabled:!0,value:c.admin||" ",id:"startDate",type:"text"})),r.a.createElement("div",{className:"input-field col s4"},r.a.createElement(Oe.a,{id:"demo-simple-select-label"},"Status"),r.a.createElement(ke.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:i,onChange:function(e){e.target.id;var t=e.target.value;p||f(!0),u(e.target.value),o(Object(C.a)({},c,Object(Y.a)({},"status",t)))}},r.a.createElement(V.a,{value:"to-do"},"To Do"),r.a.createElement(V.a,{value:"in-progress"},"In Progress"),r.a.createElement(V.a,{value:"completed"},"Completed"))),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("label",{className:"active"},"Start Date"),r.a.createElement("input",{onChange:h,value:c.startDate||" ",id:"startDate",type:"text"})),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("label",{className:"active"},"End Date"),r.a.createElement("input",{onChange:h,value:c.endDate||" ",id:"endDate",type:"text"})),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("label",{className:"active"},"Description"),r.a.createElement("input",{onChange:h,value:c.description||" ",placeholder:"Task Description",id:"description",type:"text"})),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("label",{className:"active"},"Assignees"),r.a.createElement("input",{value:c.assignees||" ",onChange:h,placeholder:"Assignees",id:"assignee",type:"text"})),r.a.createElement("div",{className:"input-field col s3"},r.a.createElement("button",{disabled:!p,onClick:function(t){t.preventDefault(),e.updateTaskDetails(c,e.history)},className:"btn btn-md waves-effect waves-light hoverable blue accent-3"},"Update")),r.a.createElement("div",{className:"input-field col s3"},r.a.createElement("button",{onClick:function(t){t.preventDefault(),ce.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.value&&e.deleteTask(c._id,c.project,e.history)}))},className:"btn btn-md waves-effect waves-light hoverable red accent-3"},"Delete")),r.a.createElement("div",{className:"input-field col s3"},r.a.createElement("button",{onClick:function(t){!function(e,t){e.preventDefault(),ce.a.fire({title:"Add Assignees",html:'<label>Email Id: </label> <input id="addAssignees" placeholder="Add email ids separated by comma(,)" class="swal2-input" required>',inputAttributes:{autocapitalize:"off"},preConfirm:function(){""==document.getElementById("addAssignees").value&&ce.a.showValidationMessage("Enter valid mail id.")},showCancelButton:!0,confirmButtonText:"Create",showLoaderOnConfirm:!0,allowOutsideClick:function(){return!ce.a.isLoading()}}).then((function(e){if(!e.dismiss){var a=document.getElementById("addAssignees").value;t.addAssignees(t.currentTask.project,t.currentTask._id,a)}})).catch((function(e){console.log(e)}))}(t,e)},className:"btn btn-md waves-effect waves-light hoverable blue accent-3"},"Add Assignees")),r.a.createElement("div",{className:"input-field col s3"},r.a.createElement("button",{onClick:function(t){!function(e,t){t.history.push("/project/".concat(t.currentTask.project,"/"))}(0,e)},className:"btn btn-md waves-effect waves-light hoverable blue accent-3"},"Go Back")))))))}));if(localStorage.jwtToken){var xe=localStorage.jwtToken;g(xe);var Se=h()(xe);R.dispatch(w(Se));var De=Date.now()/1e3;Se.exp<De&&(R.dispatch(j()),window.location.href="./login")}N.a.configure();var Pe=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{store:R},r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(X,null),r.a.createElement(p.b,{exact:!0,path:"/",component:Z}),r.a.createElement(p.b,{exact:!0,path:"/register",component:$}),r.a.createElement(p.b,{exact:!0,path:"/login",component:Z}),r.a.createElement(p.d,null,r.a.createElement(te,{exact:!0,path:"/dashboard",component:ge}),r.a.createElement(te,{exact:!0,path:"/project/:projectId",component:Ne}),r.a.createElement(te,{exact:!0,path:"/project/:projectId/task/:taskId",component:Te})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},97:function(e,t,a){e.exports=a(132)}},[[97,1,2]]]);
//# sourceMappingURL=main.1ac293d1.chunk.js.map