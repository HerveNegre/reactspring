(this["webpackJsonpreact-animations"]=this["webpackJsonpreact-animations"]||[]).push([[0],{52:function(e,i,t){},53:function(e,i,t){},59:function(e,i,t){},61:function(e,i,t){},62:function(e,i,t){},64:function(e,i,t){},65:function(e,i,t){"use strict";t.r(i);var a=t(1),u=t.n(a),s=t(29),o=t.n(s),n=(t(52),t(53),t(20)),c=t(2);function r(){return Object(c.jsxs)("nav",{children:[Object(c.jsx)(n.b,{to:"/anim",className:"anim",children:"ANIM"}),Object(c.jsx)(n.b,{to:"/",className:"list",children:"LIST"}),Object(c.jsx)(n.b,{to:"/scroll",className:"scroll",children:"SCROLL"}),Object(c.jsx)(n.b,{to:"/disappear",className:"disappear",children:"DISAPPEAR"})]})}var m=t(18),l=t(7),d=(t(59),t(13)),p=t(66);function b(){var e=Object(a.useState)(!0),i=Object(l.a)(e,2),t=i[0],u=i[1];Object(a.useEffect)((function(){setTimeout((function(){u(!1)}),1e4)}),[]);var s=Object(a.useState)([{id:Object(p.a)(),txt:"Bora bora"},{id:Object(p.a)(),txt:"Br\xe9sil"},{id:Object(p.a)(),txt:"Cr\xe8te"}]),o=Object(l.a)(s,2),n=o[0],r=o[1],b=Object(a.useRef)(),q=Object(d.useTransition)(n,{from:{opacity:0,transform:"translateX(10px)"},enter:{opacity:1,transform:"translateX(0px)"},keys:n.map((function(e){return e.id}))});return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var i={id:Object(p.a)(),txt:b.current.value};r([].concat(Object(m.a)(n),[i])),b.current.value=""},children:[Object(c.jsx)("label",{htmlFor:"club",children:"Indiquez votre destination favorite !"}),Object(c.jsx)("input",{ref:b,type:"text",id:"club"}),t?Object(c.jsx)("ul",{children:n.map((function(e){return Object(c.jsx)("li",{children:e.txt},e.id)}))}):Object(c.jsx)("ul",{children:q((function(e,i){return Object(c.jsx)(d.animated.li,{style:e,children:i.txt})}))})]})}t(61);function q(){return Object(c.jsx)("div",{className:"card"})}function f(){var e=Object(d.useTrail)(12,{from:{opacity:0,y:-100},to:{opacity:1,y:0}});return Object(c.jsx)("div",{className:"list-container",children:e.map((function(e,i){return Object(c.jsx)(d.animated.div,{style:e,children:Object(c.jsx)(q,{})},Object(p.a)())}))})}t(62);var x=t(38);function j(){var e=Object(a.useState)(!1),i=Object(l.a)(e,2),t=i[0],u=i[1],s=Object(a.useState)(!1),o=Object(l.a)(s,2),n=o[0],r=o[1],m=Object(d.useSpring)({opacity:t?1:0,transform:t?"translateX(0)":"translateX(-50%)"}),p=Object(d.useSpring)({opacity:n?1:0,transform:n?"translateY(0)":"translateY(50%)"});return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"scroll-txt",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quidem excepturi fuga, ducimus veniam nesciunt maiores cum quaerat dolor a consequatur culpa tempora. Ipsa dicta temporibus iusto alias, corrupti odit, necessitatibus, porro ratione magnam laboriosam reiciendis officia deleniti eos minima cumque illo fuga exercitationem impedit sed est at a? Laborum explicabo nostrum nulla vitae vel. Voluptate, eum veniam iusto, nobis maiores natus, quaerat consectetur sunt eveniet culpa hic consequuntur dolore quis. Repellendus quia consequuntur culpa ut corporis distinctio voluptas unde amet eveniet maxime modi optio numquam officia veniam blanditiis ducimus consequatur iure soluta dignissimos commodi natus molestiae provident, expedita architecto. Laboriosam obcaecati eligendi nisi a maxime repellendus ipsam. Cupiditate quam corrupti suscipit sapiente, doloribus qui incidunt aperiam ducimus. Numquam nam expedita dolore illum molestiae at impedit modi nesciunt placeat ducimus. Minus unde tenetur nobis. Magni dolorum necessitatibus officiis voluptatibus aut, optio doloremque itaque culpa deserunt assumenda animi ipsum reiciendis nisi officia illo autem iure repellat vel rerum ea neque fugiat. Illo iusto sed quidem fuga, provident eaque voluptates ad in tempora, officia, blanditiis architecto. Sit natus a aut earum. Cumque consequuntur accusantium, incidunt rerum itaque enim harum, quasi non, quibusdam tempore quis atque doloribus a illum molestiae! Labore, expedita ad!"}),Object(c.jsx)("p",{className:"scroll-txt",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quidem excepturi fuga, ducimus veniam nesciunt maiores cum quaerat dolor a consequatur culpa tempora. Ipsa dicta temporibus iusto alias, corrupti odit, necessitatibus, porro ratione magnam laboriosam reiciendis officia deleniti eos minima cumque illo fuga exercitationem impedit sed est at a? Laborum explicabo nostrum nulla vitae vel. Voluptate, eum veniam iusto, nobis maiores natus, quaerat consectetur sunt eveniet culpa hic consequuntur dolore quis. Repellendus quia consequuntur culpa ut corporis distinctio voluptas unde amet eveniet maxime modi optio numquam officia veniam blanditiis ducimus consequatur iure soluta dignissimos commodi natus molestiae provident, expedita architecto. Laboriosam obcaecati eligendi nisi a maxime repellendus ipsam. Cupiditate quam corrupti suscipit sapiente, doloribus qui incidunt aperiam ducimus. Numquam nam expedita dolore illum molestiae at impedit modi nesciunt placeat ducimus. Minus unde tenetur nobis. Magni dolorum necessitatibus officiis voluptatibus aut, optio doloremque itaque culpa deserunt assumenda animi ipsum reiciendis nisi officia illo autem iure repellat vel rerum ea neque fugiat. Illo iusto sed quidem fuga, provident eaque voluptates ad in tempora, officia, blanditiis architecto. Sit natus a aut earum. Cumque consequuntur accusantium, incidunt rerum itaque enim harum, quasi non, quibusdam tempore quis atque doloribus a illum molestiae! Labore, expedita ad!"}),Object(c.jsx)("p",{className:"scroll-txt",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quidem excepturi fuga, ducimus veniam nesciunt maiores cum quaerat dolor a consequatur culpa tempora. Ipsa dicta temporibus iusto alias, corrupti odit, necessitatibus, porro ratione magnam laboriosam reiciendis officia deleniti eos minima cumque illo fuga exercitationem impedit sed est at a? Laborum explicabo nostrum nulla vitae vel. Voluptate, eum veniam iusto, nobis maiores natus, quaerat consectetur sunt eveniet culpa hic consequuntur dolore quis. Repellendus quia consequuntur culpa ut corporis distinctio voluptas unde amet eveniet maxime modi optio numquam officia veniam blanditiis ducimus consequatur iure soluta dignissimos commodi natus molestiae provident, expedita architecto. Laboriosam obcaecati eligendi nisi a maxime repellendus ipsam. Cupiditate quam corrupti suscipit sapiente, doloribus qui incidunt aperiam ducimus. Numquam nam expedita dolore illum molestiae at impedit modi nesciunt placeat ducimus. Minus unde tenetur nobis. Magni dolorum necessitatibus officiis voluptatibus aut, optio doloremque itaque culpa deserunt assumenda animi ipsum reiciendis nisi officia illo autem iure repellat vel rerum ea neque fugiat. Illo iusto sed quidem fuga, provident eaque voluptates ad in tempora, officia, blanditiis architecto. Sit natus a aut earum. Cumque consequuntur accusantium, incidunt rerum itaque enim harum, quasi non, quibusdam tempore quis atque doloribus a illum molestiae! Labore, expedita ad!"}),Object(c.jsx)(x.a,{bottomOffset:"30%",onEnter:function(){t||u(!0)}}),Object(c.jsxs)(d.animated.div,{style:m,className:"animSection",children:[Object(c.jsx)("h2",{children:"Profitez de la promo !"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{htmlFor:"email"}),Object(c.jsx)("input",{type:"email",id:"email",placeholder:"Votre adresse email"})]})]}),Object(c.jsx)("p",{className:"scroll-txt",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quidem excepturi fuga, ducimus veniam nesciunt maiores cum quaerat dolor a consequatur culpa tempora. Ipsa dicta temporibus iusto alias, corrupti odit, necessitatibus, porro ratione magnam laboriosam reiciendis officia deleniti eos minima cumque illo fuga exercitationem impedit sed est at a? Laborum explicabo nostrum nulla vitae vel. Voluptate, eum veniam iusto, nobis maiores natus, quaerat consectetur sunt eveniet culpa hic consequuntur dolore quis. Repellendus quia consequuntur culpa ut corporis distinctio voluptas unde amet eveniet maxime modi optio numquam officia veniam blanditiis ducimus consequatur iure soluta dignissimos commodi natus molestiae provident, expedita architecto. Laboriosam obcaecati eligendi nisi a maxime repellendus ipsam. Cupiditate quam corrupti suscipit sapiente, doloribus qui incidunt aperiam ducimus. Numquam nam expedita dolore illum molestiae at impedit modi nesciunt placeat ducimus. Minus unde tenetur nobis. Magni dolorum necessitatibus officiis voluptatibus aut, optio doloremque itaque culpa deserunt assumenda animi ipsum reiciendis nisi officia illo autem iure repellat vel rerum ea neque fugiat. Illo iusto sed quidem fuga, provident eaque voluptates ad in tempora, officia, blanditiis architecto. Sit natus a aut earum. Cumque consequuntur accusantium, incidunt rerum itaque enim harum, quasi non, quibusdam tempore quis atque doloribus a illum molestiae! Labore, expedita ad!"}),Object(c.jsx)(x.a,{bottomOffset:"40%",onEnter:function(){n||r(!0)}}),Object(c.jsxs)(d.animated.p,{style:p,className:"scroll-txt",children:["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quidem excepturi fuga, ducimus veniam nesciunt maiores cum quaerat dolor a consequatur culpa tempora. Ipsa dicta temporibus iusto alias, corrupti odit, necessitatibus, porro ratione magnam laboriosam reiciendis officia deleniti eos minima cumque illo fuga exercitationem impedit sed est at a? Laborum explicabo nostrum nulla vitae vel. Voluptate, eum veniam iusto, nobis maiores natus, quaerat consectetur sunt eveniet culpa hic consequuntur dolore quis. Repellendus quia consequuntur culpa ut corporis distinctio voluptas unde amet eveniet maxime modi optio numquam officia veniam blanditiis ducimus consequatur iure soluta dignissimos commodi natus molestiae provident, expedita architecto. Laboriosam obcaecati eligendi nisi a maxime repellendus ipsam. Cupiditate quam corrupti suscipit sapiente, doloribus qui incidunt aperiam ducimus. Numquam nam expedita dolore illum molestiae at impedit modi nesciunt placeat ducimus. Minus unde tenetur nobis. Magni dolorum necessitatibus officiis voluptatibus aut, optio doloremque itaque culpa deserunt assumenda animi ipsum reiciendis nisi officia illo autem iure repellat vel rerum ea neque fugiat. Illo iusto sed quidem fuga, provident eaque voluptates ad in tempora, officia, blanditiis architecto. Sit natus a aut earum. Cumque consequuntur accusantium, incidunt rerum itaque enim harum, quasi non, quibusdam tempore quis atque doloribus a illum molestiae! Labore, expedita ad!",Object(c.jsx)("p",{className:"scroll-txt",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quidem excepturi fuga, ducimus veniam nesciunt maiores cum quaerat dolor a consequatur culpa tempora. Ipsa dicta temporibus iusto alias, corrupti odit, necessitatibus, porro ratione magnam laboriosam reiciendis officia deleniti eos minima cumque illo fuga exercitationem impedit sed est at a? Laborum explicabo nostrum nulla vitae vel. Voluptate, eum veniam iusto, nobis maiores natus, quaerat consectetur sunt eveniet culpa hic consequuntur dolore quis. Repellendus quia consequuntur culpa ut corporis distinctio voluptas unde amet eveniet maxime modi optio numquam officia veniam blanditiis ducimus consequatur iure soluta dignissimos commodi natus molestiae provident, expedita architecto. Laboriosam obcaecati eligendi nisi a maxime repellendus ipsam. Cupiditate quam corrupti suscipit sapiente, doloribus qui incidunt aperiam ducimus. Numquam nam expedita dolore illum molestiae at impedit modi nesciunt placeat ducimus. Minus unde tenetur nobis. Magni dolorum necessitatibus officiis voluptatibus aut, optio doloremque itaque culpa deserunt assumenda animi ipsum reiciendis nisi officia illo autem iure repellat vel rerum ea neque fugiat. Illo iusto sed quidem fuga, provident eaque voluptates ad in tempora, officia, blanditiis architecto. Sit natus a aut earum. Cumque consequuntur accusantium, incidunt rerum itaque enim harum, quasi non, quibusdam tempore quis atque doloribus a illum molestiae! Labore, expedita ad!"})]})]})}var v=t(16),O=t.n(v),h=t(22);t(64);function g(){var e=Object(a.useState)(!1),i=Object(l.a)(e,2),t=i[0],u=i[1],s=Object(d.useTransition)(t,{from:{opacity:0,x:-800,y:-150},enter:function(e){return function(){var i=Object(h.a)(O.a.mark((function i(t){return O.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t({opacity:1,x:110,y:e.y,delay:e.delay});case 2:return i.next=4,t({y:-50});case 4:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}()},leave:function(e){return function(i){return i({opacity:0,x:500,y:e.y,delay:e.delay})}}});return Object(c.jsxs)("div",{classname:"container-disappear",children:[Object(c.jsx)("button",{onClick:function(){u((function(e){return e.length?[]:[{x:-100,delay:200},{x:-50,delay:500},{x:0,delay:1100},{x:-100,delay:1300}]}))},children:t.length?"non merci !":"cliquez !"}),Object(c.jsx)("div",{className:"transition-disappear",children:s((function(e,i){return i?Object(c.jsx)(d.animated.div,{style:e,className:"item"}):""}))})]})}var y=t(6);var L=function(){return Object(c.jsx)(n.a,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(r,{}),Object(c.jsxs)(y.c,{children:[Object(c.jsx)(y.a,{path:"/",exact:!0,component:f}),Object(c.jsx)(y.a,{path:"/anim",exact:!0,component:b}),Object(c.jsx)(y.a,{patch:"/scroll",exact:!0,component:j}),Object(c.jsx)(y.a,{patch:"/disappear",exact:!0,component:g})]})]})})};o.a.render(Object(c.jsx)(u.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.ad74f3b1.chunk.js.map