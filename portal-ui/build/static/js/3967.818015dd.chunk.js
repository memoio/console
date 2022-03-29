"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3967],{8235:function(e,n,t){t(50390);var i=t(86509),r=t(4285),o=t(25594),a=t(62559);n.Z=(0,r.Z)((function(e){return(0,i.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var n=e.classes,t=e.iconComponent,i=e.title,r=e.help;return(0,a.jsx)("div",{className:n.root,children:(0,a.jsxs)(o.ZP,{container:!0,children:[(0,a.jsxs)(o.ZP,{item:!0,xs:12,className:n.leftItems,children:[t,i]}),(0,a.jsx)(o.ZP,{item:!0,xs:12,className:n.helpText,children:r})]})})}))},53224:function(e,n,t){var i=t(18489),r=t(83738),o=(t(50390),t(70758)),a=t(62449),s=t(62559),l=["onClick","text","disabled","tooltip","icon"],c=(0,a.Z)((function(e){return{root:{padding:"7px",color:function(n){return function(n){var t=n.variant,i=n.color,r=e.palette.primary.main;return"primary"===i&&"contained"===t?r=e.palette.primary.contrastText:"primary"===i&&"outlined"===t?r=e.palette.primary.main:"secondary"===i&&(r=e.palette.secondary.main),r}(n)},borderColor:function(n){return"secondary"===n.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));n.Z=function(e){var n=c(e),t=e.onClick,a=e.text,d=void 0===a?"":a,u=e.disabled,p=void 0!==u&&u,m=e.tooltip,h=e.icon,f=void 0===h?null:h,x=(0,r.Z)(e,l);return(0,s.jsxs)(o.Z,(0,i.Z)((0,i.Z)({classes:n,tooltip:m||d,variant:"outlined",onClick:t,disabled:p,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},x),{},{children:[(0,s.jsx)("span",{children:d})," ",f]}))}},70758:function(e,n,t){var i=t(18489),r=t(36222),o=t(83738),a=(t(50390),t(86509)),s=t(4285),l=t(95467),c=t(94187),d=t(44977),u=t(62559),p=["classes","children","variant","tooltip"];n.Z=(0,s.Z)((function(e){return(0,a.Z)({root:{padding:8,marginLeft:8,borderWidth:1,borderColor:"#696969",color:"#696969",borderStyle:"solid",borderRadius:3,"& .min-icon":{width:20},"& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.main,borderRadius:3,opacity:.3},"&:disabled":{color:"#EBEBEB",borderColor:"#EBEBEB"}},contained:{borderColor:e.palette.primary.main,background:e.palette.primary.main,color:"white","& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.dark,borderRadius:3,opacity:.3},"&:hover":{backgroundColor:e.palette.primary.light,color:"#FFF"}}})}))((function(e){var n=e.classes,t=e.children,a=e.variant,s=void 0===a?"outlined":a,m=e.tooltip,h=(0,o.Z)(e,p),f=(0,u.jsx)(l.Z,(0,i.Z)((0,i.Z)({},h),{},{className:(0,d.Z)(n.root,(0,r.Z)({},n.contained,"contained"===s)),children:t}));return m&&""!==m?(0,u.jsx)(c.Z,{title:m,children:(0,u.jsx)("span",{children:f})}):f}))},35721:function(e,n,t){var i=t(50390),r=t(34424),o=t(25594),a=t(86509),s=t(4285),l=t(35477),c=t(95467),d=t(26805),u=t(44078),p=t(5265),m=t(4427),h=t(62559),f={toggleList:p.kQ},x=(0,r.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage,features:e.console.session.features}}),f);n.Z=x((0,s.Z)((function(e){return(0,a.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:21,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var n=e.classes,t=e.label,r=e.actions,a=e.sidebarOpen,s=e.operatorMode,p=e.managerObjects,f=e.toggleList,x=e.middleComponent;return e.features.includes("hide-menu")?(0,h.jsx)(i.Fragment,{}):(0,h.jsxs)(o.ZP,{container:!0,className:"".concat(n.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,h.jsxs)(o.ZP,{item:!0,xs:12,sm:12,md:x?3:6,className:n.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!a&&(0,h.jsx)("div",{className:n.logo,children:s?(0,h.jsx)(d.Z,{}):(0,h.jsx)(u.Z,{})}),(0,h.jsx)(l.Z,{variant:"h4",className:n.labelStyle,children:t})]}),x&&(0,h.jsx)(o.ZP,{item:!0,xs:12,sm:12,md:6,className:n.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:x}),(0,h.jsxs)(o.ZP,{item:!0,xs:12,sm:12,md:x?3:6,className:n.rightMenu,children:[r&&r,p&&p.length>0&&(0,h.jsx)(c.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){f()},id:"object-manager-toggle",size:"large",children:(0,h.jsx)(m.gx,{})})]})]})})))},23165:function(e,n,t){var i=t(36222),r=t(18489),o=(t(50390),t(65771)),a=t(13336),s=t(12066),l=t(4285),c=t(86509),d=t(72462),u=t(62559);n.Z=(0,l.Z)((function(e){return(0,c.Z)({searchField:(0,r.Z)({},d.qg.searchField),adornment:{}})}))((function(e){var n=e.placeholder,t=void 0===n?"":n,r=e.classes,l=e.onChange,c=e.adornmentPosition,d=void 0===c?"end":c,p=e.overrideClass,m=e.value,h=(0,i.Z)({disableUnderline:!0},"".concat(d,"Adornment"),(0,u.jsx)(o.Z,{position:d,className:r.adornment,children:(0,u.jsx)(a.Z,{})}));return(0,u.jsx)(s.Z,{placeholder:t,className:p||r.searchField,id:"search-resource",label:"",InputProps:h,onChange:function(e){l(e.target.value)},variant:"standard",value:m})}))},63967:function(e,n,t){t.r(n);var i=t(23430),r=t(18489),o=t(50390),a=t(34424),s=t(38342),l=t.n(s),c=t(86509),d=t(4285),u=t(25594),p=t(4427),m=t(44149),h=t(72462),f=t(8174),x=t(35721),Z=t(30324),g=t(24442),b=t(8235),v=t(25534),j=t(49495),y=t(30140),C=t(23165),P=t(37882),E=t(53224),I=t(62559),S=(0,P.Z)(o.lazy((function(){return Promise.all([t.e(5444),t.e(8954),t.e(9645)]).then(t.bind(t,88881))}))),L=(0,P.Z)(o.lazy((function(){return Promise.all([t.e(5444),t.e(875),t.e(5710)]).then(t.bind(t,24121))}))),F={setErrorSnackMessage:m.Ih},k=(0,a.$j)(null,F);n.default=(0,d.Z)((function(e){return(0,c.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},h.OR),h.qg),{},{searchField:(0,r.Z)((0,r.Z)({},h.qg.searchField),{},{maxWidth:380}),tableBlock:(0,r.Z)((0,r.Z)({},h.VX.tableBlock),{},{marginTop:15})},(0,h.Bz)(e.spacing(4))))}))(k((function(e){var n=e.classes,t=e.setErrorSnackMessage,r=(0,o.useState)([]),a=(0,i.Z)(r,2),s=a[0],c=a[1],d=(0,o.useState)(!1),m=(0,i.Z)(d,2),h=m[0],P=m[1],F=(0,o.useState)(!1),k=(0,i.Z)(F,2),N=k[0],M=k[1],w=(0,o.useState)(!1),O=(0,i.Z)(w,2),T=O[0],A=O[1],R=(0,o.useState)(""),B=(0,i.Z)(R,2),z=B[0],_=B[1],D=(0,o.useState)(""),W=(0,i.Z)(D,2),q=W[0],U=W[1],Y=(0,o.useState)(null),G=(0,i.Z)(Y,2),H=G[0],$=G[1],K=(0,y.F)(j.C3,[j.Ft.ADMIN_GET_POLICY]),Q=(0,y.F)(j.C3,[j.Ft.ADMIN_DELETE_POLICY]),V=(0,y.F)(j.C3,[j.Ft.ADMIN_LIST_USER_POLICIES]);(0,o.useEffect)((function(){X()}),[]),(0,o.useEffect)((function(){h&&(V?Z.Z.invoke("GET","/api/v1/policies").then((function(e){var n=l()(e,"policies",[]);n.sort((function(e,n){return e.name>n.name?1:e.name<n.name?-1:0})),P(!1),c(n)})).catch((function(e){P(!1),t(e)})):P(!1))}),[h,P,c,t,V]);var X=function(){P(!0)},J=[{type:"view",onClick:function(e){g.Z.push("".concat(j.gA.POLICIES,"/").concat(e.name))},disableButtonFunction:function(){return!K}},{type:"delete",onClick:function(e){A(!0),_(e)},sendOnlyId:!0,disableButtonFunction:function(){return!Q}}],ee=s.filter((function(e){return e.name.includes(q)}));return(0,I.jsxs)(o.Fragment,{children:[N&&(0,I.jsx)(S,{open:N,closeModalAndRefresh:function(e){M(!1),e&&X()},policyEdit:H}),T&&(0,I.jsx)(L,{deleteOpen:T,selectedPolicy:z,closeDeleteModalAndRefresh:function(e){A(!1),e&&X()}}),(0,I.jsx)(x.Z,{label:"IAM Policies"}),(0,I.jsxs)(v.Z,{className:n.pageContainer,children:[(0,I.jsxs)(u.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,I.jsx)(C.Z,{onChange:U,placeholder:"Search Policies",overrideClass:n.searchField,value:q}),(0,I.jsx)(y.s,{scopes:[j.Ft.ADMIN_CREATE_POLICY],resource:j.C3,errorProps:{disabled:!0},children:(0,I.jsx)(E.Z,{tooltip:"Create Policy",text:"Create Policy",variant:"contained",color:"primary",icon:(0,I.jsx)(p.dt,{}),onClick:function(){M(!0),$(null)}})})]}),(0,I.jsx)(u.ZP,{item:!0,xs:12,children:(0,I.jsx)("br",{})}),(0,I.jsx)(u.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,I.jsx)(y.s,{scopes:[j.Ft.ADMIN_LIST_USER_POLICIES],resource:j.C3,errorProps:{disabled:!0},children:(0,I.jsx)(f.Z,{itemActions:J,columns:[{label:"Name",elementKey:"name"}],isLoading:h,records:ee,entityName:"Policies",idField:"name"})})}),(0,I.jsx)(u.ZP,{item:!0,xs:12,children:(0,I.jsx)(b.Z,{title:"Learn more about IAM POLICIES",iconComponent:(0,I.jsx)(p.v4,{}),help:(0,I.jsx)(o.Fragment,{})})})]})]})})))},65771:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(36222),r=t(1048),o=t(32793),a=t(50390),s=t(44977),l=t(50076),c=t(91442),d=t(35477),u=t(14478),p=t(23060),m=t(8208),h=t(10594);function f(e){return(0,h.Z)("MuiInputAdornment",e)}var x,Z=(0,t(43349).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),g=t(15573),b=t(62559),v=["children","className","component","disablePointerEvents","disableTypography","position","variant"],j=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,c.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:n.palette.action.active},"filled"===t.variant&&(0,i.Z)({},"&.".concat(Z.positionStart,"&:not(.").concat(Z.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),y=a.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiInputAdornment"}),i=t.children,m=t.className,h=t.component,Z=void 0===h?"div":h,y=t.disablePointerEvents,C=void 0!==y&&y,P=t.disableTypography,E=void 0!==P&&P,I=t.position,S=t.variant,L=(0,r.Z)(t,v),F=(0,p.Z)()||{},k=S;S&&F.variant,F&&!k&&(k=F.variant);var N=(0,o.Z)({},t,{hiddenLabel:F.hiddenLabel,size:F.size,disablePointerEvents:C,position:I,variant:k}),M=function(e){var n=e.classes,t=e.disablePointerEvents,i=e.hiddenLabel,r=e.position,o=e.size,a=e.variant,s={root:["root",t&&"disablePointerEvents",r&&"position".concat((0,c.Z)(r)),a,i&&"hiddenLabel",o&&"size".concat((0,c.Z)(o))]};return(0,l.Z)(s,f,n)}(N);return(0,b.jsx)(u.Z.Provider,{value:null,children:(0,b.jsx)(j,(0,o.Z)({as:Z,ownerState:N,className:(0,s.Z)(M.root,m),ref:n},L,{children:"string"!==typeof i||E?(0,b.jsxs)(a.Fragment,{children:["start"===I?x||(x=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):null,i]}):(0,b.jsx)(d.Z,{color:"text.secondary",children:i})}))})}))},83738:function(e,n,t){function i(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=3967.818015dd.chunk.js.map