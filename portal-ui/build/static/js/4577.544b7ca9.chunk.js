"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[4577],{62702:function(e,n,t){t(50390);var i=t(25594),r=t(86509),a=t(4285),o=t(62559);n.Z=(0,a.Z)((function(e){return(0,r.Z)({headerBarIcon:{marginRight:".7rem",color:e.palette.primary.main,"& .min-icon":{width:44,height:44}},headerBarSubheader:{color:"grey","@media (max-width: 900px)":{maxWidth:200}},screenTitle:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem",borderBottom:"1px solid #EAEAEA","@media (max-width: 600px)":{flexFlow:"column"}},titleColumn:{height:"auto",justifyContent:"center",display:"flex",flexFlow:"column",alignItems:"flex-start","& h1":{fontSize:19}},leftItems:{display:"flex",alignItems:"center","@media (max-width: 600px)":{flexFlow:"column"}},rightItems:{display:"flex",alignItems:"center"}})}))((function(e){var n=e.classes,t=e.icon,r=e.title,a=e.subTitle,l=e.actions,s=e.className;return(0,o.jsx)(i.ZP,{container:!0,children:(0,o.jsxs)(i.ZP,{item:!0,xs:12,className:"".concat(n.screenTitle," ").concat(s||""),children:[(0,o.jsxs)("div",{className:n.leftItems,children:[t?(0,o.jsx)("div",{className:n.headerBarIcon,children:t}):null,(0,o.jsxs)("div",{className:n.titleColumn,children:[(0,o.jsx)("h1",{style:{margin:0},children:r}),(0,o.jsx)("span",{className:n.headerBarSubheader,children:a})]})]}),(0,o.jsx)("div",{className:n.rightItems,children:l})]})})}))},57647:function(e,n,t){var i=t(18489),r=t(23430),a=t(50390),o=t(56805),l=t(49044),s=t(97227),c=t(74564),u=t(669),d=t(4285),f=t(88669),m=t(86509),h=t(13512),x=t(62559),p={minHeight:60};n.Z=(0,d.Z)((function(e){return(0,m.Z)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#F8F8F8",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5",fontWeight:600}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var n=e.children,t=e.classes,d=e.selectedTab,m=void 0===d?"0":d,b=e.routes,g=e.isRouteTabs,v=a.useState(m),Z=(0,r.Z)(v,2),j=Z[0],T=Z[1],C=(0,f.Z)(),w=(0,h.Z)(C.breakpoints.down("md")),E=[],y=[];return n?(n.forEach((function(e){E.push(e.tabConfig),y.push(e.content)})),(0,x.jsx)(s.ZP,{value:"".concat(j),children:(0,x.jsxs)(o.Z,{className:t.tabsContainer,children:[(0,x.jsx)(o.Z,{className:t.tabsHeaderContainer,children:(0,x.jsx)(c.Z,{onChange:function(e,n){T(n)},orientation:w?"horizontal":"vertical",variant:w?"scrollable":"standard",scrollButtons:"auto",className:t.tabList,children:E.map((function(e,n){return e?(0,x.jsx)(l.Z,(0,i.Z)((0,i.Z)({className:t.tabHeader,value:"".concat(n),style:p},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(n)):null}))})}),(0,x.jsxs)(o.Z,{className:t.tabContentContainer,children:[g?null:y.map((function(e,n){return(0,x.jsx)(u.Z,{classes:(0,i.Z)({},t.tabPanel),value:"".concat(n),children:e||null},"v-tab-p-".concat(n))})),g?(0,x.jsx)("div",{className:t.tabPanel,children:b}):null]})]})})):null}))},54577:function(e,n,t){t.r(n);var i=t(18489),r=t(50390),a=t(86509),o=t(4285),l=t(25594),s=t(73726),c=t(72462),u=t(35721),d=t(8235),f=t(78626),m=t(70971),h=t(6369),x=t(24442),p=t(57647),b=t(25534),g=t(38342),v=t.n(g),Z=t(62702),j=t(37882),T=t(49495),C=t(62559),w=(0,j.Z)(r.lazy((function(){return Promise.all([t.e(14),t.e(3152),t.e(2066),t.e(5444),t.e(875),t.e(9056),t.e(6167)]).then(t.bind(t,16167))})));n.default=(0,o.Z)((function(e){return(0,a.Z)((0,i.Z)((0,i.Z)((0,i.Z)({settingsOptionsContainer:{display:"flex",flexDirection:"row",justifyContent:"flex-start",flexWrap:"wrap",border:"#E5E5E5 1px solid",borderRadius:2,backgroundColor:"#fff"}},c.qg),c.OR),(0,c.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,t=e.match,i=v()(t,"url",""),a=i.substring(i.lastIndexOf("/")+1);return a="settings"===a?"region":a,(0,C.jsxs)(r.Fragment,{children:[(0,C.jsx)(u.Z,{label:"Settings"}),(0,C.jsxs)(b.Z,{children:[(0,C.jsx)(l.ZP,{item:!0,xs:12,children:(0,C.jsxs)("div",{id:"settings-container",className:n.settingsOptionsContainer,children:[(0,C.jsx)(Z.Z,{icon:(0,C.jsx)(f.ew,{}),title:"Configuration:"}),(0,C.jsx)(p.Z,{selectedTab:a,isRouteTabs:!0,routes:(0,C.jsx)(m.F0,{history:x.Z,children:(0,C.jsxs)(m.rs,{children:[s.bx.map((function(e){return(0,C.jsx)(m.AW,{exact:!0,path:"".concat(T.gA.SETTINGS,"/").concat(e.configuration_id),component:w},"configItem-".concat(e.configuration_label))})),(0,C.jsx)(m.AW,{exact:!0,path:T.gA.SETTINGS,children:(0,C.jsx)(m.l_,{to:"".concat(T.gA.SETTINGS,"/region")})})]})}),children:s.bx.map((function(e){var n,t=e.configuration_id;return{tabConfig:{label:e.configuration_label,value:t,icon:e.icon,component:h.rU,to:(n=t,"".concat(T.gA.SETTINGS,"/").concat(n))}}}))})]})}),(0,C.jsx)(l.ZP,{item:!0,xs:12,sx:{paddingTop:"15px"},children:(0,C.jsx)(d.Z,{title:"Learn more about SETTINGS",iconComponent:(0,C.jsx)(f.ew,{}),help:(0,C.jsxs)(r.Fragment,{children:["MinIO supports a variety of configurations ranging from encryption, compression, region, notifications, etc.",(0,C.jsx)("br",{}),(0,C.jsx)("br",{}),"You can learn more at our"," ",(0,C.jsx)("a",{href:"https://docs.min.io/minio/baremetal/reference/minio-cli/minio-mc-admin/mc-admin.config.html?ref=con#id4",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]})]})}))},97227:function(e,n,t){t.d(n,{ZP:function(){return l},_i:function(){return s},uU:function(){return c},pQ:function(){return u}});var i=t(23430),r=t(50390),a=t(62559),o=r.createContext(null);function l(e){var n=e.children,t=e.value,l=function(){var e=r.useState(null),n=(0,i.Z)(e,2),t=n[0],a=n[1];return r.useEffect((function(){a("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),t}(),s=r.useMemo((function(){return{idPrefix:l,value:t}}),[l,t]);return(0,a.jsx)(o.Provider,{value:s,children:n})}function s(){return r.useContext(o)}function c(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(n)}function u(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(n)}},74564:function(e,n,t){var i=t(18207),r=t(46633),a=t(50390),o=t(98247),l=t(97227),s=t(62559),c=["children"],u=a.forwardRef((function(e,n){var t=e.children,u=(0,r.Z)(e,c),d=(0,l._i)();if(null===d)throw new TypeError("No TabContext provided");var f=a.Children.map(t,(function(e){return a.isValidElement(e)?a.cloneElement(e,{"aria-controls":(0,l.uU)(d,e.props.value),id:(0,l.pQ)(d,e.props.value)}):null}));return(0,s.jsx)(o.Z,(0,i.Z)({},u,{ref:n,value:d.value,children:f}))}));n.Z=u},669:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(18207),r=t(46633),a=t(50390),o=t(44977),l=t(8208),s=t(15573),c=t(50076),u=t(10594);function d(e){return(0,u.Z)("MuiTabPanel",e)}(0,t(43349).Z)("MuiTabPanel",["root"]);var f=t(97227),m=t(62559),h=["children","className","value"],x=(0,l.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(3)}})),p=a.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiTabPanel"}),a=t.children,l=t.className,u=t.value,p=(0,r.Z)(t,h),b=(0,i.Z)({},t),g=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},d,n)}(b),v=(0,f._i)();if(null===v)throw new TypeError("No TabContext provided");var Z=(0,f.uU)(v,u),j=(0,f.pQ)(v,u);return(0,m.jsx)(x,(0,i.Z)({"aria-labelledby":j,className:(0,o.Z)(g.root,l),hidden:u!==v.value,id:Z,ref:n,role:"tabpanel",ownerState:b},p,{children:u===v.value&&a}))}))}}]);
//# sourceMappingURL=4577.544b7ca9.chunk.js.map