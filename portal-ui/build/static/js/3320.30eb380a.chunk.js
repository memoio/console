"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3320],{55572:function(e,t,n){var a=n(35531),l=n(18489),s=n(50390),i=n(86509),r=n(4285),o=n(72462),c=n(66964),d=n(94187),u=n(95467),m=n(96152),g=n(43615),h=n(84201),x=n(10369),v=n(62559);t.Z=(0,r.Z)((function(e){return(0,i.Z)((0,l.Z)({buttonContainer:{textAlign:"right"},multiContainer:{display:"flex",alignItems:"center",justifyContent:"flex-start"},sizeFactorContainer:{marginLeft:8},bottomContainer:{display:"flex",flexGrow:1,alignItems:"center","& div":{flexGrow:1,width:"100%"}},factorElements:{display:"flex",justifyContent:"flex-start"},sizeNumber:{fontSize:35,fontWeight:700,textAlign:"center"},sizeDescription:{fontSize:14,color:"#777",textAlign:"center"},shortened:{gridTemplateColumns:"auto auto 20px 20px",display:"grid",gridGap:20,paddingRight:20}},o.oO))}))((function(e){var t=e.classes,n=e.paramName,l=e.newValues,i=e.setNewValues,r=e.error,o=e.setError,b=function(e){o((0,x.h)(r,e))};(0,s.useEffect)((function(){for(var e=[],t=0;t<l.length;t++)e.push({fieldKey:"key-".concat(t.toString()),required:!1,value:l[t].key,pattern:/^[a-zA-Z0-9-_.]{1,63}$/,customPatternMessage:"Invalid key"}),e.push({fieldKey:"val-".concat(t.toString()),required:!1,value:l[t].value,pattern:/^[a-zA-Z0-9-_.]{1,63}$/,customPatternMessage:"Invalid value"});var n=(0,h.R)(e);o(n)}),[l,o]);var j=l.map((function(e,o){return(0,v.jsx)(s.Fragment,{children:(0,v.jsxs)("div",{className:t.shortened,children:[(0,v.jsx)(c.Z,{id:"key-".concat(o.toString()),label:"",placeholder:"Key",name:"key-".concat(o.toString()),value:l[o].key,onChange:function(e){var t=(0,a.Z)(l);t[o].key=e.target.value,i(t),b("key-".concat(o.toString()))},index:o,error:r["key-".concat(o.toString())]||""},"csv-key-".concat(o.toString())),(0,v.jsx)(c.Z,{id:"val-".concat(o.toString()),label:"",placeholder:"Value",name:"val-".concat(o.toString()),value:l[o].value,onChange:function(e){var t=(0,a.Z)(l);t[o].value=e.target.value,i(t),b("val-".concat(o.toString()))},index:o,error:r["val-".concat(o.toString())]||""},"csv-val-".concat(o.toString())),(0,v.jsx)(d.Z,{title:"Add ".concat(n),"aria-label":"addlabel",children:(0,v.jsx)(u.Z,{size:"small",onClick:function(){var e=(0,a.Z)(l);e.push({key:"",value:""}),i(e)},children:(0,v.jsx)(m.Z,{})})}),(0,v.jsx)(d.Z,{title:"Remove","aria-label":"removeLabel",children:(0,v.jsx)(u.Z,{size:"small",style:{marginLeft:16},onClick:function(){if(1===l.length&&i([{key:"",value:""}]),l.length>1){var e=(0,a.Z)(l);e.splice(o,1),i(e)}},children:(0,v.jsx)(g.Z,{})})})]})},"keyvalue-".concat(o.toString()))}));return(0,v.jsx)(s.Fragment,{children:j})}))},88370:function(e,t,n){var a=n(18489),l=n(50390),s=n(34424),i=n(38342),r=n.n(i),o=n(86509),c=n(4285),d=n(72462),u=n(8174),m=n(62559),g=(0,s.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,selectedTenant:e.tenants.tenantDetails.currentTenant,tenant:e.tenants.tenantDetails.tenantInfo,logEnabled:r()(e.tenants.tenantDetails.tenantInfo,"logEnabled",!1),monitoringEnabled:r()(e.tenants.tenantDetails.tenantInfo,"monitoringEnabled",!1),encryptionEnabled:r()(e.tenants.tenantDetails.tenantInfo,"encryptionEnabled",!1),minioTLS:r()(e.tenants.tenantDetails.tenantInfo,"minioTLS",!1),consoleTLS:r()(e.tenants.tenantDetails.tenantInfo,"consoleTLS",!1),consoleEnabled:r()(e.tenants.tenantDetails.tenantInfo,"consoleEnabled",!1),adEnabled:r()(e.tenants.tenantDetails.tenantInfo,"idpAdEnabled",!1),oidcEnabled:r()(e.tenants.tenantDetails.tenantInfo,"idpOidcEnabled",!1)}}),null);t.Z=(0,c.Z)((function(e){return(0,o.Z)((0,a.Z)((0,a.Z)({},d.oZ),{},{centerAlign:{textAlign:"center"},listHeight:{height:"50"}},(0,d.Bz)(e.spacing(4))))}))(g((function(e){var t=e.classes,n=e.records,a=e.recordName;return(0,m.jsx)(l.Fragment,{children:(0,m.jsx)(u.Z,{columns:[{label:"Key",elementKey:"key"},{label:"Value",elementKey:"value"}],isLoading:!1,records:n,itemActions:[],entityName:a,idField:"name",customPaperHeight:t.listHeight})})})))},23320:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(23430),l=n(18489),s=n(50390),i=n(34424),r=n(86509),o=n(4285),c=n(72462),d=n(25594),u=n(23473),m=n(46981),g=n(30324),h=n(95410),x=n(44149),v=n(35531),b=n(51002),j=n(66946),f=n(55572),p=n(66964),Z=n(84201),N=n(10369),S=n(1365),C=n(62559),y=(0,o.Z)((function(e){return(0,r.Z)((0,l.Z)((0,l.Z)((0,l.Z)({buttonContainer:{textAlign:"right"},multiContainer:{display:"flex",alignItems:"center",justifyContent:"flex-start"},sizeFactorContainer:{marginLeft:8},bottomContainer:{display:"flex",flexGrow:1,alignItems:"center","& div":{flexGrow:1,width:"100%"}},factorElements:{display:"flex",justifyContent:"flex-start"},sizeNumber:{fontSize:35,fontWeight:700,textAlign:"center"},sizeDescription:{fontSize:14,color:"#777",textAlign:"center"},shortened:{gridTemplateColumns:"auto auto 20px 20px",display:"grid",gridGap:20}},c.oO),c.ID),c.DF))}))((function(e){var t=e.tenant,n=e.classes,l=e.open,i=e.onClose,r=e.image,o=e.labels,c=e.annotations,u=e.nodeSelector,m=e.diskCapacityGB,h=e.serviceAccountName,y=e.dbLabels,A=e.dbAnnotations,R=e.dbNodeSelector,q=e.dbImage,P=e.dbServiceAccountName,k=e.cpuRequest,D=e.memRequest,L=e.dbCPURequest,I=e.dbMemRequest,w=(0,s.useState)({}),E=(0,a.Z)(w,2),M=E[0],z=E[1],F=(0,s.useState)(o.length>0?(0,v.Z)(o):[{key:"",value:""}]),G=(0,a.Z)(F,2),B=G[0],T=G[1],U=(0,s.useState)(c.length>0?(0,v.Z)(c):[{key:"",value:""}]),O=(0,a.Z)(U,2),V=O[0],K=O[1],$=(0,s.useState)(u.length>0?(0,v.Z)(u):[{key:"",value:""}]),_=(0,a.Z)($,2),W=_[0],H=_[1],Y=(0,s.useState)(r),J=(0,a.Z)(Y,2),Q=J[0],X=J[1],ee=(0,s.useState)(m),te=(0,a.Z)(ee,2),ne=te[0],ae=te[1],le=(0,s.useState)(null!=h?h:""),se=(0,a.Z)(le,2),ie=se[0],re=se[1],oe=(0,s.useState)(y.length>0?(0,v.Z)(y):[{key:"",value:""}]),ce=(0,a.Z)(oe,2),de=ce[0],ue=ce[1],me=(0,s.useState)(A.length>0?(0,v.Z)(A):[{key:"",value:""}]),ge=(0,a.Z)(me,2),he=ge[0],xe=ge[1],ve=(0,s.useState)(R.length>0?(0,v.Z)(R):[{key:"",value:""}]),be=(0,a.Z)(ve,2),je=be[0],fe=be[1],pe=(0,s.useState)(q),Ze=(0,a.Z)(pe,2),Ne=Ze[0],Se=Ze[1],Ce=(0,s.useState)(null!=P?P:""),ye=(0,a.Z)(Ce,2),Ae=ye[0],Re=ye[1],qe=(0,s.useState)({}),Pe=(0,a.Z)(qe,2),ke=Pe[0],De=Pe[1],Le=(0,s.useState)({}),Ie=(0,a.Z)(Le,2),we=Ie[0],Ee=Ie[1],Me=(0,s.useState)({}),ze=(0,a.Z)(Me,2),Fe=ze[0],Ge=ze[1],Be=(0,s.useState)({}),Te=(0,a.Z)(Be,2),Ue=Te[0],Oe=Te[1],Ve=(0,s.useState)({}),Ke=(0,a.Z)(Ve,2),$e=Ke[0],_e=Ke[1],We=(0,s.useState)({}),He=(0,a.Z)(We,2),Ye=He[0],Je=He[1],Qe=(0,s.useState)(k),Xe=(0,a.Z)(Qe,2),et=Xe[0],tt=Xe[1],nt=(0,s.useState)(D?Math.floor(parseInt(D,10)/1e9).toString():"0"),at=(0,a.Z)(nt,2),lt=at[0],st=at[1],it=(0,s.useState)(L),rt=(0,a.Z)(it,2),ot=rt[0],ct=rt[1],dt=(0,s.useState)(I?Math.floor(parseInt(I,10)/1e9).toString():"0"),ut=(0,a.Z)(dt,2),mt=ut[0],gt=ut[1],ht=function(e){for(var t=[],n=0;n<e.length;n++)""!==e[n].key&&t.push(e[n]);return t},xt=function(e){z((0,N.h)(M,e))};(0,s.useEffect)((function(){var e=[];e.push({fieldKey:"image",required:!1,value:Q,pattern:/^([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9]?)+(\/(([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9])?)+)*:([a-zA-Z0-9])[a-zA-Z0-9-.]{0,127}$/,customPatternMessage:"Invalid image"}),e.push({fieldKey:"dbImage",required:!1,value:Ne,pattern:/^([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9]?)+(\/(([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9])?)+)*:([a-zA-Z0-9])[a-zA-Z0-9-.]{0,127}$/,customPatternMessage:"Invalid image"}),e.push({fieldKey:"diskCapacityGB",required:!0,value:ne,pattern:/^[0-9]*$/,customPatternMessage:"Must be an integer between 0 and 10"}),e.push({fieldKey:"serviceAccountName",required:!1,value:ie,pattern:/^[a-zA-Z0-9-.]{1,253}$/,customPatternMessage:"Invalid service account name"}),e.push({fieldKey:"dbServiceAccountName",required:!1,value:Ae,pattern:/^[a-zA-Z0-9-.]{1,253}$/,customPatternMessage:"Invalid service account name"}),e.push({fieldKey:"cpuRequest",required:!0,value:et,pattern:/^[0-9]*$/,customPatternMessage:"Please enter an integer value for number of CPUs requested"}),e.push({fieldKey:"memRequest",required:!0,value:lt,pattern:/^[0-9]*$/,customPatternMessage:"Please enter an integer value (Gi) for memory requested"}),e.push({fieldKey:"dbCPURequest",required:!0,value:ot,pattern:/^[0-9]*$/,customPatternMessage:"Please enter an integer value for number of  DB CPUs requested"}),e.push({fieldKey:"dbMemRequest",required:!0,value:mt,pattern:/^[0-9]*$/,customPatternMessage:"Please enter an integer value (Gi) for DB memory requested"});var t=(0,Z.R)(e);z(t)}),[Q,Ne,ne,ie,Ae,et,lt,ot,mt,z]);var vt=function(){return 0===Object.keys(M).length&&0===Object.keys(ke).length&&0===Object.keys(we).length&&0===Object.keys(Fe).length&&0===Object.keys(Ue).length&&0===Object.keys($e).length&&0===Object.keys(Ye).length};return(0,C.jsx)(b.Z,{onClose:function(){return i(!0)},modalOpen:l,title:"Edit Logging",children:(0,C.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),vt()?g.Z.invoke("PUT","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.name,"/log"),{labels:ht(B),annotations:ht(V),nodeSelector:ht(W),image:Q,diskCapacityGB:ne,serviceAccountName:ie,dbLabels:ht(de),dbAnnotations:ht(he),dbNodeSelector:ht(je),dbImage:Ne,dbServiceAccountName:Ae,logCPURequest:et,logMemRequest:lt+"Gi",logDBCPURequest:ot,logDBMemRequest:mt+"Gi"}).then((function(){i(!0)})).catch((function(e){})):(0,x.zb)({errorMessage:"Some fields have invalid values",detailedError:""})},children:(0,C.jsxs)(d.ZP,{container:!0,children:[(0,C.jsxs)(d.ZP,{xs:12,className:n.modalFormScrollable,children:[(0,C.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,C.jsx)("h4",{children:"Logging API "})}),(0,C.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,C.jsx)(p.Z,{id:"image",label:"Image",placeholder:"Image",name:"image",value:Q,onChange:function(e){X(e.target.value),xt("image")},error:M.image||""},"image")}),(0,C.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,C.jsx)(p.Z,{id:"diskCapacityGB",label:"Disk Capacity",placeholder:"Disk Capacity",name:"diskCapacityGB",value:ne,onChange:function(e){ae(e.target.value),xt("diskCapacityGB")},error:M.diskCapacityGB||"",overlayObject:(0,C.jsx)(S.Z,{id:"size-unit",onUnitChange:function(){},unitSelected:"Gi",unitsList:[{label:"Gi",value:"Gi"}],disabled:!0})},"diskCapacityGB")}),(0,C.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,C.jsx)(p.Z,{id:"serviceAccountName",label:"Service Account",placeholder:"Service Account Name",name:"serviceAccountName",value:ie,onChange:function(e){re(e.target.value),xt("serviceAccountName")},error:M.serviceAccountName||""},"serviceAccountName")}),(0,C.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,C.jsx)(p.Z,{id:"cpuRequest",label:"CPU Request",placeholder:"CPU Request",name:"cpuRequest",value:et,onChange:function(e){tt(e.target.value),xt("cpuRequest")},error:M.cpuRequest||""},"cpuRequest")}),(0,C.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,C.jsx)(p.Z,{id:"memRequest",label:"Memory request",placeholder:"Memory request",name:"memRequest",value:lt,onChange:function(e){st(e.target.value),xt("memRequest")},error:M.memRequest||"",overlayObject:(0,C.jsx)(S.Z,{id:"size-unit",onUnitChange:function(){},unitSelected:"Gi",unitsList:[{label:"Gi",value:"Gi"}],disabled:!0})},"memRequest")}),(0,C.jsxs)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:[(0,C.jsx)("span",{className:n.inputLabel,children:"Labels"}),(0,C.jsx)(f.Z,{newValues:B,setNewValues:T,paramName:"Labels",error:ke,setError:De})]}),(0,C.jsxs)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:[(0,C.jsx)("span",{className:n.inputLabel,children:"Annotations"}),(0,C.jsx)(f.Z,{newValues:V,setNewValues:K,paramName:"Annotations",error:we,setError:Ee})]}),(0,C.jsxs)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:[(0,C.jsx)("span",{className:n.inputLabel,children:"Node Selector"}),(0,C.jsx)(f.Z,{newValues:W,setNewValues:H,paramName:"Node Selector",error:Fe,setError:Ge})]}),(0,C.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,C.jsx)("h4",{children:"Database Configuration "})}),(0,C.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,C.jsx)(p.Z,{id:"dbImage",label:"Postgres Image",placeholder:"Db Image",name:"dbImage",value:Ne,onChange:function(e){Se(e.target.value),xt("dbImage")},error:M.dbImage||""},"dbImage")}),(0,C.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,C.jsx)(p.Z,{id:"dbServiceAccountName",label:"Service Account",placeholder:"Db Service Account Name",name:"dbServiceAccountName",value:Ae,onChange:function(e){Re(e.target.value),xt("dbServiceAccountName")},error:M.dbServiceAccountName||""},"dbServiceAccountName")}),(0,C.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,C.jsx)(p.Z,{id:"dbCpuRequest",label:"DB CPU Request",placeholder:"DB CPU Request",name:"dbCpuRequest",value:ot,onChange:function(e){ct(e.target.value),xt("dbCpuRequest")},error:M.dbCpuRequest||""},"dbCpuRequest")}),(0,C.jsx)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,C.jsx)(p.Z,{id:"dbMemRequest",label:"DB Memory request",placeholder:"DB Memory request",name:"dbMemRequest",value:mt,onChange:function(e){gt(e.target.value),xt("dbMemRequest")},error:M.dbMemRequest||"",overlayObject:(0,C.jsx)(S.Z,{id:"size-unit",onUnitChange:function(){},unitSelected:"Gi",unitsList:[{label:"Gi",value:"Gi"}],disabled:!0})},"dbMemRequest")}),(0,C.jsxs)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:[(0,C.jsx)("span",{className:n.inputLabel,children:"Labels"}),(0,C.jsx)(f.Z,{newValues:de,setNewValues:ue,paramName:"Db Labels",error:Ue,setError:Oe})]}),(0,C.jsxs)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:[(0,C.jsx)("span",{className:n.inputLabel,children:"Annotations"}),(0,C.jsx)(f.Z,{newValues:he,setNewValues:xe,paramName:"Db Annotations",error:$e,setError:_e})]}),(0,C.jsxs)(d.ZP,{item:!0,xs:12,className:n.formFieldRow,children:[(0,C.jsx)("span",{className:n.inputLabel,children:"Node Selector"}),(0,C.jsx)(f.Z,{newValues:je,setNewValues:fe,paramName:"DbNode Selector",error:Ye,setError:Je})]})]}),(0,C.jsx)(d.ZP,{xs:12,className:n.buttonContainer,children:(0,C.jsx)(j.Z,{type:"submit",variant:"contained",color:"primary",disabled:!vt(),children:"Save"})})]})})})})),A=n(88370),R=n(60656),q=n(92440),P=n(53224),k=n(28948),D=n(41227),L=(0,i.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,selectedTenant:e.tenants.tenantDetails.currentTenant,tenant:e.tenants.tenantDetails.tenantInfo}}),null),I=(0,o.Z)((function(e){return(0,r.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},c.oZ),{},{headerLabel:{fontSize:22,fontWeight:600,color:"#000",marginTop:4},breadcrumLink:{textDecoration:"none",color:"black"},tableWrapper:{height:"calc(100vh - 267px)"},paperContainer:{padding:"15px 15px 15px 50px"}},c.OR),c.qg),(0,c.Bz)(e.spacing(4))))}))(L((function(e){var t,n,l,i=e.classes,r=e.match,o=e.tenant,c=e.loadingTenant,v=(0,s.useState)(!0),b=(0,a.Z)(v,2),j=b[0],f=b[1],p=(0,s.useState)(),Z=(0,a.Z)(p,2),N=Z[0],S=Z[1],L=(0,s.useState)(!1),I=(0,a.Z)(L,2),w=I[0],E=I[1],M=(0,s.useState)(!1),z=(0,a.Z)(M,2),F=z[0],G=z[1],B=(0,s.useState)(!1),T=(0,a.Z)(B,2),U=T[0],O=T[1],V=(0,s.useState)(!1),K=(0,a.Z)(V,2),$=K[0],_=K[1],W=(0,s.useState)(!1),H=(0,a.Z)(W,2),Y=H[0],J=H[1],Q=r.params.tenantName,X=r.params.tenantNamespace;(0,s.useEffect)((function(){j&&g.Z.invoke("GET","/api/v1/namespaces/".concat(X,"/tenants/").concat(Q,"/log")).then((function(e){S(e),O(e.disabled),G(e.disabled),f(!1)})).catch((function(e){(0,x.Ih)({errorMessage:"Error getting tenant logs",detailedError:e.detailedError})}))}),[Q,X,j,G,F]);var ee=function(){_(!1),E(!1),f(!0)};return(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)(R.Z,{title:"Disable Logging?",confirmText:"Disable",isOpen:$,onConfirm:function(){g.Z.invoke("POST","/api/v1/namespaces/".concat(X,"/tenants/").concat(Q,"/disable-logging")).then((function(){O(!0),G(!0)})).catch((function(e){(0,x.Ih)({errorMessage:"Error disabling logging",detailedError:e.detailedError})})),ee()},onClose:function(){return _(!1)},confirmationContent:(0,C.jsx)(u.Z,{children:"Disabling logging will erase any custom values you have used to configure logging"})}),(0,C.jsx)(R.Z,{title:"Enable Logging?",confirmText:"Enable",isOpen:Y,onConfirm:function(){g.Z.invoke("POST","/api/v1/namespaces/".concat(X,"/tenants/").concat(Q,"/enable-logging")).then((function(){O(!1)})).catch((function(e){(0,x.Ih)({errorMessage:"Error enabling logging",detailedError:e.detailedError})})),J(!1),G(!1),f(!0)},onClose:function(){return J(!1)},confirmationContent:(0,C.jsx)(u.Z,{children:"Logging will be enabled with default values"})}),w&&null!==o&&null!=N&&!F&&(0,C.jsx)(y,{open:w,onClose:ee,tenant:o,image:N.image,labels:N.labels,annotations:N.annotations,nodeSelector:N.nodeSelector,diskCapacityGB:N.diskCapacityGB,serviceAccountName:N.serviceAccountName,dbImage:N.dbImage,dbLabels:N.dbLabels,dbAnnotations:N.dbAnnotations,dbNodeSelector:N.dbNodeSelector,dbServiceAccountName:N.dbServiceAccountName,cpuRequest:N.logCPURequest,memRequest:N.logMemRequest,dbCPURequest:N.logDBCPURequest,dbMemRequest:N.logDBMemRequest}),(0,C.jsx)("h1",{className:i.sectionTitle,children:"Logging"}),(0,C.jsxs)("div",{className:i.actionsTray,children:[(0,C.jsx)(q.Z,{value:"enableLogging",id:"enableLogging",name:"enableLogging",checked:!U,onChange:function(e){e.target.checked?J(!0):_(!0)},label:"Logging",indicatorLabels:["Enabled","Disabled"]}),!F&&!j&&(0,C.jsx)(P.Z,{tooltip:"Edit Logging configuration",text:"Edit",onClick:function(){E(!0)},icon:(0,C.jsx)(h.dY,{}),color:"primary",variant:"contained"})]}),!F&&!j&&(0,C.jsx)(m.Z,{className:i.paperContainer,children:(0,C.jsx)(d.ZP,{container:!0,children:(0,C.jsxs)(d.ZP,{item:!0,xs:12,children:[(0,C.jsx)("h2",{children:"Logging API Service Details"}),(0,C.jsx)("hr",{className:i.hrClass}),(0,C.jsx)("table",{width:"100%",children:(0,C.jsx)("tbody",{children:c?(0,C.jsx)("tr",{children:(0,C.jsx)("td",{className:i.centerAlign,colSpan:4,children:(0,C.jsx)(D.Z,{})})}):(0,C.jsxs)(s.Fragment,{children:[null!=(null===N||void 0===N?void 0:N.logCPURequest)&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:i.titleCol,children:"CPU Request:"}),(0,C.jsx)("td",{children:null===N||void 0===N?void 0:N.logCPURequest})]}),null!=(null===N||void 0===N?void 0:N.logMemRequest)&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:i.titleCol,children:"Memory Request:"}),(0,C.jsx)("td",{children:(0,k.ae)(null===N||void 0===N?void 0:N.logMemRequest,!0)})]}),null!=(null===N||void 0===N?void 0:N.image)&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:i.titleCol,children:"Image:"}),(0,C.jsx)("td",{children:null===N||void 0===N?void 0:N.image})]}),null!=(null===N||void 0===N?void 0:N.diskCapacityGB)&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:i.titleCol,children:"Disk Capacity (GB):"}),(0,C.jsx)("td",{children:null===N||void 0===N?void 0:N.diskCapacityGB})]}),null!=(null===N||void 0===N?void 0:N.serviceAccountName)&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:i.titleCol,children:"Service Account:"}),(0,C.jsx)("td",{children:null===N||void 0===N?void 0:N.serviceAccountName})]}),null!=(null===N||void 0===N?void 0:N.labels)&&N.labels.length>0&&(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)("h4",{children:"Labels"})})}),(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)(A.Z,{records:null!=N&&N.labels.length>0?N.labels:[],recordName:"Labels"})})})]}),null!=(null===N||void 0===N?void 0:N.annotations)&&N.annotations.length>0&&(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)("h4",{children:"Annotations"})})}),(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)(A.Z,{records:null!=N&&N.annotations.length>0?N.annotations:[],recordName:"Annotations"})})})]}),null!=(null===N||void 0===N?void 0:N.nodeSelector)&&N.nodeSelector.length>0&&(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)("h4",{children:"Node Selector"})})}),(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)(A.Z,{records:null!=N&&N.nodeSelector.length>0?N.nodeSelector:[],recordName:"Node Selector"})})})]})]})})}),(0,C.jsx)("h2",{children:"Database Details"}),(0,C.jsx)("hr",{className:i.hrClass}),(0,C.jsx)("table",{width:"100%",children:(0,C.jsx)("tbody",{children:c?(0,C.jsx)("tr",{children:(0,C.jsx)("td",{className:i.centerAlign,colSpan:4,children:(0,C.jsx)(D.Z,{})})}):(0,C.jsxs)(s.Fragment,{children:[null!=(null===N||void 0===N?void 0:N.logDBCPURequest)&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:i.titleCol,children:"DB CPU Request:"}),(0,C.jsx)("td",{children:null===N||void 0===N?void 0:N.logDBCPURequest})]}),null!=(null===N||void 0===N?void 0:N.logDBMemRequest)&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:i.titleCol,children:"DB Memory Request:"}),(0,C.jsx)("td",{children:(0,k.ae)(null===N||void 0===N?void 0:N.logDBMemRequest,!0)})]}),null!=(null===N||void 0===N?void 0:N.dbImage)&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:i.titleCol,children:"Postgres Image:"}),(0,C.jsx)("td",{children:null===N||void 0===N?void 0:N.dbImage})]}),null!=(null===N||void 0===N?void 0:N.dbServiceAccountName)&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:i.titleCol,children:"Service Account:"}),(0,C.jsx)("td",{children:null===N||void 0===N?void 0:N.dbServiceAccountName})]}),null!=(null===N||void 0===N?void 0:N.dbLabels)&&N.dbLabels.length>0&&(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)("h4",{children:"Labels"})})}),(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)(A.Z,{records:null!=N&&(null===(t=N.dbLabels)||void 0===t?void 0:t.length)>0?N.dbLabels:[],recordName:"labels"})})})]}),null!=(null===N||void 0===N?void 0:N.annotations)&&N.dbAnnotations.length>0&&(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)("h4",{children:"Annotations"})})}),(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)(A.Z,{records:null!=N&&(null===(n=N.dbAnnotations)||void 0===n?void 0:n.length)>0?N.dbAnnotations:[],recordName:"annotations"})})})]}),null!=(null===N||void 0===N?void 0:N.nodeSelector)&&N.dbNodeSelector.length>0&&(0,C.jsxs)(s.Fragment,{children:[(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)("h4",{children:"Node Selector "})})}),(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)(A.Z,{records:null!=N&&(null===(l=N.dbNodeSelector)||void 0===l?void 0:l.length)>0?N.dbNodeSelector:[],recordName:"node selectors"})})})]})]})})})]})})})]})})))}}]);
//# sourceMappingURL=3320.30eb380a.chunk.js.map