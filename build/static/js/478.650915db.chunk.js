"use strict";(self.webpackChunkerestro=self.webpackChunkerestro||[]).push([[478],{6229:function(e,r,t){var n=t(4942),a=t(1413),i=t(9439),s=t(8928),l=t(4565),o=t(1803),c=t(3186),d=t(148),u=t(8854),m=t(7205),h=t(2791),x=t(9276),p=t(7993),j=t(8141),v=t(1741),f=t(184),Z={lat:parseFloat(localStorage.getItem("latitude")),lng:parseFloat(localStorage.getItem("longitude"))};r.Z=function(e){var r=e.addresses,t=(0,h.useState)(!1),g=(0,i.Z)(t,2),b=g[0],y=g[1],_=function(){return y(!1)},N=(0,h.useState)(),S=(0,i.Z)(N,2),w=S[0],C=S[1],k=h.useState("home"),A=(0,i.Z)(k,2),P=A[0],I=A[1],T=(0,v.S)(),F=T.add_address,D=T.onMarkerDragEnd,W=T.setUser,q=T.city,z=T.landmark,E=T.area,R=T.mobile,U=T.userAddress,L=function(e){var r=e.target.name,t=e.target.value;W((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,n.Z)({},r,t))}))},O=function(e){C(e.target.value)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Z,{variant:"outlined",onClick:function(){return y(!0)},sx:{cursor:"pointer",height:200,padding:"50px",textAlign:"center"},children:(0,f.jsxs)("div",{children:[(0,f.jsx)(j.Z,{className:"service-svg"}),(0,f.jsx)(l.Z,{variant:"h6",component:"h5",className:"bold",children:"Add Address"})]})}),(0,f.jsx)(o.Z,{open:b,onClose:_,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,f.jsx)(x.Z,{className:"map-modal",children:(0,f.jsxs)("div",{className:"map-wrapper",children:[(0,f.jsx)(l.Z,{variant:"h5",component:"h5",className:"mb20",children:"Set Your Location"}),(0,f.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),_(),W(""),F(w)}(e)},children:[(0,f.jsx)(p.b6,{id:"google-map",center:Z,zoom:10,children:(0,f.jsx)(p.Jx,{position:Z,draggable:!0,onDragEnd:D,children:(0,f.jsx)(p.nx,{position:Z,children:(0,f.jsx)("div",{children:r})})})}),(0,f.jsx)(c.Z,{fullWidth:!0,label:"Address",id:"fullWidth ",className:"mb20 mt20",name:"userAddress",value:U,onChange:function(e){L(e)}}),(0,f.jsx)(c.Z,{fullWidth:!0,label:"City",id:"fullWidth ",className:"mb20 mt20",name:"city",value:q,onChange:function(e){L(e)}}),(0,f.jsx)(c.Z,{fullWidth:!0,label:"Area",id:"fullWidth ",name:"area",value:E,className:"mb20",onChange:function(e){L(e)}}),(0,f.jsx)(c.Z,{fullWidth:!0,label:"Mobile No",id:"fullWidth ",className:"mb20 ",name:"mobile",value:R,onChange:function(e){L(e)}}),(0,f.jsx)(c.Z,{fullWidth:!0,label:"landmark",id:"fullWidth ",name:"landmark",value:z,className:"mb20",onChange:function(e){L(e)}}),(0,f.jsxs)("div",{className:"btn-grp mt20",children:[(0,f.jsx)(l.Z,{children:"Tag This Location For Later"}),(0,f.jsxs)(d.Z,{value:P,color:"error",exclusive:!0,onChange:function(e,r){null!==r&&I(r)},"aria-label":"text alignment",children:[(0,f.jsx)(u.Z,{value:"home","aria-label":"home",onClick:function(e){return O(e)},children:"Home"}),(0,f.jsx)(u.Z,{value:"office","aria-label":"office",onClick:function(e){return O(e)},children:"Office"}),(0,f.jsx)(u.Z,{value:"other","aria-label":"other",onClick:function(e){return O(e)},children:"Other"})]})]}),(0,f.jsx)(m.Z,{fullWidth:!0,variant:"outlined",type:"submit",color:"error",sx:{marginTop:"20px"},children:"Add New Address"})]})]})})})]})}},4478:function(e,r,t){t.r(r),t.d(r,{default:function(){return ae}});var n=t(9439),a=t(2791),i=t(228),s=t(3118),l=t(5651),o=t(7985),c=t(3704),d=t(7205),u=t(4565),m=t(7020),h=t(5953),x=t(6650),p=t(8928),j=t(7544),v=t(6229),f=t(8384),Z=t(184),g=function(e){var r=e.addresses,t=e.setSelectedAddress,i=e.SelectedAddress,s=(0,a.useState)(),l=(0,n.Z)(s,2),o=(l[0],l[1]),c=(0,a.useState)(),m=(0,n.Z)(c,2),x=m[0],g=m[1],b=function(e,r,n){g(r),o(n),localStorage.setItem("address",n),t(e)},y=localStorage.getItem("address");return(0,Z.jsx)(Z.Fragment,{children:i?(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(p.Z,{variant:"outlined",children:(0,Z.jsxs)("div",{className:"selectedaddress-wrapper",style:{padding:"20px"},children:[(0,Z.jsx)("div",{className:"address-tite mb20",children:(0,Z.jsxs)(u.Z,{variant:"h6",component:"h5",className:"bold",children:["Delivery Address",(0,Z.jsx)(f.Z,{color:"error",sx:{verticalAlign:"middle",marginLeft:"20px"}})]})}),(0,Z.jsx)(u.Z,{variant:"body1",component:"h5",className:"bold",children:y}),(0,Z.jsx)(u.Z,{variant:"body2",component:"h6",color:"#8d8686",sx:{mt:"10px"},children:x})]})})}):(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(h.ZP,{container:!0,spacing:2,children:[r.map((function(e,r){var t=e.address,n=e.area,a=e.id,i=e.type;return(0,Z.jsx)(h.ZP,{item:!0,md:6,children:(0,Z.jsxs)(p.Z,{variant:"outlined",sx:{height:210,position:"relative"},children:[(0,Z.jsx)("div",{className:"location-wrapper",style:{height:"auto"},children:(0,Z.jsxs)(h.ZP,{container:!0,children:[(0,Z.jsx)(h.ZP,{item:!0,md:2,children:(0,Z.jsx)(j.Z,{className:"service-svg"})}),(0,Z.jsxs)(h.ZP,{item:!0,md:10,children:[(0,Z.jsx)(u.Z,{variant:"h6",component:"h5",sx:{color:"rgb(79, 79, 79)",textTransform:"capitalize"},children:i}),(0,Z.jsx)(u.Z,{variant:"subtitle1",component:"h5",children:t})]})]})}),(0,Z.jsx)(d.Z,{variant:"contained",color:"error",id:a,sx:{textTransform:"capitalize",marginLeft:"50px",position:"absolute",bottom:"1rem"},onClick:function(e){return b(a,n,t)},children:"Delivery Here"})]})},r)})),(0,Z.jsx)(h.ZP,{item:!0,md:6,children:(0,Z.jsx)(v.Z,{})})]})})})},b=t(881),y=t(7776),_=t(1898),N=t(7265),S=t(2900),w=t(6321),C=t(4420),k=t(9963),A=t(1680),P=t(9773),I=t(807),T=t(3651),F=t(1224),D=t(7201),W=t(4648),q=t(8439),z=t(6845),E=t(1087),R=function(e){var r=e.setDeliveryType,t=(0,a.useState)(),i=(0,n.Z)(t,2),s=i[0],l=i[1],o=(0,a.useState)(),c=(0,n.Z)(o,2),m=c[0],x=c[1],p=(0,F.a)().currentUser,j=(0,W.j)(),v=j.RemoveCartData,f=j.usercart,g=j.tax_amount,b=j.cartData,y=j.clearCart,R=(j.get_promo_code,(0,D.TC)()),U=function(e){l(e.target.value===s?null:e.target.value)},L=s&&parseFloat(s),O=b&&b.overall_amount+L,M=null!==L&&0!==L?O:b&&b.overall_amount;localStorage.setItem("price",M),localStorage.setItem("tip",L);var V=function(e){r(e.target.value)};return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)("div",{className:"cart-wrapper",children:[(0,Z.jsxs)("div",{className:"cart-content-wrapper",children:[(0,Z.jsx)("div",{className:"user-wrapper",children:(0,Z.jsxs)("div",{className:"title",children:[(0,Z.jsx)(u.Z,{variant:"h6",component:"h5",children:p.username}),(0,Z.jsx)(u.Z,{variant:"subtitle1",component:"h5",children:p.email})]})}),(0,Z.jsx)("div",{className:"border"}),(0,Z.jsx)("div",{className:"delivery-type",children:(0,Z.jsx)(_.Z,{children:(0,Z.jsxs)(N.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",defaultValue:"0",children:[(0,Z.jsx)(S.Z,{value:"0",control:(0,Z.jsx)(w.Z,{color:"error"}),label:"Delivery",onChange:function(e){return V(e)}}),(0,Z.jsx)(S.Z,{value:"1",control:(0,Z.jsx)(w.Z,{color:"error"}),label:"Self Pickup",onChange:function(e){return V(e)}})]})})}),(0,Z.jsx)("div",{className:"border"}),(0,Z.jsx)("div",{className:"restaurant-name",children:(0,Z.jsx)("div",{className:"title",children:(0,Z.jsx)(u.Z,{variant:"subtitle1",component:"h5",sx:{fontWeight:"bold"},children:"ORDER FROM"})})}),(0,Z.jsxs)("div",{className:"res-name",children:[(0,Z.jsx)(u.Z,{variant:"subtitle1",component:"h5",children:f&&f[0].product_details[0].partner_details[0].partner_name}),(0,Z.jsx)(u.Z,{variant:"subtitle1",component:"h5",children:f&&f[0].product_details[0].partner_details[0].partner_address})]}),(0,Z.jsx)("div",{className:"border"}),(0,Z.jsx)("div",{className:"res-product-wrapper",children:f&&f.map((function(e,r){var t=e.product_variant_id,n=e.name,a=e.special_price,i=e.price,s=e.qty,l=e.product_details,o=e.short_description,c=e.minimum_order_quantity,m=e.total_allowed_quantity,h=a>0&&a<i?a:i,x=l[0].variants[0].add_ons_data.map((function(e){return e.description})).join(", ");return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"cart-product",children:[(0,Z.jsxs)("div",{className:"product-wrapper",children:[(0,Z.jsxs)("div",{className:"product-grid",children:[(0,Z.jsx)("div",{className:"food-status",children:(0,Z.jsx)("img",{src:"/images/veg.png",alt:"veg"})}),(0,Z.jsx)(u.Z,{variant:"body1",component:"h5",sx:{ml:"10px"},children:n})]}),""!==x?(0,Z.jsx)("div",{className:"addons",children:(0,Z.jsxs)(u.Z,{variant:"body2",component:"h5",sx:{ml:"30px"},children:[(0,Z.jsx)("b",{children:"addons "})," : ",x]})}):null,(0,Z.jsx)("div",{className:"price",children:(0,Z.jsxs)(u.Z,{variant:"body1",component:"h5",sx:{ml:"30px"},children:[R,h,"\xd7 ",s]})})]}),(0,Z.jsxs)("div",{className:"update-product mt20",children:[(0,Z.jsx)(z.Z,{title:n,short_description:o,indicator:l&&l[0].partner_details[0].partner_indicator,rating:l&&l[0].partner_details[0].partner_rating,variants:l&&l[0].variants,minimum_order_quantity:c,total_allowed_quantity:m,addons:l&&l[0].product_add_ons,is_restro_open:l&&l[0].partner_details[0].is_restro_open,partner_id:l&&l[0].partner_details[0].partner_id,product_qty:s,type:"edit_cart"}),(0,Z.jsx)(d.Z,{variant:"text",color:"error",onClick:function(e){return v(t)},children:"Remove from Cart"})]})]}),(0,Z.jsx)("div",{className:"border"})]},r)}))})]}),(0,Z.jsx)("div",{className:"clear_cart",children:(0,Z.jsx)(d.Z,{variant:"outlined",fullWidth:!0,color:"error",onClick:function(e){return y()},children:"Clear Cart"})}),(0,Z.jsx)("div",{className:"border"}),(0,Z.jsx)("div",{className:"add_more_food",children:(0,Z.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,Z.jsx)(h.ZP,{item:!0,md:10,children:(0,Z.jsx)(u.Z,{children:"Add more food in cart"})}),(0,Z.jsx)(h.ZP,{item:!0,md:2,children:(0,Z.jsx)(E.rU,{to:"/restaurant/".concat(f[0]&&f[0].product_details[0].partner_details[0].slug),children:(0,Z.jsx)(q.Z,{color:"error"})})})]})}),(0,Z.jsx)("div",{className:"border"}),(0,Z.jsx)("div",{className:"border"}),(0,Z.jsxs)("div",{className:"rider-tip",children:[(0,Z.jsxs)("div",{className:"tip-header",children:[(0,Z.jsx)(u.Z,{component:"h5",variant:"body1",children:"Support Your Rider"}),(0,Z.jsx)(u.Z,{component:"h5",variant:"body2",children:"Helping your delivery rider by adding tip"})]}),(0,Z.jsxs)("div",{className:"tip-wrapper",children:[(0,Z.jsx)(d.Z,{color:"error",value:"10",onClick:function(e){return U(e)},children:"+10"}),(0,Z.jsx)(d.Z,{color:"error",value:"20",onClick:function(e){return U(e)},children:"+20"}),(0,Z.jsx)(d.Z,{color:"error",value:"30",onClick:function(e){return U(e)},children:"+30"}),(0,Z.jsx)(d.Z,{color:"error",value:"50",onClick:function(e){return U(e)},children:"+50"})]}),(0,Z.jsxs)("div",{className:"custom-tip",children:[(0,Z.jsx)(_.Z,{sx:{m:1,width:"25ch"},variant:"outlined",children:(0,Z.jsx)(C.Z,{id:"outlined-adornment-weight",color:"error",value:m,onChange:function(e){x(e.target.value)},placeholder:"custom tip","aria-describedby":"outlined-weight-helper-text",inputProps:{"aria-label":"weight"}})}),(0,Z.jsx)(d.Z,{color:"error",variant:"contained",onClick:function(){return l(m===s?null:m),void x("")},sx:{marginTop:"15px",textTransform:"capitalize"},children:"Add"})]}),(0,Z.jsx)("div",{className:"border"}),(0,Z.jsxs)("div",{className:"bill-details-wrapper",children:[(0,Z.jsx)("div",{className:"bill-Typography-header",children:(0,Z.jsx)(u.Z,{component:"span",variant:"body2",children:"Bill Details"})}),(0,Z.jsx)("div",{className:"bill-details",children:(0,Z.jsx)(k.Z,{children:(0,Z.jsx)(A.Z,{"aria-label":"simple table",children:(0,Z.jsxs)(P.Z,{children:[(0,Z.jsxs)(I.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(T.Z,{component:"th",scope:"row",className:"table-row",children:"Subtotal Total"}),(0,Z.jsxs)(T.Z,{align:"right",children:[R,b&&b.sub_total]})]}),(0,Z.jsxs)(I.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(T.Z,{component:"th",scope:"row",className:"table-row",children:"Charges and Taxes"}),(0,Z.jsxs)(T.Z,{align:"right",children:[R,b&&g]})]}),(0,Z.jsxs)(I.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(T.Z,{component:"th",scope:"row",className:"table-row",children:"Total"}),(0,Z.jsxs)(T.Z,{align:"right",children:[R,b&&b.overall_amount]})]}),null!==s?(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(I.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(T.Z,{component:"th",scope:"row",className:"table-row",children:"Delivery Tip"}),(0,Z.jsxs)(T.Z,{align:"right",children:[R,s,(0,Z.jsx)(d.Z,{color:"error",value:"10",className:"remove_tip",onClick:function(e){l(s===s?null:s)},children:"Remove"})]})]})}):null,(0,Z.jsxs)(I.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(T.Z,{component:"th",scope:"row",className:"table-row",children:"Grand Total"}),(0,Z.jsxs)(T.Z,{align:"right",children:[R,M]})]})]})})})})]})]})]})})},U=t(7235),L=t(7689),O=function(e){var r=e.SelectedAddress,t=e.deliveryType,i=(0,W.j)().usercart,s=(0,a.useState)(),l=(0,n.Z)(s,2),o=(l[0],l[1]),c=(0,L.s0)(),u=(0,a.useState)(!1),m=(0,n.Z)(u,2),h=m[0],x=m[1];return(0,Z.jsx)("div",{children:(0,Z.jsx)(d.Z,{variant:"outlined",onClick:function(){var e=i.map((function(e){return e.product_variant_id})).join(", "),n=i.map((function(e){return e.qty})).join(", "),a=localStorage.getItem("price");x(!0),U.vU(e,n,a,0,"COD","pending",r,"",t).then((function(e){x(!1),o(e.data),c("/confirmed"),window.location.reload()})).catch((function(e){console.log(e)}))},color:"error",children:h?"Please Wait":"Pay Now"})})},M=t(2259),V=t(6210),H=function(e){var r=e.SelectedAddress,t=(0,F.a)().currentUser,i=(0,W.j)().usercart,s=(0,a.useState)(),l=(0,n.Z)(s,2),o=(l[0],l[1]),c=(0,M.V)().transactions,u=(0,a.useState)(!1),m=(0,n.Z)(u,2),h=m[0],x=m[1],p=(0,a.useState)(),j=(0,n.Z)(p,2),v=(j[0],j[1]);(0,a.useEffect)((function(){var e=document.createElement("script");return e.src="https://checkout.flutterwave.com/v3.js",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]);return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(d.Z,{variant:"outlined",color:"error",onClick:function(e){return function(){var e=i.map((function(e){return e.product_variant_id})).join(", "),n=i.map((function(e){return e.qty})).join(", "),a=localStorage.getItem("price");x(!0),U.vU(e,n,a,0,"flutterwave","awaiting",r).then((function(e){x(!1),o(e.order_id),localStorage.setItem("order_id",e.order_id)})).catch((function(e){console.log(e)})),window.FlutterwaveCheckout({public_key:V.Z.flutterwave_public_key,tx_ref:"titanic-48981487343MDI0NzMx",amount:a,currency:"NGN",payment_options:"card, mobilemoneyghana, ussd",callback:function(e){if("successful"===e.status){var r=localStorage.getItem("order_id");console.log(r),c(r,"flutterwave","flutterwave",e.transaction_id,a)}},onclose:function(e){if(e||!1===window.verified){var r=localStorage.getItem("order_id");U.Pu(r).then((function(e){e.error||v(e.data)}))}else document.querySelector("form").style.display="none",!0===window.verified?document.querySelector("#payment-success").style.display="block":document.querySelector("#payment-pending").style.display="block"},customer:{email:t.email,phone_number:t.mobile,name:t.username}})}()},children:h?"Please Wait":"Pay Now"})})},B=function(e){var r=e.SelectedAddress,t=(0,F.a)().currentUser,i=(0,W.j)().usercart,s=(0,M.V)(),l=s.Place_Order,o=s.orders,c=s.transactions,u=s.setLoad,m=s.load,h=(0,a.useState)(),x=(0,n.Z)(h,2),p=(x[0],x[1]);return(0,Z.jsx)(d.Z,{variant:"outlined",onClick:function(e){return function(){u(!0);var e=i.map((function(e){return e.product_variant_id})).join(", "),n=i.map((function(e){return e.qty})).join(", "),a=localStorage.getItem("price"),s=localStorage.getItem("tip"),d=localStorage.getItem("order_id");l(e,n,a,0,"razorpay","awaiting",r,s,"razorpay");var m={key:V.Z.razorpay_public_key,amount:100*a,name:"eRestro",description:"eRestro",order_id:o,prefill:{contact:t.mobile,email:t.email},notes:{order_id:d},handler:function(e){var r=localStorage.getItem("order_id");c(r,"razorpay","razorpay",e.razorpay_payment_id,a)},modal:{ondismiss:function(){var e=localStorage.getItem("order_id");U.Pu(e).then((function(e){e.error||p(e.data)}))}}},h=new window.Razorpay(m);h.open(),h.on("payment.failed",(function(){U.Pu(d).then((function(e){e.error||p(e.data)}))}))}()},color:"error",children:m?"Please Wait":"Pay Now"})},G=t(4165),J=t(5861),Y=t(3473),$=t(5764),K=t(5985),Q=function(e){var r=e.SelectedAddress,t=(0,$.useStripe)(),i=(0,$.useElements)(),s=(0,F.a)().currentUser,l=(0,W.j)().usercart,o=(0,M.V)(),c=o.Place_Order,u=o.transactions,m=o.setLoad,h=o.load,x=(0,a.useState)(),p=(0,n.Z)(x,2),j=(p[0],p[1]),v=function(){var e=(0,J.Z)((0,G.Z)().mark((function e(n){var a,o,d,h,x,p,v,f,Z;return(0,G.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),m(!0),a=l.map((function(e){return e.product_variant_id})).join(", "),o=l.map((function(e){return e.qty})).join(", "),d=localStorage.getItem("price"),h=localStorage.getItem("tip"),c(a,o,d,0,"stripe","awaiting",r,h,"stripe"),e.next=9,t.createPaymentMethod({type:"card",card:i.getElement($.CardElement)});case 9:if(!(x=e.sent).error){e.next=14;break}K.Am.error(x.error.message),e.next=19;break;case 14:return p=localStorage.getItem("client_id"),e.next=17,t.confirmCardPayment(p,{payment_method:{card:i.getElement($.CardElement),billing_details:{name:s.user_name}}});case 17:"succeeded"===(v=e.sent).paymentIntent.status?(f=localStorage.getItem("order_id"),u(f,"stripe","stripe",v.paymentIntent.id,d)):(Z=localStorage.getItem("order_id"),U.Pu(Z).then((function(e){e.error||j(e.data)})).catch((function(){})));case 19:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,Z.jsxs)("form",{onSubmit:function(e){return v(e)},children:[(0,Z.jsx)($.CardElement,{className:"mt20 mb20"}),(0,Z.jsx)(d.Z,{type:"submit",disabled:!t||!i,color:"error",variant:"outlined",children:h?"Please Wait":"Pay Now"})]})},X=(0,Y.J)(V.Z.stripe_public_key);var ee=function(){return(0,Z.jsx)($.Elements,{stripe:X,children:(0,Z.jsx)(Q,{})})},re=function(e){var r=e.SelectedAddress,t=e.deliveryType,i=(0,a.useState)(0),s=(0,n.Z)(i,2),l=s[0],o=s[1],c=function(e){o(e)};return(0,Z.jsxs)("div",{className:"payment-wrapper",children:[(0,Z.jsxs)(N.Z,{"aria-labelledby":"demo-form-control-label-placement",name:"position",className:"payment",defaultValue:"top",children:[(0,Z.jsx)(S.Z,{value:"cod",control:(0,Z.jsx)(w.Z,{}),label:"Cash On Delivery",onClick:function(e){return c(1)}}),(0,Z.jsx)(S.Z,{value:"razorpay",control:(0,Z.jsx)(w.Z,{}),label:"Razorpay",onClick:function(e){return c(2)}}),(0,Z.jsx)(S.Z,{value:"stripe",control:(0,Z.jsx)(w.Z,{}),label:"Stripe",onClick:function(e){return c(3)}}),(0,Z.jsx)(S.Z,{value:"Flutterwave",control:(0,Z.jsx)(w.Z,{}),label:"Flutterwave",onClick:function(e){return c(4)}})]}),1===l&&(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(O,{SelectedAddress:r,deliveryType:t})}),2===l&&(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(B,{SelectedAddress:r,deliveryType:t})}),3===l&&(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(ee,{SelectedAddress:r,deliveryType:t})}),4===l&&(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(H,{SelectedAddress:r,deliveryType:t})})]})},te=t(1741),ne=t(3168),ae=function(){var e=(0,te.S)().addresses,r=(0,a.useState)(),t=(0,n.Z)(r,2),p=t[0],j=t[1],v=(0,a.useState)(0),f=(0,n.Z)(v,2),_=f[0],N=f[1],S=(0,W.j)().usercart,w=(0,a.useState)(0),C=(0,n.Z)(w,2),k=C[0],A=C[1],P=(0,ne.$)().t;return(0,Z.jsxs)(b.Z,{title:P("cart"),children:[(0,Z.jsx)(y.Z,{crumb:P("Cart")}),(0,Z.jsx)(m.Z,{sx:{mt:"30px"},children:null!==S&&0!==S?(0,Z.jsxs)(h.ZP,{container:!0,spacing:2,children:[(0,Z.jsx)(h.ZP,{item:!0,md:8,children:(0,Z.jsxs)(s.Z,{activeStep:_,orientation:"vertical",color:"error",children:[0===k?(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)(o.Z,{children:"Address"}),(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(g,{addresses:e,setSelectedAddress:j,SelectedAddress:p}),(0,Z.jsx)(i.Z,{sx:{mb:2},children:(0,Z.jsx)("div",{children:(0,Z.jsx)(d.Z,{variant:"contained",color:"error",onClick:function(){N((function(e){return e+1}))},sx:{mt:1,mr:1},children:"continue"})})})]})]}):null,(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)(o.Z,{children:"Payment"}),(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(re,{SelectedAddress:p,deliveryType:k}),(0,Z.jsxs)(x.Z,{square:!0,elevation:0,sx:{p:3},children:[(0,Z.jsx)(u.Z,{children:"All steps completed - you're finished"}),(0,Z.jsx)(d.Z,{onClick:function(){N(0)},sx:{mt:1,mr:1},children:"Reset"})]})]})]})]})}),(0,Z.jsx)(h.ZP,{item:!0,md:4,className:"cart-items-wrapper",sx:{margin:"auto"},children:(0,Z.jsx)(R,{SelectedAddress:p,setDeliveryType:A})})]}):(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)("div",{className:"no-cart-data",children:[(0,Z.jsx)("img",{src:"/images/empty.jpg",alt:"empty cart"}),(0,Z.jsx)(u.Z,{variant:"h6",component:"h5",sx:{textAlign:"center"},children:"No order yet!"}),(0,Z.jsx)(u.Z,{variant:"subtitle1",component:"h5",sx:{textAlign:"center"},children:"Looks like you haven't made your choice yet."}),(0,Z.jsx)(E.rU,{to:"/restaurants",children:(0,Z.jsx)(d.Z,{variant:"outlined",color:"error",children:"Browse Menu"})})]})})})]})}}}]);
//# sourceMappingURL=478.650915db.chunk.js.map