"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9193],{49193:function(e,t,n){n.r(t);var s=n(23430),r=n(50390),o=n(34424),i=n(23473),l=n(44149),c=n(21639),u=n(60656),a=n(95410),d=n(92440),f=n(62559),h={setErrorSnackMessage:l.Ih},v=(0,o.$j)(null,h);t.default=v((function(e){var t=e.closeDeleteModalAndRefresh,n=e.deleteOpen,o=e.selectedBucket,l=e.selectedObjects,h=e.setErrorSnackMessage,v=e.versioning,p=(0,r.useState)(!1),b=(0,s.Z)(p,2),j=b[0],k=b[1],g=(0,c.Z)((function(){return t(!0)}),(function(e){return h(e)})),C=(0,s.Z)(g,2),D=C[0],Z=C[1];if(!l)return null;return(0,f.jsx)(u.Z,{title:"Delete Objects",confirmText:"Delete",isOpen:n,titleIcon:(0,f.jsx)(a.Nv,{}),isLoading:D,onConfirm:function(){for(var e=[],t=0;t<l.length;t++)l[t].endsWith("/")?e.push({path:l[t],versionID:"",recursive:!0}):e.push({path:l[t],versionID:"",recursive:!1});e&&Z("POST","/api/v1/buckets/".concat(o,"/delete-objects?all_versions=").concat(j),e)},onClose:function(){return t(!1)},confirmationContent:(0,f.jsxs)(i.Z,{children:["Are you sure you want to delete the selected ",l.length," ","objects?"," ",v&&(0,f.jsx)(d.Z,{label:"Delete All Versions",indicatorLabels:["Yes","No"],checked:j,value:"delete_versions",id:"delete-versions",name:"delete-versions",onChange:function(e){k(!j)},description:""})]})})}))}}]);
//# sourceMappingURL=9193.da642b06.chunk.js.map