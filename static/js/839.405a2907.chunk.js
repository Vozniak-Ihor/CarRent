"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[839],{8128:function(e,a,n){n(2791);a.Z=n.p+"static/media/active.97847e9195943f61800c97807e735d4f.svg"},9627:function(e,a,n){n(2791);a.Z=n.p+"static/media/normal.282d936f414f4c6884ab9306a91dad67.svg"},8699:function(e,a,n){n.d(a,{Z:function(){return r}});n(2791);var t=n.p+"static/media/x.f3cbdd58dc25ca7cbb3d242106b56fb9.svg",i=n(184),r=function(e){var a=e.active,n=e.setActive,r=e.infoCar;if(!r||!r.img)return null;return window.addEventListener("keydown",(function(e){"Escape"===e.code&&n(!1)})),(0,i.jsx)("div",{className:a?"modal active":"modal",onClick:function(){return n(!1)},children:(0,i.jsxs)("div",{className:a?"modalContent active":"modal",onClick:function(e){return e.stopPropagation()},children:[(0,i.jsx)("button",{className:"CloseButton",onClick:function(){return n(!1)},children:(0,i.jsx)("img",{src:t,alt:"cancel"})}),(0,i.jsx)("div",{className:"modalImgCheckbox",children:(0,i.jsx)("img",{className:"modalImg",src:r.img,alt:"".concat(r.make," ").concat(r.model,", ").concat(r.year)})}),(0,i.jsxs)("h3",{className:"modalTitleMake",children:[r.make," ",(0,i.jsx)("span",{className:"modalTitleModel",children:r.model}),","," ",r.year]}),(0,i.jsxs)("p",{className:"modalInfoCar",children:[r.address," | ",r.id," | ","Year: ".concat(r.year)," |","Type: ".concat(r.type),"| ","Fuel Consumption:".concat(r.fuelConsumption)," ","| ","Engine Size: ".concat(r.engineSize)]}),(0,i.jsx)("p",{className:"modalDescription",children:r.description}),(0,i.jsx)("p",{className:"modalAccessories",children:"Accessories and functionalities:"}),(0,i.jsxs)("p",{className:"modalInfoCar",children:[r.accessories.join(" | ")," | ",r.functionalities.join(" | ")]}),(0,i.jsx)("h4",{className:"modalTitle",children:"Rental Conditions: "}),(0,i.jsxs)("div",{className:"modalCondition",children:[r.rentalConditions.split("\n").map((function(e,a){return(0,i.jsx)("p",{className:"modalConditions",children:e},a)})),(0,i.jsx)("p",{className:"modalConditions",children:"Mileage: ".concat(r.mileage)}),(0,i.jsx)("p",{className:"modalConditions",children:"Price:".concat(r.rentalPrice)})]}),(0,i.jsx)("a",{className:"modalBtn",href:"tel:+380730000000",children:"Rental car"})]})})}},839:function(e,a,n){n.r(a),n.d(a,{default:function(){return I}});var t=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),i={form:"FilterBar_form__p0Ow9",inputName:"FilterBar_inputName__T6Gmq",inputCarName:"FilterBar_inputCarName__w9-LZ",inputPrice:"FilterBar_inputPrice__G3mim","input\u0421arMileageMin":"FilterBar_input\u0421arMileageMin__U-myh","input\u0421arMileageMax":"FilterBar_input\u0421arMileageMax__eJ+RS",formBtn:"FilterBar_formBtn__MxLkX"},r=n(184),s=function(){for(var e=[],a=10;a<=300;a+=10)e.push(a);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{className:i.form,children:[(0,r.jsxs)("label",{className:i.label,children:[(0,r.jsx)("p",{className:i.inputName,children:"Car brand"}),(0,r.jsx)("input",{className:i.inputCarName,type:"text",name:"car",list:"carName",placeholder:"Enter the text"}),(0,r.jsx)("datalist",{id:"carName",children:t.map((function(e,a){return(0,r.jsx)("option",{value:e},a)}))})]}),(0,r.jsxs)("label",{className:i.label,children:[(0,r.jsx)("p",{className:i.inputName,children:"Price/ 1 hour"}),(0,r.jsx)("input",{className:i.inputPrice,type:"number",name:"price",list:"carPrice",placeholder:"To"}),(0,r.jsx)("datalist",{id:"carPrice",children:e.map((function(e){return(0,r.jsx)("option",{value:e},e)}))})]}),(0,r.jsxs)("label",{className:i.label,children:[(0,r.jsx)("p",{className:i.inputName,children:" \u0421ar mileage / km"}),(0,r.jsx)("input",{className:i["input\u0421arMileageMin"],type:"number",name:"min",min:1,placeholder:"From"}),(0,r.jsx)("input",{className:i["input\u0421arMileageMax"],type:"number",name:"max",max:9999,placeholder:"To"})]}),(0,r.jsx)("button",{className:i.formBtn,children:"Search"})]})})},c=n(3433),l=n(9439),o="CarList_catalogConteiner__una00",m="CarList_cards__c+QlB",d="CarList_carImg__nsPwm",u="CarList_carTitle__SrWDi",p="CarList_carTitleMake__06pYn",h="CarList_carTitleModel__6nh44",f="CarList_cardInfo__tHTnJ",x="CarList_cardBtn__WosAB",_="CarList_carImgBtn__QuJJ7",j="CarList_carFavoriteBtn__bFWLR",N="CarList_loadMoreButton__vR8Dz",C=n(2791),g=n(5861),v=n(7757),b=n.n(v),M=n(1243);function k(){return(k=(0,g.Z)(b().mark((function e(a){var n,t;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.Z.get("/carRenralInfo/carRentalInfo?limit=".concat(8,"&page=").concat(a));case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}M.Z.defaults.baseURL="https://6521c105a4199548356d8c57.mockapi.io";var B=function(e){return k.apply(this,arguments)},y=n(9434),L=n(5249),Z=n(8699),F=n(8128),P=n(9627),w=function(){var e=(0,C.useState)([]),a=(0,l.Z)(e,2),n=a[0],t=a[1],i=(0,C.useState)(1),s=(0,l.Z)(i,2),g=s[0],v=s[1],b=(0,y.v9)((function(e){return e.advert.items})),M=(0,y.I0)(),k=(0,C.useState)(!0),w=(0,l.Z)(k,2),I=w[0],S=w[1];(0,C.useEffect)((function(){!function(e){B(e).then((function(e){t((function(a){return[].concat((0,c.Z)(a),(0,c.Z)(e))}))})).catch((function(e){return console.log(e)}))}(g)}),[g]);var T=(0,C.useState)(null),R=(0,l.Z)(T,2),A=R[0],E=R[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:o,children:[n.map((function(e){return(0,r.jsxs)("div",{className:m,children:[(0,r.jsxs)("div",{className:_,children:[(0,r.jsx)("img",{className:d,src:e.img,alt:"".concat(e.make," ").concat(e.model,", ").concat(e.year)}),(0,r.jsx)("button",{onClick:function(){return function(e){var a=b.some((function(a){return a.id===e.id}));M(a?(0,L.Ni)(e):(0,L.a3)(e))}(e)},className:j,children:b.some((function(a){return a.id===e.id}))?(0,r.jsx)("img",{src:F.Z,alt:"icon add"}):(0,r.jsx)("img",{src:P.Z,alt:"icon remove"})})]}),(0,r.jsxs)("div",{className:u,children:[(0,r.jsxs)("h3",{className:p,children:[e.make," ",(0,r.jsx)("span",{className:h,children:e.model}),","," ",e.year]}),(0,r.jsx)("span",{children:e.rentalPrice})]}),(0,r.jsxs)("p",{className:f,children:[e.address," | ",e.rentalCompany,' | "Premium audio system" |'," ",e.model," | ",e.id,' | "Power liftgate"']}),(0,r.jsx)("button",{className:x,onClick:function(){return function(e){E(e),S(!0)}(e)},children:"Learn more"})]},e.id)})),console.log(n.length),n.length<=50&&(0,r.jsx)("button",{onClick:function(){v((function(e){return e+1}))},className:N,type:"button",children:"Load More"}),(0,r.jsx)(Z.Z,{active:I,setActive:S,infoCar:A})]})})},I=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(s,{}),(0,r.jsx)(w,{})]})})}}}]);
//# sourceMappingURL=839.405a2907.chunk.js.map