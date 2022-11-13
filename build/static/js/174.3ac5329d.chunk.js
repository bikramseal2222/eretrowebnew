"use strict";(self.webpackChunkerestro=self.webpackChunkerestro||[]).push([[174],{7174:function(e,r,n){n.r(r),n.d(r,{default:function(){return b}});var a=n(9439),s=n(5953),t=n(199),i=n(4565),d=n(7205),o=n(4585),l=n(2791),c=n(7235),m=n(1803),h=n(228),p=n(3978),x=n(7201),j=n(184),v={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4},u=function(e){var r=e.id,n=function(){return Z(!1)},t=l.useState(!1),o=(0,a.Z)(t,2),u=o[0],Z=o[1],b=(0,x.TC)(),y=(0,l.useState)(),N=(0,a.Z)(y,2),f=N[0],g=N[1];return(0,l.useEffect)((function(){c.QF(r).then((function(e){e.error||g(e.data[0])})).catch((function(){}))}),[r]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.Z,{color:"success",variant:"outlined",onClick:function(){return Z(!0)},children:"Order Details"}),(0,j.jsx)(m.Z,{open:u,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,j.jsxs)(h.Z,{sx:v,children:[(0,j.jsx)(i.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Order Summary"}),(0,j.jsx)("div",{className:"border"}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"order-detail-img-wrapper",children:[(0,j.jsx)(p.Z,{size:"xl",src:f&&f.order_items[0].partner_details[0].partner_profile}),(0,j.jsxs)("div",{className:"order-detail-desc",children:[(0,j.jsx)(i.Z,{variant:"body1",component:"p",children:f&&f.order_items[0].partner_details[0].partner_name}),(0,j.jsx)(i.Z,{variant:"body2",component:"p",sx:{color:"var(--light-color--)"},children:f&&f.order_items[0].partner_details[0].partner_address})]})]}),(0,j.jsx)("div",{className:"border"}),(0,j.jsx)("div",{className:"order-details-wrapper",children:f&&f.order_items.map((function(e,r){return(0,j.jsxs)("div",{children:[(0,j.jsx)(i.Z,{variant:"body2",component:"p",sx:{fontWeight:600},children:e.product_name},r),(0,j.jsxs)(s.ZP,{container:!0,children:[(0,j.jsx)(s.ZP,{item:!0,md:10,children:(0,j.jsxs)(i.Z,{variant:"body2",component:"p",children:[(0,j.jsx)("span",{children:e.quantity})," \xd7 ",b,e.price]})}),(0,j.jsx)(s.ZP,{item:!0,md:2,sx:{textAlign:"end"},children:(0,j.jsxs)(i.Z,{variant:"body2",component:"p",children:[b,e.sub_total]})})]}),(0,j.jsx)("div",{className:"border"})]},r)}))}),(0,j.jsx)("div",{className:"order-total",children:(0,j.jsxs)(s.ZP,{container:!0,children:[(0,j.jsxs)(s.ZP,{item:!0,md:6,className:"order-details",children:[(0,j.jsx)(i.Z,{variant:"body1",component:"p",sx:{fontWeight:600},children:"Total"}),(0,j.jsx)(i.Z,{variant:"body1",component:"p",children:"Taxes & Charges"}),(0,j.jsx)(i.Z,{variant:"body1",component:"p",children:"Total Pay"})]}),(0,j.jsxs)(s.ZP,{item:!0,md:6,sx:{textAlign:"end"},className:"order-details",children:[(0,j.jsxs)(i.Z,{variant:"body1",component:"p",sx:{fontWeight:600},children:[b," ",f&&f.total]}),(0,j.jsxs)(i.Z,{variant:"body1",component:"p",children:[b,f&&f.tax_amount]}),(0,j.jsxs)(i.Z,{variant:"body1",component:"p",className:"values",children:[b,f&&f.total_payable]})]})]})}),(0,j.jsx)("div",{className:"border"}),(0,j.jsx)("div",{className:"total",children:(0,j.jsxs)(s.ZP,{container:!0,children:[(0,j.jsx)(s.ZP,{item:!0,md:6,children:(0,j.jsx)(i.Z,{variant:"body1",component:"p",className:"bold",children:"Grand Total"})}),(0,j.jsx)(s.ZP,{item:!0,md:6,sx:{textAlign:"end"},children:(0,j.jsxs)(i.Z,{variant:"body1",component:"p",className:"bold",children:[b,f&&f.total_payable]})})]})}),(0,j.jsx)("div",{className:"border"}),(0,j.jsx)("div",{className:"order-summary",children:(0,j.jsxs)("div",{className:"order-payment-wrapper",children:[(0,j.jsxs)("div",{className:"order-id order-style",children:[(0,j.jsx)(i.Z,{variant:"body1",component:"p",children:"ORDER ID"}),(0,j.jsx)(i.Z,{className:"mb20 light",variant:"body2",component:"p",children:f&&f.order_items[0].order_id})]}),(0,j.jsxs)("div",{className:"payment-type order-style",children:[(0,j.jsx)(i.Z,{variant:"body1",component:"p",children:"PAYMENT"}),(0,j.jsxs)(i.Z,{className:"mb20 light",variant:"body2",component:"p",children:["paid : using ",f&&f.payment_method]})]}),(0,j.jsxs)("div",{className:"order-date order-style",children:[(0,j.jsx)(i.Z,{variant:"body1",component:"p",children:"DATE"}),(0,j.jsx)(i.Z,{className:"mb20 light",variant:"body2",component:"p",children:f&&f.date_added})]}),(0,j.jsxs)("div",{className:"order-phonenum order-style",children:[(0,j.jsx)(i.Z,{variant:"body1",component:"p",children:"PHONE NO"}),(0,j.jsxs)(i.Z,{variant:"body2",component:"p",className:"light mb20",children:[f&&f.mobile.substring(0,7),"\xd7\xd7\xd7"]})]}),(0,j.jsxs)("div",{className:"order-phonenum order-style",children:[(0,j.jsx)(i.Z,{variant:"body1",component:"p",children:"Deliver to"}),(0,j.jsx)(i.Z,{variant:"body2",component:"p",className:"light",children:f&&f.address})]})]})})]}),(0,j.jsx)(d.Z,{variant:"contained",fullWidth:!0,onClick:n,color:"error",className:"mt20",sx:{textTransform:"capitalize"},children:"Close"})]})})]})},Z=n(569),b=function(){var e=(0,x.TC)(),r=(0,l.useState)([]),n=(0,a.Z)(r,2),m=n[0],h=n[1],p=(0,l.useState)(3),v=(0,a.Z)(p,1)[0],b=(0,l.useState)(1),y=(0,a.Z)(b,2),N=y[0],f=y[1],g=(0,l.useState)(1),_=(0,a.Z)(g,2),P=_[0],w=_[1],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;c.QF("",v,e).then((function(e){if(!e.error){var r=parseInt(e.total)/v;r=Math.ceil(r),f(r),h(e.data),console.log(e.data)}})).catch((function(){}))};(0,l.useEffect)((function(){C()}),[]);return(0,j.jsx)(j.Fragment,{children:m&&0!==m?(0,j.jsxs)(j.Fragment,{children:[m&&m.map((function(r,n){var a=r.order_items,o=r.total_payable,l=r.active_status,m=r.id,p=r.address,x=["awaiting","pending","preparing","out_for_delivery","delivered","cancelled"],v=a[0].cancelable_till,Z=x.indexOf(v),b=x.indexOf(l);return(0,j.jsx)("div",{className:"order-wrapper",children:(0,j.jsxs)("div",{className:"order-content-wrapper",children:[(0,j.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,j.jsx)(s.ZP,{item:!0,md:2,children:(0,j.jsx)("div",{className:"order-image-wrapper",children:(0,j.jsx)(t.Z,{component:"img",alt:a[0].name,height:"140",image:a[0].partner_details[0].partner_profile})})}),(0,j.jsx)(s.ZP,{item:!0,md:10,children:(0,j.jsxs)("div",{className:"order-name-wrapper",children:[(0,j.jsxs)(s.ZP,{container:!0,children:[(0,j.jsxs)(s.ZP,{item:!0,md:6,sx:{mt:"",mb:""},children:[(0,j.jsx)(i.Z,{variant:"h6",component:"h5",className:"ml20",children:a[0].partner_details[0].partner_name}),(0,j.jsx)(i.Z,{variant:"body2",component:"h5",className:"order-location-wrapper ml20",color:"var(--light-color--)",children:p})]}),(0,j.jsx)(s.ZP,{item:!0,md:6,sx:{textAlign:"end"},children:(0,j.jsx)(d.Z,{color:"success",sx:{fontWeight:"bold"},children:l})})]}),r.order_items.map((function(e,r){var n=e.product_name,a=e.quantity;return(0,j.jsxs)(i.Z,{variant:"subtitle1",component:"h5",className:"order-summary ml20",children:[n," \xd7"," ",(0,j.jsx)("span",{style:{color:"var(--light-color--)"},children:a})]},r)})),(0,j.jsx)(i.Z,{variant:"body2",component:"h5",color:"var(--light-color--)",className:"order-summary ml20",children:a[0].date_added})]})})]}),(0,j.jsx)("div",{className:"border"}),(0,j.jsx)("div",{className:"total-amount",children:(0,j.jsxs)(s.ZP,{container:!0,children:[(0,j.jsx)(s.ZP,{item:!0,md:6,className:"bill-detail-wrapper",children:(0,j.jsx)(i.Z,{variant:"subtitle1",component:"h5",children:"Total Pay"})}),(0,j.jsx)(s.ZP,{item:!0,md:6,children:(0,j.jsxs)(i.Z,{variant:"subtitle1",component:"h5",sx:{textAlign:"end"},children:[e," ",o]})})]})}),(0,j.jsx)("div",{className:"border"}),(0,j.jsxs)("div",{className:"order-btn-wrapper ",children:[(0,j.jsx)(u,{id:m}),1===a[0].is_cancelable&&b<=Z?(0,j.jsx)(d.Z,{variant:"contained",color:"error",onClick:function(e){return function(e){c.zi("cancelled",e,"test").then((function(e){e.error||h(e.data)})).catch((function(e){console.log(e)}))}(m)},children:"cancel Order"},n):null]})]})},n)})),(0,j.jsx)("div",{className:"pagination",children:(0,j.jsx)(o.Z,{count:N,color:"error",variant:"outlined",shape:"rounded",onChange:function(e,r){if(P!==r){var n=(r-1)*v;w(r),C(n)}},defaultPage:P})})]}):(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(Z.Z,{})})})}}}]);
//# sourceMappingURL=174.3ac5329d.chunk.js.map