"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7926],{7926:function(n,e,o){o.r(e);var t=o(23430),i=o(18489),s=(o(50390),o(23473)),c=o(86509),r=o(4285),a=o(72462),l=o(34424),u=o(44149),d=o(21639),f=o(60656),m=o(95410),Z=o(62559),v=(0,l.$j)((function(n){return{session:n.console.session}}),{setErrorSnackMessage:u.Ih});e.default=(0,r.Z)((function(n){return(0,c.Z)((0,i.Z)({},a.oO))}))(v((function(n){var e=n.onClose,o=n.modalOpen,i=n.bucket,c=n.toDelete,r=(0,d.Z)((function(){return e()}),(function(n){return(0,u.Ih)(n)})),a=(0,t.Z)(r,2),l=a[0],v=a[1];return(0,Z.jsx)(f.Z,{title:"Delete Access Rule",confirmText:"Delete",isOpen:o,isLoading:l,onConfirm:function(){v("DELETE","/api/v1/bucket/".concat(i,"/access-rules"),{prefix:c})},titleIcon:(0,Z.jsx)(m.Nv,{}),onClose:e,confirmationContent:(0,Z.jsx)(s.Z,{children:"Are you sure you want to delete this access rule?"})})})))},21639:function(n,e,o){var t=o(23430),i=o(50390),s=o(30324);e.Z=function(n,e){var o=(0,i.useState)(!1),c=(0,t.Z)(o,2),r=c[0],a=c[1];return[r,function(o,t,i){a(!0),s.Z.invoke(o,t,i).then((function(e){a(!1),n(e)})).catch((function(n){a(!1),e(n)}))}]}},60656:function(n,e,o){var t=o(18489),i=o(50390),s=o(84402),c=o(78426),r=o(93085),a=o(7887),l=o(66946),u=o(7521),d=o(95467),f=o(21278),m=o(86509),Z=o(4285),v=o(72462),p=o(62559);e.Z=(0,Z.Z)((function(n){return(0,m.Z)((0,t.Z)({},v.Qw))}))((function(n){var e=n.isOpen,o=void 0!==e&&e,m=n.onClose,Z=n.onCancel,v=n.onConfirm,x=n.classes,h=void 0===x?{}:x,C=n.title,j=void 0===C?"":C,k=n.isLoading,b=n.confirmationContent,N=n.cancelText,g=void 0===N?"Cancel":N,y=n.confirmText,B=void 0===y?"Confirm":y,I=n.confirmButtonProps,T=void 0===I?{}:I,w=n.cancelButtonProps,D=void 0===w?{}:w,E=n.titleIcon,O=void 0===E?null:E;return(0,p.jsxs)(s.Z,{open:o,onClose:function(n,e){"backdropClick"!==e&&m()},className:h.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[(0,p.jsxs)(c.Z,{className:h.title,children:[(0,p.jsxs)("div",{className:h.titleText,children:[O," ",j]}),(0,p.jsx)("div",{className:h.closeContainer,children:(0,p.jsx)(d.Z,{"aria-label":"close",className:h.closeButton,onClick:m,disableRipple:!0,size:"small",children:(0,p.jsx)(f.Z,{})})})]}),(0,p.jsx)(r.Z,{className:h.content,children:b}),(0,p.jsxs)(a.Z,{className:h.actions,children:[(0,p.jsx)(l.Z,(0,t.Z)((0,t.Z)({className:h.cancelButton,onClick:Z||m,disabled:k,type:"button"},D),{},{variant:"outlined",color:"primary",id:"confirm-cancel",children:g})),(0,p.jsx)(u.Z,(0,t.Z)((0,t.Z)({className:h.confirmButton,type:"button",onClick:v,loading:k,disabled:k,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:(0,p.jsx)(i.Fragment,{}),autoFocus:!0,id:"confirm-ok"},T),{},{children:B}))]})]})}))},21278:function(n,e,o){var t=o(64119);e.Z=void 0;var i=t(o(66830)),s=o(62559),c=(0,i.default)((0,s.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");e.Z=c}}]);
//# sourceMappingURL=7926.57a687c2.chunk.js.map