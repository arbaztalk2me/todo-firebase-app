(this["webpackJsonptodo-app-firebase"]=this["webpackJsonptodo-app-firebase"]||[]).push([[0],{106:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o(43),a=o.n(i),r=(o(95),o(19)),s=(o(96),o(147)),c=o(149),d=o(153),l=o(55);o(107);l.a.initializeApp({apiKey:"AIzaSyBRkY3Ks6SYunuuiMP-t3tPWH7F6mvqoAQ",authDomain:"todo-firebase-56d3c.firebaseapp.com",projectId:"todo-firebase-56d3c",storageBucket:"todo-firebase-56d3c.appspot.com",messagingSenderId:"418349138949",appId:"1:418349138949:web:b8b5b00c91a0f2a334c86c"});var u=l.a.firestore(),p=o(150),b=o(151),j=(o(99),o(5));var f=function(e){var t=e.todo,o=e.inProgress,n=e.id;return Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsx)(p.a,{children:Object(j.jsx)(b.a,{primary:t,secondary:o?"In Progress\ud83d\udea7":"Completed\u2705"})}),Object(j.jsx)(d.a,{onClick:function(){u.collection("todos").doc(n).update({inProgress:!o})},children:o?"Done":"UnDone"}),Object(j.jsx)(d.a,{onClick:function(){u.collection("todos").doc(n).delete()},color:"error",children:"X"})]})};var m=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),o=t[0],i=t[1],a=Object(n.useState)([]),p=Object(r.a)(a,2),b=p[0],m=p[1],O=Object(n.useState)(!1),x=Object(r.a)(O,2),h=x[0],v=x[1];Object(n.useEffect)((function(){g()}),[]);var g=function(){u.collection("todos").onSnapshot((function(e){m(e.docs.map((function(e){return{id:e.id,todo:e.data().todo,inProgress:e.data().inProgress}})))}))};return Object(j.jsx)("div",{className:"App",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Arbaz Todo's App "}),h&&Object(j.jsx)(c.a,{style:{marginBottom:"3px"},severity:"error",children:"Please Enter Todo!"}),Object(j.jsxs)("form",{children:[Object(j.jsx)(s.a,{value:o,onChange:function(e){return i(e.target.value)},id:"standard-basic",label:"Write a todo",variant:"standard",style:{maxWidth:"300px"}}),Object(j.jsx)(d.a,{type:"submit",variant:"contained",onClick:function(e){e.preventDefault(),""!=o?(u.collection("todos").add({todo:o,inProgress:!0,timestamp:l.a.firestore.FieldValue.serverTimestamp()}),i("")):(v(!0),setTimeout((function(){v(!1)}),4e3))},style:{display:"none"},children:"Contained"})]}),b.map((function(e){return Object(j.jsx)(f,{todo:e.todo,inProgress:e.inProgress,id:e.id})}))]})})};a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))},95:function(e,t,o){},96:function(e,t,o){},99:function(e,t,o){}},[[106,1,2]]]);
//# sourceMappingURL=main.585f7ba9.chunk.js.map