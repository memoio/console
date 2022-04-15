"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9560],{8235:function(e,n,t){t(50390);var a=t(86509),i=t(4285),s=t(25594),r=t(62559);n.Z=(0,i.Z)((function(e){return(0,a.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var n=e.classes,t=e.iconComponent,a=e.title,i=e.help;return(0,r.jsx)("div",{className:n.root,children:(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsxs)(s.ZP,{item:!0,xs:12,className:n.leftItems,children:[t,a]}),(0,r.jsx)(s.ZP,{item:!0,xs:12,className:n.helpText,children:i})]})})}))},10660:function(e,n,t){t(50390);var a=t(25594),i=t(56805),s=t(8235),r=t(62559);n.Z=function(e){var n=e.iconComponent,t=e.entity;return(0,r.jsx)(a.ZP,{container:!0,alignItems:"center",children:(0,r.jsx)(a.ZP,{item:!0,xs:12,children:(0,r.jsx)(s.Z,{title:"".concat(t," not available"),iconComponent:n,help:(0,r.jsx)(i.Z,{sx:{fontSize:"14px",display:"flex",border:"none",flexFlow:{xs:"column",md:"row"},"& a":{color:function(e){return e.colors.link},textDecoration:"underline"}},children:(0,r.jsx)("div",{children:"This feature is not available for a single-disk setup. "})})})})})}},54950:function(e,n,t){var a=t(18489),i=t(50390),s=t(25594),r=t(74268),o=t(36554),c=t(94187),l=t(86509),d=t(4285),u=t(72462),f=t(97538),m=t(62559);n.Z=(0,d.Z)((function(e){return(0,l.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},u.YI),u.Hr),u.lM),{},{fieldContainer:(0,a.Z)((0,a.Z)({},u.YI.fieldContainer),{},{display:"flex",justifyContent:"flex-start",alignItems:"center",margin:"15px 0",marginBottom:0,flexBasis:"initial"}),noTopMargin:{marginTop:0}}))}))((function(e){var n=e.label,t=e.onChange,a=e.value,l=e.id,d=e.name,u=e.checked,x=void 0!==u&&u,h=e.disabled,p=void 0!==h&&h,g=e.noTopMargin,b=void 0!==g&&g,j=e.tooltip,Z=void 0===j?"":j,v=e.overrideLabelClasses,S=void 0===v?"":v,C=e.classes;return(0,m.jsx)(i.Fragment,{children:(0,m.jsxs)(s.ZP,{item:!0,xs:12,className:"".concat(C.fieldContainer," ").concat(b?C.noTopMargin:""),children:[(0,m.jsx)("div",{children:(0,m.jsx)(r.Z,{name:d,id:l,value:a,color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:x,onChange:t,checkedIcon:(0,m.jsx)("span",{className:C.checkedIcon}),icon:(0,m.jsx)("span",{className:C.unCheckedIcon}),disabled:p})}),""!==n&&(0,m.jsxs)(o.Z,{htmlFor:l,className:"".concat(C.noMinWidthLabel," ").concat(S),children:[(0,m.jsx)("span",{children:n}),""!==Z&&(0,m.jsx)("div",{className:C.tooltipContainer,children:(0,m.jsx)(c.Z,{title:Z,placement:"top-start",children:(0,m.jsx)("div",{className:C.tooltip,children:(0,m.jsx)(f.Z,{})})})})]})]})})}))},25534:function(e,n,t){var a=t(18489),i=(t(50390),t(25594)),s=t(86509),r=t(4285),o=t(72462),c=t(62559);n.Z=(0,r.Z)((function(e){return(0,s.Z)((0,a.Z)({},o.Bw))}))((function(e){var n=e.classes,t=e.className,a=void 0===t?"":t,s=e.children;return(0,c.jsx)("div",{className:n.contentSpacer,children:(0,c.jsx)(i.ZP,{container:!0,children:(0,c.jsx)(i.ZP,{item:!0,xs:12,className:a,children:s})})})}))},35721:function(e,n,t){var a=t(50390),i=t(34424),s=t(25594),r=t(86509),o=t(4285),c=t(35477),l=t(95467),d=t(26805),u=t(44078),f=t(5265),m=t(95410),x=t(62559),h={toggleList:f.kQ},p=(0,i.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage,features:e.console.session.features}}),h);n.Z=p((0,o.Z)((function(e){return(0,r.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:21,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var n=e.classes,t=e.label,i=e.actions,r=e.sidebarOpen,o=e.operatorMode,f=e.managerObjects,h=e.toggleList,p=e.middleComponent;return e.features.includes("hide-menu")?(0,x.jsx)(a.Fragment,{}):(0,x.jsxs)(s.ZP,{container:!0,className:"".concat(n.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,x.jsxs)(s.ZP,{item:!0,xs:12,sm:12,md:p?3:6,className:n.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!r&&(0,x.jsx)("div",{className:n.logo,children:o?(0,x.jsx)(d.Z,{}):(0,x.jsx)(u.Z,{})}),(0,x.jsx)(c.Z,{variant:"h4",className:n.labelStyle,children:t})]}),p&&(0,x.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:6,className:n.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:p}),(0,x.jsxs)(s.ZP,{item:!0,xs:12,sm:12,md:p?3:6,className:n.rightMenu,children:[i&&i,f&&f.length>0&&(0,x.jsx)(l.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){h()},id:"object-manager-toggle",size:"large",children:(0,x.jsx)(m.gx,{})})]})]})})))},39560:function(e,n,t){t.r(n);var a=t(23430),i=t(18489),s=t(50390),r=t(34424),o=t(84801),c=t(46413),l=t(25594),d=t(47554),u=t(43965),f=t(31680),m=t(12066),x=t(66946),h=t(69686),p=t(86509),g=t(4285),b=t(51774),j=t(28948),Z=t(72462),v=t(49495),S=t(95410),C=t(54950),k=t(35721),y=t(30324),N=t(25534),w=t(30140),P=t(10660),H=t(62559),I=(0,g.Z)((function(e){return(0,p.Z)({root:{lineHeight:"50px",marginRight:15,"label + &":{marginTop:e.spacing(3)},"& .MuiSelect-select:focus":{backgroundColor:"transparent"}},input:{height:50,fontSize:13,lineHeight:"50px"}})}))(c.ZP),T=(0,r.$j)((function(e){return{distributedSetup:e.system.distributedSetup}}),null);n.default=T((0,g.Z)((function(e){return(0,p.Z)((0,i.Z)((0,i.Z)((0,i.Z)({graphContainer:{backgroundColor:"#fff",border:"#EAEDEE 1px solid",borderRadius:3,padding:"19px 38px",marginTop:15},scanInfo:{marginTop:20,display:"flex",flexDirection:"row",justifyContent:"space-between"},scanData:{fontSize:13},formBox:{padding:15,border:"1px solid #EAEAEA"},buttonBar:{display:"flex",alignItems:"center",justifyContent:"flex-end"},bucketField:{flex:1},prefixField:(0,i.Z)((0,i.Z)({},Z.qg.searchField),{},{marginLeft:10,flex:1}),actionsTray:(0,i.Z)((0,i.Z)({},Z.OR.actionsTray),{},{marginBottom:0})},Z.IX),Z.qg),(0,Z.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,t=e.distributedSetup,i=(0,s.useState)(!1),r=(0,a.Z)(i,2),c=r[0],p=r[1],g=(0,s.useState)(""),Z=(0,a.Z)(g,2),T=Z[0],E=Z[1],B=(0,s.useState)([]),F=(0,a.Z)(B,2),M=F[0],z=F[1],D=(0,s.useState)(""),R=(0,a.Z)(D,2),L=R[0],A=R[1],O=(0,s.useState)(!1),G=(0,a.Z)(O,2),W=G[0],Y=G[1],_=(0,s.useState)(!1),q=(0,a.Z)(_,2),U=q[0],$=q[1],J=(0,s.useState)(!1),Q=(0,a.Z)(J,2),V=Q[0],X=Q[1],K=(0,s.useState)({beforeHeal:[0,0,0,0],afterHeal:[0,0,0,0],objectsHealed:0,objectsScanned:0,healDuration:0,sizeScanned:""}),ee=(0,a.Z)(K,2),ne=ee[0],te=ee[1];(0,s.useEffect)((function(){y.Z.invoke("GET","/api/v1/buckets").then((function(e){var n=[];null!==e.buckets&&(n=e.buckets),z(n)})).catch((function(e){console.log(e)}))}),[]),(0,s.useEffect)((function(){!0===U&&X(!1)}),[U]),(0,s.useEffect)((function(){!0===V&&$(!1)}),[V]);var ae=function(e){return[e.Green,e.Yellow,e.Red,e.Grey]};(0,s.useEffect)((function(){if(c){var e={Green:0,Yellow:0,Red:0,Grey:0},n={Green:0,Yellow:0,Red:0,Grey:0},t=new URL(window.location.toString()),i=t.port,s=(0,b.x2)(t.protocol),r=new h.w3cwebsocket("".concat(s,"://").concat(t.hostname,":").concat(i,"/ws/heal/").concat(T,"?prefix=").concat(L,"&recursive=").concat(W,"&force-start=").concat(U,"&force-stop=").concat(V));if(null!==r)return r.onopen=function(){console.log("WebSocket Client Connected"),r.send("ok")},r.onmessage=function(t){for(var i=JSON.parse(t.data.toString()),s=0,r=Object.entries(i.healthAfterCols);s<r.length;s++){var o=(0,a.Z)(r[s],2),c=o[0],l=o[1];n[c]=100*l/i.itemsScanned}for(var d=0,u=Object.entries(i.healthBeforeCols);d<u.length;d++){var f=(0,a.Z)(u[d],2),m=f[0],x=f[1];e[m]=100*x/i.itemsScanned}te({beforeHeal:ae(e),afterHeal:ae(n),objectsHealed:i.objectsHealed,objectsScanned:i.objectsScanned,healDuration:i.healDuration,sizeScanned:(0,j.ae)(i.bytesScanned.toString())})},r.onclose=function(){p(!1),console.log("connection closed by server")},function(){r.close(1e3),console.log("closing websockets")}}}),[c,T,U,V,L,W]);var ie={labels:["Green","Yellow","Red","Grey"],datasets:[{label:"After Healing",data:ne.afterHeal,backgroundColor:"rgba(0, 0, 255, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1},{label:"Before Healing",data:ne.beforeHeal,backgroundColor:"rgba(153, 102, 255, 0.2)",borderColor:"rgba(153, 102, 255, 1)",borderWidth:1}]},se=M.map((function(e){return{label:e.name,value:e.name}}));return(0,H.jsxs)(s.Fragment,{children:[(0,H.jsx)(k.Z,{label:"Drives"}),(0,H.jsx)(N.Z,{children:t?(0,H.jsxs)(w.s,{scopes:[v.Ft.ADMIN_HEAL],resource:v.C3,children:[(0,H.jsxs)(l.ZP,{xs:12,item:!0,className:n.formBox,children:[(0,H.jsxs)(l.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,H.jsx)(d.Z,{variant:"outlined",className:n.bucketField,children:(0,H.jsxs)(u.Z,{label:"Bucket",id:"bucket-name",name:"bucket-name",value:T,onChange:function(e){E(e.target.value)},className:n.searchField,input:(0,H.jsx)(I,{}),displayEmpty:!0,children:[(0,H.jsx)(f.Z,{value:"",children:"Select Bucket"},"select-bucket-name-default"),se.map((function(e){return(0,H.jsx)(f.Z,{value:e.value,children:e.label},"select-bucket-name-".concat(e.label))}))]})}),(0,H.jsx)(m.Z,{label:"Prefix",className:n.prefixField,id:"prefix-resource",disabled:!1,InputProps:{disableUnderline:!0},onChange:function(e){A(e.target.value)},variant:"standard"})]}),(0,H.jsxs)(l.ZP,{item:!0,xs:12,className:n.inlineCheckboxes,children:[(0,H.jsx)(C.Z,{name:"recursive",id:"recursive",value:"recursive",checked:W,onChange:function(e){Y(e.target.checked)},disabled:!1,label:"Recursive"}),(0,H.jsx)(C.Z,{name:"forceStart",id:"forceStart",value:"forceStart",checked:U,onChange:function(e){$(e.target.checked)},disabled:!1,label:"Force Start"}),(0,H.jsx)(C.Z,{name:"forceStop",id:"forceStop",value:"forceStop",checked:V,onChange:function(e){X(e.target.checked)},disabled:!1,label:"Force Stop"})]}),(0,H.jsx)(l.ZP,{item:!0,xs:12,className:n.buttonBar,children:(0,H.jsx)(x.Z,{type:"submit",variant:"contained",color:"primary",disabled:c,onClick:function(){return p(!0)},children:"Start"})})]}),(0,H.jsxs)(l.ZP,{item:!0,xs:12,className:n.graphContainer,children:[(0,H.jsx)(o.n4,{data:ie,width:80,height:30,options:{title:{display:!0,text:"Item's Health Status [%]",fontSize:20},legend:{display:!0,position:"right"}}}),(0,H.jsxs)(l.ZP,{item:!0,xs:12,className:n.scanInfo,children:[(0,H.jsxs)("div",{className:n.scanData,children:[(0,H.jsx)("strong",{children:"Size scanned:"})," ",ne.sizeScanned]}),(0,H.jsxs)("div",{className:n.scanData,children:[(0,H.jsx)("strong",{children:"Objects healed:"})," ",ne.objectsHealed," /"," ",ne.objectsScanned]}),(0,H.jsxs)("div",{className:n.scanData,children:[(0,H.jsx)("strong",{children:"Healing time:"})," ",ne.healDuration,"s"]})]})]})]}):(0,H.jsx)(P.Z,{entity:"Heal",iconComponent:(0,H.jsx)(S.ln,{})})})]})})))},51774:function(e,n,t){t.d(n,{V9:function(){return a},ci:function(){return i},HE:function(){return s},x2:function(){return r}});var a=1006,i=1008,s=1011,r=function(e){var n="ws";return"https:"===e&&(n="wss"),n}}}]);
//# sourceMappingURL=9560.f3d386cc.chunk.js.map