"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8564],{98564:function(e,n,t){t.r(n);var o=t(23430),i=t(50390),l=t(34424),r=t(23473),s=t(44149),a=t(21639),c=t(60656),u=t(4427),d=t(25594),m=t(66964),f=t(62559),p={setErrorSnackMessage:s.Ih},x=(0,l.$j)(null,p);n.default=x((function(e){var n=e.closeDeleteModalAndRefresh,t=e.deleteOpen,l=e.selectedBucket,s=e.ruleToDelete,p=e.remainingRules,x=e.setErrorSnackMessage,v=e.deleteAllRules,Z=void 0!==v&&v,h=(0,i.useState)(""),j=(0,o.Z)(h,2),b=j[0],C=j[1],k=(0,a.Z)((function(){return n(!0)}),(function(e){return x(e)})),g=(0,o.Z)(k,2),y=g[0],N=g[1];if(!l)return null;return(0,f.jsx)(c.Z,{title:Z?"Delete all Replication Rules":"Delete Replication Rule",confirmText:"Delete",isOpen:t,titleIcon:(0,f.jsx)(u.Nv,{}),isLoading:y,onConfirm:function(){var e="/api/v1/buckets/".concat(l,"/replication/").concat(s);(Z||1===p)&&(e="/api/v1/buckets/".concat(l,"/delete-all-replication-rules")),N("DELETE",e)},onClose:function(){return n(!1)},confirmButtonProps:{disabled:Z&&"Yes, I am sure"!==b},confirmationContent:(0,f.jsx)(r.Z,{children:Z?(0,f.jsxs)(i.Fragment,{children:["Are you sure you want to remove all replication rules for bucket"," ",(0,f.jsx)("b",{children:l}),"?",(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),"To continue please type ",(0,f.jsx)("b",{children:"Yes, I am sure"})," in the box.",(0,f.jsx)(d.ZP,{item:!0,xs:12,children:(0,f.jsx)(m.Z,{id:"retype-tenant",name:"retype-tenant",onChange:function(e){C(e.target.value)},label:"",value:b})})]}):(0,f.jsxs)(i.Fragment,{children:["Are you sure you want to delete replication rule"," ",(0,f.jsx)("b",{children:s}),"?"]})})})}))},21639:function(e,n,t){var o=t(23430),i=t(50390),l=t(30324);n.Z=function(e,n){var t=(0,i.useState)(!1),r=(0,o.Z)(t,2),s=r[0],a=r[1];return[s,function(t,o,i){a(!0),l.Z.invoke(t,o,i).then((function(n){a(!1),e(n)})).catch((function(e){a(!1),n(e)}))}]}},60656:function(e,n,t){var o=t(18489),i=t(50390),l=t(84402),r=t(78426),s=t(93085),a=t(7887),c=t(66946),u=t(7521),d=t(95467),m=t(21278),f=t(86509),p=t(4285),x=t(72462),v=t(62559);n.Z=(0,p.Z)((function(e){return(0,f.Z)((0,o.Z)({},x.Qw))}))((function(e){var n=e.isOpen,t=void 0!==n&&n,f=e.onClose,p=e.onCancel,x=e.onConfirm,Z=e.classes,h=void 0===Z?{}:Z,j=e.title,b=void 0===j?"":j,C=e.isLoading,k=e.confirmationContent,g=e.cancelText,y=void 0===g?"Cancel":g,N=e.confirmText,R=void 0===N?"Confirm":N,B=e.confirmButtonProps,T=void 0===B?{}:B,D=e.cancelButtonProps,I=void 0===D?{}:D,P=e.titleIcon,w=void 0===P?null:P;return(0,v.jsxs)(l.Z,{open:t,onClose:function(e,n){"backdropClick"!==n&&f()},className:h.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[(0,v.jsxs)(r.Z,{className:h.title,children:[(0,v.jsxs)("div",{className:h.titleText,children:[w," ",b]}),(0,v.jsx)("div",{className:h.closeContainer,children:(0,v.jsx)(d.Z,{"aria-label":"close",className:h.closeButton,onClick:f,disableRipple:!0,size:"small",children:(0,v.jsx)(m.Z,{})})})]}),(0,v.jsx)(s.Z,{className:h.content,children:k}),(0,v.jsxs)(a.Z,{className:h.actions,children:[(0,v.jsx)(c.Z,(0,o.Z)((0,o.Z)({className:h.cancelButton,onClick:p||f,disabled:C,type:"button"},I),{},{variant:"outlined",color:"primary",id:"confirm-cancel",children:y})),(0,v.jsx)(u.Z,(0,o.Z)((0,o.Z)({className:h.confirmButton,type:"button",onClick:x,loading:C,disabled:C,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:(0,v.jsx)(i.Fragment,{}),autoFocus:!0,id:"confirm-ok"},T),{},{children:R}))]})]})}))}}]);
//# sourceMappingURL=8564.401f0735.chunk.js.map