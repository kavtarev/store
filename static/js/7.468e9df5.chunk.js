(this["webpackJsonpresume-store"]=this["webpackJsonpresume-store"]||[]).push([[7],{190:function(e,a,t){e.exports=t.p+"static/media/cardimg.c55b828a.jpg"},210:function(e,a,t){e.exports={cartItem:"Cart_cartItem__2gn8U",data:"Cart_data__2Vi20",buttons:"Cart_buttons__3ZvVH",main:"Cart_main__1_HYh",costDiv:"Cart_costDiv__2rX3x",costSpan:"Cart_costSpan__1ir36"}},236:function(e,a,t){e.exports={inputsDiv:"forms_inputsDiv__3H8nx",areaDiv:"forms_areaDiv__-R4pb"}},285:function(e,a,t){"use strict";t.r(a);var n=t(235),r=t(0),l=t.n(r),c=t(24),i=t(46),m=t(210),u=t.n(m),o=t(190),s=t.n(o),d=(t(180),t(182)),E=function(e){var a=e.id,t=e.name,n=e.email,r=e.number,c=e.addToCart,i=e.removeFromCart;return l.a.createElement("div",{className:u.a.cartItem},l.a.createElement("div",{className:u.a.data},l.a.createElement("img",{style:{width:"20px",height:"20px"},src:s.a,alt:"card"}),l.a.createElement("div",null,l.a.createElement("b",null,t," ",n),"  "," x ",l.a.createElement("b",null,r),"   "),l.a.createElement("div",null," ","\u0426\u0435\u043d\u0430 \u0437\u0430 1 \u0448\u0442: ",l.a.createElement("b",null,"$",a)," "),l.a.createElement("div",null,l.a.createElement("u",null,"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",l.a.createElement("b",null,a*r)))),l.a.createElement("div",{className:u.a.buttons},l.a.createElement(d.a,{style:{margin:"0.5rem"},variant:"success",onClick:function(){return c({id:a,name:t,email:n})}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.a.createElement(d.a,{style:{margin:"0.5rem"},variant:"danger",onClick:function(){return i(a)}},"\u0423\u0431\u0440\u0430\u0442\u044c")))},v=t(198),p=t(223),b=t(284),f=t(283),_=function(e){return e?void 0:"required"},C=t(281),h=t(236),y=t.n(h),g=function(e){var a=e.input,t=(e.meta,Object(C.a)(e,["input","meta"]));return l.a.createElement("div",{className:y.a.inputsDiv},l.a.createElement("input",Object.assign({required:!0},a,t)))},x=function(e){var a=e.input,t=e.meta,n=Object(C.a)(e,["input","meta"]);return l.a.createElement("div",{className:y.a.areaDiv},l.a.createElement("textarea",Object.assign({},a,n)),t.visited&&l.a.createElement("div",null,t.error))},O=Object(f.a)({form:"SubmitOrder"})((function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",null,l.a.createElement("label",null," \u0412\u0430\u0448\u0435 \u0438\u043c\u044f "),l.a.createElement("div",null,l.a.createElement(b.a,{name:"firstName",component:g,type:"text",placeholder:"First Name",validate:[_]}))),l.a.createElement("div",null,l.a.createElement("label",null,"Email"),l.a.createElement("div",null,l.a.createElement(b.a,{name:"email",component:g,type:"email",placeholder:"Email",validate:[_]}))),l.a.createElement("div",null,l.a.createElement("label",null,"\u041d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),l.a.createElement("div",null,l.a.createElement(b.a,{name:"phone",component:g,type:"phone",placeholder:"phone",validate:[_]}))),l.a.createElement("div",null,l.a.createElement("label",null,"\u041f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u044f \u043a \u0437\u0430\u043a\u0430\u0437\u0443"),l.a.createElement("div",null,l.a.createElement(b.a,{name:"requests",component:x,type:"email",placeholder:"Requests"}))),l.a.createElement(d.a,{variant:"secondary",onClick:e.handleClose},"\u041e\u0442\u043c\u0435\u043d\u0430"),l.a.createElement(d.a,{type:"submit",variant:"primary"},"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"))})),N=function(e){var a=Object(r.useState)(!1),t=Object(v.a)(a,2),n=t[0],c=t[1],i=function(){return c(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{variant:"primary",onClick:function(){return c(!0)}},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"),l.a.createElement(p.a,{show:n,onHide:i,size:"lg"},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"\u0417\u0430\u043a\u0430\u0437 \u043d\u0430 \u0441\u0443\u043c\u043c\u0443 ",e.total)),l.a.createElement(p.a.Body,null,l.a.createElement(O,{onSubmit:function(a){e.clearCart(),alert("\u0432\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043f\u0440\u0438\u043d\u044f\u0442")},handleClose:i}))))};a.default=Object(c.b)((function(e){return{cart:e.cart.cart}}),{addToCart:i.a,removeFromCart:i.d,clearCart:i.b})((function(e){var a,t={},r=Object(n.a)(e.cart);try{for(r.s();!(a=r.n()).done;){var c=a.value;t[c.id]=(t[c.id]||0)+1}}catch(o){r.e(o)}finally{r.f()}var i=[];var m=e.cart.reduce((function(e,a){return e+a.id}),0);return 0===e.cart.length?l.a.createElement("h2",{style:{textAlign:"center"}},"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"):l.a.createElement("div",{className:u.a.main},l.a.createElement("h2",null,"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430:"),e.cart.filter((function(e){return function(e){return-1===i.indexOf(e.id)&&(i.push(e.id),!0)}(e)})).sort((function(e,a){return e.id-a.id})).map((function(a,n){return l.a.createElement(E,{key:n,id:a.id,number:t[a.id],name:a.name,email:a.email,addToCart:e.addToCart,removeFromCart:e.removeFromCart})})),e.cart&&l.a.createElement("div",{className:u.a.costDiv},l.a.createElement("div",{className:u.a.costSpan}," ","\u0421\u0443\u043c\u043c\u0430: $",l.a.createElement("b",null,m)," "),l.a.createElement("div",{className:u.a.costOrder},l.a.createElement(N,{clearCart:e.clearCart,total:m}))))}))}}]);
//# sourceMappingURL=7.468e9df5.chunk.js.map