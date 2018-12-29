(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(64)},61:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=a(3),s=a(4),i=a(6),m=a(5),u=a(7),p=a(66),h=a(67),d=a(68),b=a(65),f=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(b.a,{to:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};f.defaultProps={branding:"My App"};var v=f,E=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},y=a(8),C=a.n(y),g=a(12),N=a(13),j=a.n(N),O=a(29),k=a(17),w=r.a.createContext(),x=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(k.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(k.a)({},e,{contacts:[t.payload].concat(Object(O.a)(e.contacts))});case"UPDATE_CONTACT":return Object(k.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?t.payload:e})});default:return e}},S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){a.setState(function(t){return x(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://jsonplaceholder.typicode.com/users");case 3:t=e.sent,this.setState({contacts:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(w.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),A=w.Consumer,T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onShowClick=function(){a.setState({showContactInfo:!a.state.showContactInfo})},a.onDeleteClick=function(){var e=Object(g.a)(C.a.mark(function e(t,a){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(A,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,r.a.createElement("i",{className:"fas fa-sort-down ml-2 down-arrow",onClick:e.onShowClick}),r.a.createElement("i",{className:"fas fa-times delete-arrow",onClick:e.onDeleteClick.bind(e,a,s)}),r.a.createElement(b.a,{to:"/contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)})}}]),t}(n.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.length>0?t.map(function(e){return r.a.createElement(T,{key:e.id,contact:e})}):r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"text-muted"},"Loading...")))})}}]),t}(n.Component),P=a(14),q=a(27),_=a.n(q),I=function(e){var t=e.label,a=e.type,n=e.name,c=e.value,o=e.placeholder,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:n},t),r.a.createElement("input",{type:a,name:n,className:_()("form-control form-control-lg",{"is-invalid":s}),placeholder:o,value:c,onChange:l}),s?r.a.createElement("div",{className:"invalid-feedback"},s):null)};I.defaultProps={type:"text"};var M=I,L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(){var e=Object(g.a)(C.a.mark(function e(t,n){var r,c,o,l,s,i;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.prev=12,e.next=15,j.a.post("https://jsonplaceholder.typicode.com/users",s);case 15:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(12),console.log(e.t0);case 22:a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 24:case"end":return e.stop()}},e,this,[[12,19]])}));return function(t,a){return e.apply(this,arguments)}}(),a.onContactChange=function(e){a.setState(Object(P.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(A,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-title"},"Add Contact")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(M,{label:"Name",name:"name",value:a,placeholder:"Enter name...",error:o.name,onChange:e.onContactChange}),r.a.createElement(M,{label:"Email",type:"email",name:"email",value:n,placeholder:"Enter email...",error:o.email,onChange:e.onContactChange}),r.a.createElement(M,{label:"Phone",name:"phone",value:c,placeholder:"Enter phone...",error:o.phone,onChange:e.onContactChange}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-primary btn-block"}))))})}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(){var e=Object(g.a)(C.a.mark(function e(t,n){var r,c,o,l,s,i,m;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,j.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.onContactChange=function(e){a.setState(Object(P.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(C.a.mark(function e(){var t,a,n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,j.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(A,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-title"},"Edit Contact")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(M,{label:"Name",name:"name",value:a,placeholder:"Enter name...",error:o.name,onChange:e.onContactChange}),r.a.createElement(M,{label:"Email",type:"email",name:"email",value:n,placeholder:"Enter email...",error:o.email,onChange:e.onContactChange}),r.a.createElement(M,{label:"Phone",name:"phone",value:c,placeholder:"Enter phone...",error:o.phone,onChange:e.onContactChange}),r.a.createElement("input",{type:"submit",value:"Edit Contact",className:"btn btn-primary btn-block"}))))})}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",completed:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,completed:t.completed})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.completed;return r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component),J=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},U=(a(59),a(61),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(S,null,r.a.createElement(p.a,{basename:"/contactmanager"},r.a.createElement("div",{className:"App"},r.a.createElement(v,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:D}),r.a.createElement(d.a,{exact:!0,path:"/about",component:E}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:L}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:B}),r.a.createElement(d.a,{exact:!0,path:"/test",component:F}),r.a.createElement(d.a,{component:J}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.21d5f320.chunk.js.map