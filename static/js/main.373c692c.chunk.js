(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c,r,i,o,a,s,j,b,d=n(1),l=n.n(d),u=n(6),h=n.n(u),O=(n(13),n(4)),x=(n(14),n(2)),f=n(3),g=f.a.h2(c||(c=Object(x.a)(["\n  margin-left: 40px;\n"]))),p=f.a.ul(r||(r=Object(x.a)(["\n  display: flex;\n  list-style: none;\n"]))),v=f.a.li(i||(i=Object(x.a)(["\n  margin-right: 8px;\n"]))),k=f.a.button(o||(o=Object(x.a)(["\n  font-size: 14px;\n  font-weight: 600;\n  color: #000c66;\n  padding: 6px;\n  border-style: dotted;\n  border-radius: 4px;\n  border-width: 1px;\n  &:hover {\n    cursor: pointer;\n    background-color: #b1d4e0;\n    border-color: #b1d4e0;\n  }\n"]))),m=n(0),w=function(e){var t=e.incrementGood,n=e.options;return Object(m.jsx)("div",{children:Object(m.jsx)(p,{children:n.map((function(e){return Object(m.jsx)(v,{children:Object(m.jsxs)(k,{type:"button",onClick:function(){t(e)},children:[" ",e]})},e)}))})})},y=(f.a.h2(a||(a=Object(x.a)(["\n  margin-left: 40px;\n"]))),f.a.ul(s||(s=Object(x.a)(["\n  list-style: none;\n"])))),S=f.a.p(j||(j=Object(x.a)(["\n  font-weight: 500;\n  color: #000c66;\n"]))),P=f.a.p(b||(b=Object(x.a)(["\n  font-weight: 600;\n  font-size: 25px;\n  margin-left: 40px;\n  margin-top: 50px;\n"]))),G=function(e){var t=e.data,n=e.total,c=e.positivePercentage,r=t.good,i=t.neutral,o=t.bad;return Object(m.jsx)("div",{children:Object(m.jsxs)(y,{children:[Object(m.jsx)("li",{children:Object(m.jsxs)(S,{children:["Good: ",r]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(S,{children:["Neutral: ",i]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(S,{children:["Bad: ",o]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(S,{children:["Total: ",n]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(S,{children:["Positive Feedback: ",c(n),"%"]})})]})})},z=function(e){var t=e.title,n=e.children;return Object(m.jsxs)("section",{children:[Object(m.jsx)(g,{children:t}),n]})},B=function(e){var t=e.message;return Object(m.jsx)(P,{children:t})};var E=function(){var e=Object(d.useState)(0),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(d.useState)(0),i=Object(O.a)(r,2),o=i[0],a=i[1],s=Object(d.useState)(0),j=Object(O.a)(s,2),b=j[0],l=j[1],u=n+o+b;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(z,{title:"Please leave feedback",children:Object(m.jsx)(w,{incrementGood:function(e){switch(e){case"good":c((function(e){return e+1}));break;case"neutral":a((function(e){return e+1}));break;case"bad":l((function(e){return e+1}));break;default:throw new Error("Something goes wrong")}},options:["good","neutral","bad"]})}),u?Object(m.jsx)(z,{title:"Statistics",children:Object(m.jsx)(G,{data:{good:n,neutral:o,bad:b},total:u,positivePercentage:function(e){return 0===e?0:Math.ceil(n/e*100)}})}):Object(m.jsx)(B,{message:"No feedback given"})]})};h.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.373c692c.chunk.js.map