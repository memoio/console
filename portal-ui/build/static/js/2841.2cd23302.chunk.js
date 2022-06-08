"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2841],{53224:function(e,t,n){var a=n(18489),i=n(83738),s=(n(50390),n(70758)),l=n(62449),r=n(62559),o=["onClick","text","disabled","tooltip","icon"],c=(0,l.Z)((function(e){return{root:{padding:"7px",color:function(t){return function(t){var n=t.variant,a=t.color,i=e.palette.primary.main;return"primary"===a&&"contained"===n?i=e.palette.primary.contrastText:"primary"===a&&"outlined"===n?i=e.palette.primary.main:"secondary"===a&&(i=e.palette.secondary.main),i}(t)},borderColor:function(t){return"secondary"===t.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));t.Z=function(e){var t=c(e),n=e.onClick,l=e.text,d=void 0===l?"":l,u=e.disabled,m=void 0!==u&&u,g=e.tooltip,h=e.icon,v=void 0===h?null:h,x=(0,i.Z)(e,o);return(0,r.jsxs)(s.Z,(0,a.Z)((0,a.Z)({classes:t,tooltip:g||d,variant:"outlined",onClick:n,disabled:m,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},x),{},{children:[(0,r.jsx)("span",{children:d})," ",v]}))}},55572:function(e,t,n){var a=n(35531),i=n(18489),s=n(50390),l=n(86509),r=n(4285),o=n(72462),c=n(66964),d=n(94187),u=n(95467),m=n(96152),g=n(43615),h=n(84201),v=n(10369),x=n(62559);t.Z=(0,r.Z)((function(e){return(0,l.Z)((0,i.Z)({buttonContainer:{textAlign:"right"},multiContainer:{display:"flex",alignItems:"center",justifyContent:"flex-start"},sizeFactorContainer:{marginLeft:8},bottomContainer:{display:"flex",flexGrow:1,alignItems:"center","& div":{flexGrow:1,width:"100%"}},factorElements:{display:"flex",justifyContent:"flex-start"},sizeNumber:{fontSize:35,fontWeight:700,textAlign:"center"},sizeDescription:{fontSize:14,color:"#777",textAlign:"center"},shortened:{gridTemplateColumns:"auto auto 20px 20px",display:"grid",gridGap:20,paddingRight:20}},o.oO))}))((function(e){var t=e.classes,n=e.paramName,i=e.newValues,l=e.setNewValues,r=e.error,o=e.setError,p=function(e){o((0,v.h)(r,e))};(0,s.useEffect)((function(){for(var e=[],t=0;t<i.length;t++)e.push({fieldKey:"key-".concat(t.toString()),required:!1,value:i[t].key,pattern:/^[a-zA-Z0-9-_.]{1,63}$/,customPatternMessage:"Invalid key"}),e.push({fieldKey:"val-".concat(t.toString()),required:!1,value:i[t].value,pattern:/^[a-zA-Z0-9-_.]{1,63}$/,customPatternMessage:"Invalid value"});var n=(0,h.R)(e);o(n)}),[i,o]);var Z=i.map((function(e,o){return(0,x.jsx)(s.Fragment,{children:(0,x.jsxs)("div",{className:t.shortened,children:[(0,x.jsx)(c.Z,{id:"key-".concat(o.toString()),label:"",placeholder:"Key",name:"key-".concat(o.toString()),value:i[o].key,onChange:function(e){var t=(0,a.Z)(i);t[o].key=e.target.value,l(t),p("key-".concat(o.toString()))},index:o,error:r["key-".concat(o.toString())]||""},"csv-key-".concat(o.toString())),(0,x.jsx)(c.Z,{id:"val-".concat(o.toString()),label:"",placeholder:"Value",name:"val-".concat(o.toString()),value:i[o].value,onChange:function(e){var t=(0,a.Z)(i);t[o].value=e.target.value,l(t),p("val-".concat(o.toString()))},index:o,error:r["val-".concat(o.toString())]||""},"csv-val-".concat(o.toString())),(0,x.jsx)(d.Z,{title:"Add ".concat(n),"aria-label":"addlabel",children:(0,x.jsx)(u.Z,{size:"small",onClick:function(){var e=(0,a.Z)(i);e.push({key:"",value:""}),l(e)},children:(0,x.jsx)(m.Z,{})})}),(0,x.jsx)(d.Z,{title:"Remove","aria-label":"removeLabel",children:(0,x.jsx)(u.Z,{size:"small",style:{marginLeft:16},onClick:function(){if(1===i.length&&l([{key:"",value:""}]),i.length>1){var e=(0,a.Z)(i);e.splice(o,1),l(e)}},children:(0,x.jsx)(g.Z,{})})})]})},"keyvalue-".concat(o.toString()))}));return(0,x.jsx)(s.Fragment,{children:Z})}))},88370:function(e,t,n){var a=n(18489),i=n(50390),s=n(34424),l=n(38342),r=n.n(l),o=n(86509),c=n(4285),d=n(72462),u=n(8174),m=n(62559),g=(0,s.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,selectedTenant:e.tenants.tenantDetails.currentTenant,tenant:e.tenants.tenantDetails.tenantInfo,logEnabled:r()(e.tenants.tenantDetails.tenantInfo,"logEnabled",!1),monitoringEnabled:r()(e.tenants.tenantDetails.tenantInfo,"monitoringEnabled",!1),encryptionEnabled:r()(e.tenants.tenantDetails.tenantInfo,"encryptionEnabled",!1),minioTLS:r()(e.tenants.tenantDetails.tenantInfo,"minioTLS",!1),consoleTLS:r()(e.tenants.tenantDetails.tenantInfo,"consoleTLS",!1),consoleEnabled:r()(e.tenants.tenantDetails.tenantInfo,"consoleEnabled",!1),adEnabled:r()(e.tenants.tenantDetails.tenantInfo,"idpAdEnabled",!1),oidcEnabled:r()(e.tenants.tenantDetails.tenantInfo,"idpOidcEnabled",!1)}}),null);t.Z=(0,c.Z)((function(e){return(0,o.Z)((0,a.Z)((0,a.Z)({},d.oZ),{},{centerAlign:{textAlign:"center"},listHeight:{height:"50"}},(0,d.Bz)(e.spacing(4))))}))(g((function(e){var t=e.classes,n=e.records,a=e.recordName;return(0,m.jsx)(i.Fragment,{children:(0,m.jsx)(u.Z,{columns:[{label:"Key",elementKey:"key"},{label:"Value",elementKey:"value"}],isLoading:!1,records:n,itemActions:[],entityName:a,idField:"name",customPaperHeight:t.listHeight})})})))},32841:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(23430),i=n(18489),s=n(50390),l=n(34424),r=n(86509),o=n(4285),c=n(25594),d=n(72462),u=n(23473),m=n(46981),g=n(44149),h=n(35531),v=n(51002),x=n(66946),p=n(30324),Z=n(55572),f=n(66964),j=n(84201),b=n(1365),C=n(62559),y=(0,o.Z)((function(e){return(0,r.Z)((0,i.Z)((0,i.Z)((0,i.Z)({buttonContainer:{textAlign:"right"}},d.oO),d.ID),d.DF))}))((function(e){e.tenant;var t=e.classes,n=e.open,i=e.onClose,l=e.image,r=e.sidecarImage,o=e.initImage,d=e.labels,u=e.annotations,m=e.nodeSelector,y=e.diskCapacityGB,N=e.serviceAccountName,S=e.storageClassName,I=e.tenantName,A=e.tenantNamespace,k=e.cpuRequest,z=e.memRequest,R=(0,s.useState)({}),P=(0,a.Z)(R,2),q=P[0],w=P[1],E=(0,s.useState)(d.length>0?(0,h.Z)(d):[{key:"",value:""}]),M=(0,a.Z)(E,2),G=M[0],D=M[1],F=(0,s.useState)(u.length>0?(0,h.Z)(u):[{key:"",value:""}]),L=(0,a.Z)(F,2),T=L[0],B=L[1],K=(0,s.useState)(m.length>0?(0,h.Z)(m):[{key:"",value:""}]),O=(0,a.Z)(K,2),U=O[0],$=O[1],V=(0,s.useState)(l),_=(0,a.Z)(V,2),H=_[0],W=_[1],Y=(0,s.useState)(r),J=(0,a.Z)(Y,2),Q=J[0],X=J[1],ee=(0,s.useState)(o),te=(0,a.Z)(ee,2),ne=te[0],ae=te[1],ie=(0,s.useState)(y.toString()),se=(0,a.Z)(ie,2),le=se[0],re=se[1],oe=(0,s.useState)(k),ce=(0,a.Z)(oe,2),de=ce[0],ue=ce[1],me=(0,s.useState)(z?Math.floor(parseInt(z,10)/1e9).toString():""),ge=(0,a.Z)(me,2),he=ge[0],ve=ge[1],xe=(0,s.useState)(N),pe=(0,a.Z)(xe,2),Ze=pe[0],fe=pe[1],je=(0,s.useState)(S),be=(0,a.Z)(je,2),Ce=be[0],ye=be[1],Ne=(0,s.useState)({}),Se=(0,a.Z)(Ne,2),Ie=Se[0],Ae=Se[1],ke=(0,s.useState)({}),ze=(0,a.Z)(ke,2),Re=ze[0],Pe=ze[1],qe=(0,s.useState)({}),we=(0,a.Z)(qe,2),Ee=we[0],Me=we[1],Ge=function(e){for(var t=[],n=0;n<e.length;n++)""!==e[n].key&&t.push(e[n]);return t};(0,s.useEffect)((function(){var e=[];e.push({fieldKey:"image",required:!1,value:H,pattern:/^([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9]?)+(\/(([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9])?)+)*:([a-zA-Z0-9])[a-zA-Z0-9-.]{0,127}$/,customPatternMessage:"Invalid image"}),e.push({fieldKey:"sidecarImage",required:!1,value:Q,pattern:/^([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9]?)+(\/(([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9])?)+)*:([a-zA-Z0-9])[a-zA-Z0-9-.]{0,127}$/,customPatternMessage:"Invalid image"}),e.push({fieldKey:"initImage",required:!1,value:ne,pattern:/^([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9]?)+(\/(([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9])?)+)*:([a-zA-Z0-9])[a-zA-Z0-9-.]{0,127}$/,customPatternMessage:"Invalid image"}),e.push({fieldKey:"diskCapacityGB",required:!0,value:le,pattern:/^[0-9]*$/,customPatternMessage:"Must be an integer between 0 and 10"}),e.push({fieldKey:"newCPURequest",required:!1,value:de,pattern:/^[0-9]*$/,customPatternMessage:"Must be an integer between 0 and 10"}),e.push({fieldKey:"newMemRequest",required:!1,value:he,pattern:/^[0-9]*$/,customPatternMessage:"Must be an integer between 0 and 10"}),e.push({fieldKey:"serviceAccountName",required:!1,value:Ze,pattern:/^[a-zA-Z0-9-.]{1,253}$/,customPatternMessage:"Invalid service account name"}),e.push({fieldKey:"storageClassName",required:!1,value:Ce,pattern:/^[a-zA-Z0-9-.]{1,253}$/,customPatternMessage:"Invalid storage class name"});var t=(0,j.R)(e);w(t)}),[H,Q,ne,le,Ze,Ce,de,he,w]);return(0,C.jsx)(v.Z,{onClose:function(){return i(!0)},modalOpen:n,title:"Edit Monitoring Configuration",children:(0,C.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),p.Z.invoke("PUT","/api/v1/namespaces/".concat(A,"/tenants/").concat(I,"/monitoring"),{labels:Ge(G),annotations:Ge(T),nodeSelector:Ge(U),image:H,sidecarImage:Q,initImage:ne,diskCapacityGB:le,serviceAccountName:Ze,storageClassName:Ce,monitoringCPURequest:de,monitoringMemRequest:he+"Gi"}).then((function(){i(!0)})).catch((function(e){}))},children:(0,C.jsxs)(c.ZP,{container:!0,children:[(0,C.jsxs)(c.ZP,{xs:12,className:t.modalFormScrollable,children:[(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(f.Z,{id:"image",label:"Image",placeholder:"Image",name:"image",value:H,onChange:function(e){W(e.target.value)},error:q.image||""},"image")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(f.Z,{id:"sidecarImage",label:"Sidecar Image",placeholder:"Sidecar Image",name:"sidecarImage",value:Q,onChange:function(e){X(e.target.value)},error:q.sidecarImage||""},"sidecarImage")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(f.Z,{id:"initImage",label:"Init Image",placeholder:"Init Image",name:"initImage",value:ne,onChange:function(e){ae(e.target.value)},error:q.initImage||""},"initImage")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(f.Z,{id:"diskCapacityGB",label:"Disk Capacity",placeholder:"Disk Capacity",name:"diskCapacityGB",value:le,onChange:function(e){re(e.target.value)},error:q.diskCapacityGB||"",overlayObject:(0,C.jsx)(b.Z,{id:"size-unit",onUnitChange:function(){},unitSelected:"Gi",unitsList:[{label:"Gi",value:"Gi"}],disabled:!0})},"diskCapacityGB")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(f.Z,{id:"cpuRequest",label:"CPU Request",placeholder:"CPU Request",name:"cpuRequest",value:de,onChange:function(e){ue(e.target.value)},error:q.cpuRequest||""},"cpuRequest")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(f.Z,{id:"memRequest",label:"Memory Request",placeholder:"Memory request",name:"memRequest",value:he,onChange:function(e){e.target.validity.valid&&ve(e.target.value)},pattern:"[0-9]*",error:q.memRequest||"",overlayObject:(0,C.jsx)(b.Z,{id:"size-unit",onUnitChange:function(){},unitSelected:"Gi",unitsList:[{label:"Gi",value:"Gi"}],disabled:!0})},"memRequest")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(f.Z,{id:"serviceAccountName",label:"Service Account",placeholder:"Service Account Name",name:"serviceAccountName",value:Ze,onChange:function(e){fe(e.target.value)},error:q.serviceAccountName||""},"serviceAccountName")}),(0,C.jsx)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,C.jsx)(f.Z,{id:"storageClassName",label:"Storage Class",placeholder:"Storage Class Name",name:"storageClassName",value:Ce,onChange:function(e){ye(e.target.value)},error:q.storageClassName||""},"storageClassName")}),(0,C.jsxs)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:[(0,C.jsx)("span",{className:t.inputLabel,children:"Labels"}),(0,C.jsx)(Z.Z,{newValues:G,setNewValues:D,paramName:"Labels",error:Ie,setError:Ae})]}),(0,C.jsxs)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:[(0,C.jsx)("span",{className:t.inputLabel,children:"Annotations"}),(0,C.jsx)(Z.Z,{newValues:T,setNewValues:B,paramName:"Annotations",error:Re,setError:Pe})]}),(0,C.jsxs)(c.ZP,{item:!0,xs:12,className:t.formFieldRow,children:[(0,C.jsx)("span",{className:t.inputLabel,children:"Node Selector"}),(0,C.jsx)(Z.Z,{newValues:U,setNewValues:$,paramName:"Node Selector",error:Ee,setError:Me})]})]}),(0,C.jsx)(c.ZP,{xs:12,className:t.buttonContainer,children:(0,C.jsx)(x.Z,{type:"submit",variant:"contained",color:"primary",disabled:!function(){if(0!==Object.keys(q).length||0!==Object.keys(Ie).length||0!==Object.keys(Re).length||0!==Object.keys(Ee).length){return(0,g.zb)({errorMessage:"Invalid entry",detailedError:""}),!1}return!0}(),children:"Save"})})]})})})})),N=n(78626),S=n(92440),I=n(88370),A=n(28948),k=n(60656),z=n(53224),R=n(41227),P={setErrorSnackMessage:g.Ih},q=(0,l.$j)(null,P),w=(0,o.Z)((function(e){return(0,r.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},d.oZ),{},{headerLabel:{fontSize:22,fontWeight:600,color:"#000",marginTop:4},breadcrumLink:{textDecoration:"none",color:"black"},tableWrapper:{height:"calc(100vh - 267px)"},paperContainer:{padding:"15px 15px 15px 50px"}},d.OR),d.qg),(0,d.Bz)(e.spacing(4))))}))(q((function(e){var t=e.classes,n=e.match,i=e.tenant,l=e.loadingTenant,r=(0,s.useState)(!1),o=(0,a.Z)(r,2),d=o[0],h=o[1],v=(0,s.useState)(!1),x=(0,a.Z)(v,2),Z=x[0],f=x[1],j=(0,s.useState)(),b=(0,a.Z)(j,2),P=b[0],q=b[1],w=(0,s.useState)(!1),E=(0,a.Z)(w,2),M=E[0],G=E[1],D=(0,s.useState)(!0),F=(0,a.Z)(D,2),L=F[0],T=F[1],B=n.params.tenantName,K=n.params.tenantNamespace;(0,s.useEffect)((function(){L&&p.Z.invoke("GET","/api/v1/namespaces/".concat(K,"/tenants/").concat(B,"/monitoring")).then((function(e){h(e.prometheusEnabled),q(e),T(!1)})).catch((function(e){(0,g.Ih)(e),T(!1)}))}),[L]);return(0,C.jsxs)(s.Fragment,{children:[Z&&null!==i&&d&&(0,C.jsx)(y,{classes:t,open:Z,onClose:function(){f(!1),T(!0)},tenant:i,image:(null===P||void 0===P?void 0:P.image)||"",sidecarImage:(null===P||void 0===P?void 0:P.sidecarImage)||"",initImage:(null===P||void 0===P?void 0:P.initImage)||"",diskCapacityGB:null!==P&&void 0!==P&&P.diskCapacityGB?parseInt(null===P||void 0===P?void 0:P.diskCapacityGB):5,labels:(null===P||void 0===P?void 0:P.labels)||[],annotations:(null===P||void 0===P?void 0:P.annotations)||[],nodeSelector:(null===P||void 0===P?void 0:P.nodeSelector)||[],serviceAccountName:(null===P||void 0===P?void 0:P.serviceAccountName)||"",tenantName:B,tenantNamespace:K,storageClassName:(null===P||void 0===P?void 0:P.storageClassName)||"",cpuRequest:(null===P||void 0===P?void 0:P.monitoringCPURequest)||"",memRequest:(null===P||void 0===P?void 0:P.monitoringMemRequest)||""}),M&&(0,C.jsx)(k.Z,{isOpen:M,title:d?"Disable Prometheus monitoring?":"Enable Prometheus monitoring?",confirmText:d?"Disable":"Enable",cancelText:"Cancel",onClose:function(){return G(!1)},onConfirm:function(){var e={prometheusEnabled:d,toggle:!0};p.Z.invoke("PUT","/api/v1/namespaces/".concat(K,"/tenants/").concat(B,"/monitoring"),e).then((function(){h(!d),T(!0),G(!1),T(!0)})).catch((function(e){(0,g.Ih)(e)}))},confirmationContent:(0,C.jsx)(u.Z,{children:d?"Disabling monitoring will erase any custom values you have used to configure Prometheus monitoring":"Prometheus monitoring will be enabled with default values"})}),(0,C.jsx)("h1",{className:t.sectionTitle,children:"Monitoring"}),(0,C.jsxs)("div",{className:t.actionsTray,children:[(0,C.jsx)(S.Z,{label:"Prometheus Monitoring",indicatorLabels:["Enabled","Disabled"],checked:d,value:"monitoring_status",id:"monitoring-status",name:"monitoring-status",onChange:function(e){G(!0)},description:""}),d&&(0,C.jsx)(z.Z,{tooltip:"Edit Monitoring configuration",text:"Edit",onClick:function(){f(!0)},icon:(0,C.jsx)(N.dY,{}),color:"primary",variant:"contained"})]}),d&&void 0!==P&&(0,C.jsx)(m.Z,{className:t.paperContainer,children:(0,C.jsx)(c.ZP,{container:!0,children:(0,C.jsx)(c.ZP,{item:!0,xs:12,children:(0,C.jsx)("table",{width:"100%",children:(0,C.jsx)("tbody",{children:l?(0,C.jsx)("tr",{children:(0,C.jsx)("td",{className:t.centerAlign,colSpan:4,children:(0,C.jsx)(R.Z,{})})}):(0,C.jsxs)(s.Fragment,{children:[null!=P.image&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Image:"}),(0,C.jsx)("td",{children:P.image})]}),null!=P.sidecarImage&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Sidecar Image:"}),(0,C.jsx)("td",{children:null===P||void 0===P?void 0:P.sidecarImage})]}),null!=P.initImage&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Init Image:"}),(0,C.jsx)("td",{children:null===P||void 0===P?void 0:P.initImage})]}),null!=P.diskCapacityGB&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Disk Capacity (GB):"}),(0,C.jsx)("td",{children:null===P||void 0===P?void 0:P.diskCapacityGB})]}),null!=P.serviceAccountName&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Service Account Name:"}),(0,C.jsx)("td",{children:null===P||void 0===P?void 0:P.serviceAccountName})]}),null!=P.storageClassName&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Storage Class Name:"}),(0,C.jsx)("td",{children:null===P||void 0===P?void 0:P.storageClassName})]}),null!=P.labels&&P.labels.length>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)("h4",{children:"Labels"})})}),(0,C.jsx)("tr",{children:(0,C.jsx)("td",{className:t.titleCol,children:(0,C.jsx)(I.Z,{records:P.labels,recordName:"Labels"})})})]}),null!=P.annotations&&P.annotations.length>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("tr",{children:(0,C.jsx)("td",{children:(0,C.jsx)("h4",{children:"Annotations"})})}),(0,C.jsx)("tr",{children:(0,C.jsx)("td",{className:t.titleCol,children:(0,C.jsx)(I.Z,{records:P.annotations,recordName:"Annotations"})})})]}),null!=P.monitoringCPURequest&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"CPU Request:"}),(0,C.jsx)("td",{children:null===P||void 0===P?void 0:P.monitoringCPURequest})]}),null!=P.monitoringMemRequest&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:t.titleCol,children:"Memory Request:"}),(0,C.jsx)("td",{children:(0,A.ae)(null===P||void 0===P?void 0:P.monitoringMemRequest,!0)})]}),null!=P.nodeSelector&&P.nodeSelector.length>0&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("h4",{children:"Node Selector:"}),(0,C.jsx)("td",{className:t.titleCol,children:(0,C.jsx)(I.Z,{records:P.nodeSelector,recordName:"Node Selector"})})]})]})})})})})})]})})))}}]);
//# sourceMappingURL=2841.2cd23302.chunk.js.map