(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),s=(n(15),n(9)),o=n(2),u=n(3),d=n(4),b=n(6),l=n(5),h=n(18),m=n(0),j=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameInputId=Object(h.a)(),e.numberInputId=Object(h.a)(),e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(o.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.propSubmit(e.state),e.resetForm()},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(m.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})]})}}]),n}(a.Component),p=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHandler=function(e){console.log(e)},e.handleChange=function(t){var n=t.currentTarget,a=n.filter,r=n.value;e.setState(Object(o.a)({},a,r))},e.addContact=function(t){var n={name:t.name,number:t.number,id:Object(h.a)()};e.setState((function(e){var t=e.contacts;return{contacts:[n].concat(Object(s.a)(t))}}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j,{propSubmit:this.addContact}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)("p",{children:"Find contacts by name"}),Object(m.jsx)("label",{id:this.name,children:Object(m.jsx)("input",{type:"text",value:this.state.filter,onChange:this.handleChange,name:"filter"})}),Object(m.jsx)("ul",{children:this.state.contacts.map((function(e){return Object(m.jsxs)("li",{children:[e.name,": ",e.number]},e.id)}))})]})}}]),n}(a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.d4909b78.chunk.js.map