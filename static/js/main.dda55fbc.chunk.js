(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{75:function(e,t,a){},76:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(26),c=a.n(s),i=(a(75),a(16)),r=a(13),o=a(122),j=a(127),l=(a(76),a(123)),u=a(124),b=a(119),d=a(2),x=function(e){return Object(d.jsxs)("div",{className:"add-item",children:[Object(d.jsx)(l.a,{className:"text-input",value:e.value,onChange:function(t){return e.setValue(t)},type:"text",sx:{bgcolor:"#fff"}}),Object(d.jsx)(u.a,{variant:"outlined",sx:{bgcolor:"#fff"},onClick:e.submit,children:Object(d.jsx)(b.a,{sx:{fontSize:40}})})]})},m=a(126),f=a(121),O=function(e){return Object(d.jsxs)(m.a,{sx:{m:2},className:"items__item",children:[Object(d.jsx)(j.a,{sx:{border:1,borderColor:"primary.main",borderRadius:1,mr:1,p:1,bgcolor:"#fff",padding:"16.5px 14px"},variant:"paragraph",className:"items__text",children:e.item}),Object(d.jsx)(u.a,{variant:"contained",onClick:e.delete,children:Object(d.jsx)(f.a,{sx:{fontSize:40}})})]})};var p=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),l=Object(r.a)(c,2),u=l[0],b=l[1],m=function(e){var t=e.target.id,a=Object(i.a)(u);a.splice(t,1),b(a)};return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(o.a,{}),Object(d.jsx)(j.a,{variant:"h1",sx:{textAlign:"center",mt:2,mb:4},children:"To Do List"}),Object(d.jsx)(x,{value:a,setValue:function(e){s(e.target.value)},submit:function(){var e=Object(i.a)(u);e.push(a),b(e),s("")}}),Object(d.jsx)("div",{className:"items",children:u.map((function(e,t){return Object(d.jsx)(O,{id:t,item:e,delete:m},t)}))})]})};c.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.dda55fbc.chunk.js.map