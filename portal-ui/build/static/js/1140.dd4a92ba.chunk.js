"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1140],{39080:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var i=t(18489),r=t(35531),a=t(50390),s=t(38342),l=t.n(s),o=t(86509),c=t(4285),d=t(66946),u=t(51002),m=t(25594),h=t(58217),p=t(65771),x=t(70758),y=t(33034),g=t.n(y),f=t(78626),v=t(72462),j=t(62559),b=(0,c.Z)((function(e){return(0,o.Z)({container:{display:"flex",flexFlow:"column",padding:"20px 0 8px 0"},inputWithCopy:{"& .MuiInputBase-root ":{width:"100%",background:"#FBFAFA","& .MuiInputBase-input":{height:".8rem"},"& .MuiInputAdornment-positionEnd":{marginRight:".5rem","& .MuiButtonBase-root":{height:"2rem"}}},"& .MuiButtonBase-root .min-icon":{width:".8rem",height:".8rem"}},inputLabel:(0,i.Z)((0,i.Z)({},v.YI.inputLabel),{},{fontSize:".8rem"})})}))((function(e){var n=e.label,t=void 0===n?"":n,i=e.value,r=void 0===i?"":i,a=e.classes,s=void 0===a?{}:a;return(0,j.jsxs)("div",{className:s.container,children:[(0,j.jsxs)("div",{className:s.inputLabel,children:[t,":"]}),(0,j.jsx)("div",{className:s.inputWithCopy,children:(0,j.jsx)(h.Z,{value:r,readOnly:!0,endAdornment:(0,j.jsx)(p.Z,{position:"end",children:(0,j.jsx)(g(),{text:r,children:(0,j.jsx)(x.Z,{"aria-label":"copy",tooltip:"Copy",onClick:function(){},onMouseDown:function(){},edge:"end",children:(0,j.jsx)(f.TI,{})})})})})})]})})),w=t(47424),Z=(0,c.Z)((function(e){return(0,o.Z)({warningBlock:{color:"red",fontSize:".85rem",margin:".5rem 0 .5rem 0",display:"flex",alignItems:"center","& svg ":{marginRight:".3rem",height:16,width:16}},credentialTitle:{padding:".8rem 0 0 0",fontWeight:600,fontSize:".9rem"},buttonContainer:{textAlign:"right",marginTop:"1rem"},credentialsPanel:{overflowY:"auto",maxHeight:350},promptTitle:{display:"flex",alignItems:"center"},buttonSpacer:{marginRight:".9rem"},promptIcon:{marginRight:".1rem",display:"flex",alignItems:"center",height:"2rem",width:"2rem"}})}))((function(e){var n=e.classes,t=e.newServiceAccount,s=e.open,o=e.closeModal,c=e.entity;if(!t)return null;var h=l()(t,"console",null),p=l()(t,"idp",!1);return(0,j.jsx)(u.Z,{modalOpen:s,onClose:function(){o()},title:(0,j.jsx)("div",{className:n.promptTitle,children:(0,j.jsxs)("div",{children:["New ",c," Created"]})}),titleIcon:(0,j.jsx)(f.tV,{}),children:(0,j.jsxs)(m.ZP,{container:!0,children:[(0,j.jsxs)(m.ZP,{item:!0,xs:12,className:n.formScrollable,children:["A new ",c," has been created with the following details:",!p&&h&&(0,j.jsx)(a.Fragment,{children:(0,j.jsxs)(m.ZP,{item:!0,xs:12,className:n.credentialsPanel,children:[(0,j.jsx)("div",{className:n.credentialTitle,children:"Console Credentials"}),Array.isArray(h)&&h.map((function(e,n){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(b,{label:"Access Key",value:e.accessKey}),(0,j.jsx)(b,{label:"Secret Key",value:e.secretKey})]})})),!Array.isArray(h)&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(b,{label:"Access Key",value:h.accessKey}),(0,j.jsx)(b,{label:"Secret Key",value:h.secretKey})]})]})}),p?(0,j.jsx)("div",{className:n.warningBlock,children:"Please Login via the configured external identity provider."}):(0,j.jsxs)("div",{className:n.warningBlock,children:[(0,j.jsx)(w.Z,{}),(0,j.jsx)("span",{children:"Write these down, as this is the only time the secret will be displayed."})]})]}),(0,j.jsxs)(m.ZP,{item:!0,xs:12,className:n.buttonContainer,children:[(0,j.jsx)(d.Z,{id:"done-button",variant:"outlined",className:n.buttonSpacer,onClick:function(){o()},color:"primary",children:"Done"}),!p&&(0,j.jsx)(d.Z,{id:"download-button",onClick:function(){var e={};if(h)if(Array.isArray(h)){var n=h.map((function(e){return{url:e.url,access_key:e.accessKey,secret_key:e.secretKey,api:"s3v4",path:"auto"}}));e={console:(0,r.Z)(n)}}else e={console:[{url:h.url,access_key:h.accessKey,secret_key:h.secretKey,api:"s3v4",path:"auto"}]};!function(e,n){var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),t.setAttribute("download",e),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}("credentials.json",JSON.stringify((0,i.Z)({},e)))},endIcon:(0,j.jsx)(f._8,{}),variant:"contained",color:"primary",children:"Download"})]})]})})}))}}]);
//# sourceMappingURL=1140.dd4a92ba.chunk.js.map