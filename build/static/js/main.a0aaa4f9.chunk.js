(this["webpackJsonpyevhenii-kononko-playtika-task"]=this["webpackJsonpyevhenii-kononko-playtika-task"]||[]).push([[0],{180:function(e,t,n){e.exports=n(403)},387:function(e,t,n){},403:function(e,t,n){"use strict";n.r(t);n(181),n(190);var a=n(1),l=n.n(a),c=n(112),r=n.n(c),s=(n(387),n(34)),o=n(179),i=n(80),u=n.n(i),d=n(50),m=n.n(d),b=function(e){return a.createElement("header",{className:"header"},a.createElement("div",{className:"header__balance"},e.balance))},f=function(e){return a.createElement("main",{className:"content"},e.children)},E=function(e){var t=e.bet,n=e.isMinusDisabled,l=e.isPlusDisabled,c=e.handlerBetDown,r=e.handlerBetUp;return a.createElement("div",{className:"bet"},a.createElement("button",{className:"bet__btn bet__btn_minus",onClick:c,disabled:n},"-"),a.createElement("div",{className:"bet__info"},a.createElement("div",{className:"bet__value"},t),a.createElement("div",{className:"bet__desc"},"bet")),a.createElement("button",{className:"bet__btn bet__btn_plus",onClick:r,disabled:l},"+"))},p=function(e){var t=e.handlerSpin,n=e.disabled;return a.createElement("div",{className:"spin"},a.createElement("button",{className:"spin__btn",onClick:t,disabled:n},"spin"))},h=function(e){return a.createElement("span",{className:"some-text"},e.text)},v=function(e){var t=e.win;return a.createElement("div",{className:"win"},t?"+".concat(t):a.createElement(h,{text:"SPIN to WIN"}))},O=function(e){var t=e.bet,n=e.win,l=e.isMinusDisabled,c=e.isPlusDisabled,r=e.isSpinDisabled,s=e.handlerBetDown,o=e.handlerBetUp,i=e.handlerSpin;return a.createElement("footer",{className:"footer"},a.createElement(E,{bet:t,isMinusDisabled:l,isPlusDisabled:c,handlerBetDown:s,handlerBetUp:o}),a.createElement(v,{win:n}),a.createElement(p,{handlerSpin:i,disabled:r}))},N=function(e){return a.createElement("div",{className:"slot-screen"},e.slots.map((function(e,t){return a.createElement(j,{key:t,row:e})})))},j=function(e){return a.createElement("div",{className:"slot-row"},e.row.map((function(e,t){return a.createElement("div",{key:t,className:"slot-item"},e)})))},_=function(e){var t=e.text;return a.createElement(u.a,{className:"loader"},a.createElement("div",null,t||"Loading... *simple loader*"))},w="https://game-server.kovalevskyi.net/",k=new URLSearchParams(window.location.search).get("uid")||771;m.a.setAppElement("#root"),m.a.defaultStyles.overlay.backgroundColor=null,m.a.defaultStyles.content=Object(o.a)({},m.a.defaultStyles.content,{display:"flex",justifyContent:"center",alignItems:"center",top:"4%",right:"4%",bottom:"4%",left:"4%"});var S=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object(s.a)(r,2),i=o[0],d=o[1],E=Object(a.useState)(null),p=Object(s.a)(E,2),h=p[0],v=p[1],j=Object(a.useState)(null),S=Object(s.a)(j,2),y=S[0],g=S[1],D=Object(a.useState)(null),x=Object(s.a)(D,2),B=x[0],P=x[1],C=Object(a.useState)([]),I=Object(s.a)(C,2),U=I[0],M=I[1],W=Object(a.useState)(null),J=Object(s.a)(W,2),L=J[0],R=J[1],T=Object(a.useState)(!1),q=Object(s.a)(T,2),A=q[0],G=q[1];Object(a.useEffect)((function(){fetch("".concat(w,"init?uid=").concat(k)).then((function(e){return e.json()})).then((function(e){var t=e.error,n=e.balance,a=e.last_bet,l=e.bets,r=e.rolls;if(t){var s="..Oops! ".concat(t,"!");throw c(s),Error(s)}g(r),M(l),P(l.indexOf(a)),v(n)}))}),[]),Object(a.useEffect)((function(){L&&(console.log("WIN! +".concat(L)),setTimeout((function(){R(null)}),2e3))}),[L]);var z=function(){return G(!1)};return"number"===typeof h?l.a.createElement(u.a,{className:"hof"},l.a.createElement(b,{balance:h}),l.a.createElement(f,{children:l.a.createElement(N,{slots:y})}),l.a.createElement(O,{bet:U[B],win:L,isMinusDisabled:i||0===B,isPlusDisabled:i||B===U.length-1,handlerBetDown:function(){B>0&&P(B-1)},handlerBetUp:function(){B<U.length-1&&P(B+1)},handlerSpin:function(){return!i&&(h<U[B]?G(!0):(d(!0),console.log("spin is running..."),v((function(e){return e-U[B]})),void fetch("".concat(w,"spin?uid=").concat(k,"&bet=").concat(U[B])).then((function(e){return e.json()})).then((function(e){var t=e.error,n=e.balance,a=e.last_bet,l=e.win,r=void 0===l?null:l,s=e.rolls;if(t){var o="..Oops! ".concat(t,"!");throw c(o),Error(o)}g(s),P(U.indexOf(a)),v(n),r&&R(r),d(!1),console.log("spin is ended")}))))},isSpinDisabled:i}),l.a.createElement(m.a,{isOpen:A,onRequestClose:z},l.a.createElement("button",{className:"modal-close",onClick:z},"\u2716"),l.a.createElement("p",null,"Gold not enough!",l.a.createElement("br",null),"We need more gold!",l.a.createElement("br",null),"Donate, donate, donate...",l.a.createElement("br",null),'*here is buttons "PayToPlay" and donations plans*'))):l.a.createElement(_,{text:n})};r.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[180,1,2]]]);
//# sourceMappingURL=main.a0aaa4f9.chunk.js.map