"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1116],{8235:function(e,t,r){r(50390);var n=r(86509),o=r(4285),i=r(25594),a=r(62559);t.Z=(0,o.Z)((function(e){return(0,n.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var t=e.classes,r=e.iconComponent,n=e.title,o=e.help;return(0,a.jsx)("div",{className:t.root,children:(0,a.jsxs)(i.ZP,{container:!0,children:[(0,a.jsxs)(i.ZP,{item:!0,xs:12,className:t.leftItems,children:[r,n]}),(0,a.jsx)(i.ZP,{item:!0,xs:12,className:t.helpText,children:o})]})})}))},37882:function(e,t,r){var n=r(18489),o=r(50390),i=r(62559);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function r(r){return(0,i.jsx)(o.Suspense,{fallback:t,children:(0,i.jsx)(e,(0,n.Z)({},r))})}return r}},25534:function(e,t,r){var n=r(18489),o=(r(50390),r(25594)),i=r(86509),a=r(4285),l=r(72462),c=r(62559);t.Z=(0,a.Z)((function(e){return(0,i.Z)((0,n.Z)({},l.Bw))}))((function(e){var t=e.classes,r=e.className,n=void 0===r?"":r,i=e.children;return(0,c.jsx)("div",{className:t.contentSpacer,children:(0,c.jsx)(o.ZP,{container:!0,children:(0,c.jsx)(o.ZP,{item:!0,xs:12,className:n,children:i})})})}))},35721:function(e,t,r){var n=r(50390),o=r(34424),i=r(25594),a=r(86509),l=r(4285),c=r(35477),s=r(95467),d=r(26805),p=r(44078),u=r(5265),m=r(95410),h=r(62559),f={toggleList:u.kQ},g=(0,o.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage,features:e.console.session.features}}),f);t.Z=g((0,l.Z)((function(e){return(0,a.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:21,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var t=e.classes,r=e.label,o=e.actions,a=e.sidebarOpen,l=e.operatorMode,u=e.managerObjects,f=e.toggleList,g=e.middleComponent;return e.features.includes("hide-menu")?(0,h.jsx)(n.Fragment,{}):(0,h.jsxs)(i.ZP,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,h.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:g?3:6,className:t.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!a&&(0,h.jsx)("div",{className:t.logo,children:l?(0,h.jsx)(d.Z,{}):(0,h.jsx)(p.Z,{})}),(0,h.jsx)(c.Z,{variant:"h4",className:t.labelStyle,children:r})]}),g&&(0,h.jsx)(i.ZP,{item:!0,xs:12,sm:12,md:6,className:t.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:g}),(0,h.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:g?3:6,className:t.rightMenu,children:[o&&o,u&&u.length>0&&(0,h.jsx)(s.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){f()},id:"object-manager-toggle",size:"large",children:(0,h.jsx)(m.gx,{})})]})]})})))},73726:function(e,t,r){r.d(t,{bx:function(){return g},DP:function(){return b},DD:function(){return v},_0:function(){return y}});var n=r(35531),o=(r(50390),r(75012)),i=r(58267),a=r(44229),l=r(30578),c=r(2494),s=r(41845),d=r(26068),p=r(89173),u=r(9639),m=r(84386),h=r(12720),f=r(62559),g=[{icon:(0,f.jsx)(o.Z,{}),configuration_id:"region",configuration_label:"Region"},{icon:(0,f.jsx)(i.Z,{}),configuration_id:"cache",configuration_label:"Cache"},{icon:(0,f.jsx)(a.Z,{}),configuration_id:"compression",configuration_label:"Compression"},{icon:(0,f.jsx)(l.Z,{}),configuration_id:"api",configuration_label:"API"},{icon:(0,f.jsx)(c.Z,{}),configuration_id:"heal",configuration_label:"Heal"},{icon:(0,f.jsx)(s.Z,{}),configuration_id:"scanner",configuration_label:"Scanner"},{icon:(0,f.jsx)(d.Z,{}),configuration_id:"etcd",configuration_label:"Etcd"},{icon:(0,f.jsx)(p.Z,{}),configuration_id:"identity_openid",configuration_label:"Identity Openid"},{icon:(0,f.jsx)(u.Z,{}),configuration_id:"identity_ldap",configuration_label:"Identity LDAP"},{icon:(0,f.jsx)(h.Z,{}),configuration_id:"logger_webhook",configuration_label:"Logger Webhook"},{icon:(0,f.jsx)(m.Z,{}),configuration_id:"audit_webhook",configuration_label:"Audit Webhook"}],b={region:[{name:"name",required:!0,label:"Server Location",tooltip:'Name of the location of the server e.g. "us-west-rack2"',type:"string",placeholder:"e.g. us-west-rack-2"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",placeholder:"Enter custom notes if any"}],cache:[{name:"drives",required:!0,label:"Drives",tooltip:'Mountpoints e.g. "/optane1" or "/optane2", you can write one per field',type:"csv",placeholder:"Enter Mount Point"},{name:"expiry",required:!1,label:"Expiry",tooltip:'Cache expiry duration in days e.g. "90"',type:"number",placeholder:"Enter Number of Days"},{name:"quota",required:!1,label:"Quota",tooltip:'Limit cache drive usage in percentage e.g. "90"',type:"number",placeholder:"Enter in %"},{name:"exclude",required:!1,label:"Exclude",tooltip:'Wildcard exclusion patterns e.g. "bucket/*.tmp" or "*.exe", you can write one per field',type:"csv",placeholder:"Enter Wildcard Exclusion Patterns"},{name:"after",required:!1,label:"After",tooltip:"Minimum number of access before caching an object",type:"number",placeholder:"Enter Number of Attempts"},{name:"watermark_low",required:!1,label:"Watermark Low",tooltip:"Watermark Low",type:"number",placeholder:"Enter Watermark Low"},{name:"watermark_high",required:!1,label:"Watermark High",tooltip:"Watermark High",type:"number",placeholder:"Enter Watermark High"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",multiline:!0,placeholder:"Enter custom notes if any"}],compression:[{name:"extensions",required:!1,label:"Extensions",tooltip:'Extensions to compress e.g. ".txt",".log" or ".csv", you can write one per field',type:"csv",placeholder:"Enter an Extension",withBorder:!0},{name:"mime_types",required:!1,label:"Mime Types",tooltip:'Mime types e.g. "text/*","application/json" or "application/xml", you can write one per field',type:"csv",placeholder:"Enter a Mime Type",withBorder:!0}],api:[{name:"requests_max",required:!1,label:"Requests Max",tooltip:"Maximum number of concurrent requests, e.g. '1600'",type:"number",placeholder:"Enter Requests Max"},{name:"cors_allow_origin",required:!1,label:"Cors Allow Origin",tooltip:"list of origins allowed for CORS requests",type:"csv",placeholder:"Enter allowed origin e.g. https://example.com"},{name:"replication_workers",required:!1,label:"Replication Workers",tooltip:"Number of replication workers, defaults to 100",type:"number",placeholder:"Enter Replication Workers"},{name:"replication_failed_workers",required:!1,label:"Replication Failed Workers",tooltip:"Number of replication workers for recently failed replicas, defaults to 4",type:"number",placeholder:"Enter Replication Failed Workers"}],heal:[{name:"bitrotscan",required:!1,label:"Bitrot Scan",tooltip:"Perform bitrot scan on disks when checking objects during scanner",type:"on|off"},{name:"max_sleep",required:!1,label:"Max Sleep",tooltip:"Maximum sleep duration between objects to slow down heal operation. eg. 2s",type:"duration",placeholder:"Enter Max Sleep duration"},{name:"max_io",required:!1,label:"Max IO",tooltip:"Maximum IO requests allowed between objects to slow down heal operation. eg. 3",type:"number",placeholder:"Enter Max IO"}],scanner:[{name:"delay",required:!1,label:"Delay multiplier",tooltip:"Scanner delay multiplier, defaults to '10.0'",type:"number",placeholder:"Enter Delay"},{name:"max_wait",required:!1,label:"Max Wait",tooltip:"Maximum wait time between operations, defaults to '15s'",type:"duration",placeholder:"Enter Max Wait"},{name:"cycle",required:!1,label:"Cycle",tooltip:"Time duration between scanner cycles, defaults to '1m'",type:"duration",placeholder:"Enter Cycle"}],etcd:[{name:"endpoints",required:!0,label:"Endpoints",tooltip:'List of etcd endpoints e.g. "http://localhost:2379", you can write one per field',type:"csv",placeholder:"Enter Endpoint"},{name:"path_prefix",required:!1,label:"Path Prefix",tooltip:'namespace prefix to isolate tenants e.g. "customer1/"',type:"string",placeholder:"Enter Path Prefix"},{name:"coredns_path",required:!1,label:"Coredns Path",tooltip:'Shared bucket DNS records, default is "/skydns"',type:"string",placeholder:"Enter Coredns Path"},{name:"client_cert",required:!1,label:"Client Cert",tooltip:"Client cert for mTLS authentication",type:"string",placeholder:"Enter Client Cert"},{name:"client_cert_key",required:!1,label:"Client Cert Key",tooltip:"Client cert key for mTLS authentication",type:"string",placeholder:"Enter Client Cert Key"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",multiline:!0,placeholder:"Enter custom notes if any"}],identity_openid:[{name:"config_url",required:!1,label:"Config URL",tooltip:"Config URL for identity provider configuration",type:"string",placeholder:"https://identity-provider-url/.well-known/openid-configuration"},{name:"client_id",required:!1,label:"Client ID",type:"string",placeholder:"Enter Client ID"},{name:"client_secret",required:!1,label:"Secret ID",type:"string",placeholder:"Enter Secret ID"},{name:"claim_name",required:!1,label:"Claim Name",tooltip:"Claim from which MinIO will read the policy or role to use",type:"string",placeholder:"Enter Claim Name"},{name:"claim_prefix",required:!1,label:"Claim Prefix",tooltip:"Claim Prefix",type:"string",placeholder:"Enter Claim Prefix"},{name:"claim_userinfo",required:!1,label:"Claim UserInfo",type:"on|off"},{name:"redirect_uri",required:!1,label:"Redirect URI",type:"string",placeholder:"https://console-endpoint-url/oauth_callback"},{name:"scopes",required:!1,label:"Scopes",type:"string",placeholder:"openid,profile,email"}],identity_ldap:[{name:"server_addr",required:!0,label:"Server Addr",tooltip:'AD/LDAP server address e.g. "myldapserver.com:636"',type:"string",placeholder:"myldapserver.com:636"},{name:"tls_skip_verify",required:!1,label:"TLS Skip Verify",tooltip:'Trust server TLS without verification, defaults to "off" (verify)',type:"on|off"},{name:"server_insecure",required:!1,label:"Server Insecure",tooltip:'Allow plain text connection to AD/LDAP server, defaults to "off"',type:"on|off"},{name:"server_starttls",required:!1,label:"Start TLS connection to AD/LDAP server",tooltip:"Use StartTLS connection to AD/LDAP server",type:"on|off"},{name:"lookup_bind_dn",required:!0,label:"Lookup Bind DN",tooltip:"DN for LDAP read-only service account used to perform DN and group lookups",type:"string",placeholder:"cn=admin,dc=min,dc=io"},{name:"lookup_bind_password",required:!1,label:"Lookup Bind Password",tooltip:"Password for LDAP read-only service account used to perform DN and group lookups",type:"string",placeholder:"admin"},{name:"user_dn_search_base_dn",required:!1,label:"User DN Search Base DN",tooltip:"Base LDAP DN to search for user DN",type:"csv",placeholder:"dc=myldapserver"},{name:"user_dn_search_filter",required:!1,label:"User DN Search Filter",tooltip:"Search filter to lookup user DN",type:"string",placeholder:"(sAMAcountName=%s)"},{name:"group_search_filter",required:!1,label:"Group Search Filter",tooltip:"Search filter for groups",type:"string",placeholder:"(&(objectclass=groupOfNames)(member=%d))"},{name:"group_search_base_dn",required:!1,label:"Group Search Base DN",tooltip:"list of group search base DNs",type:"csv",placeholder:"dc=minioad,dc=local"},{name:"comment",required:!1,label:"Comment",tooltip:"Optionally add a comment to this setting",type:"comment",placeholder:"Enter custom notes if any"}],logger_webhook:[{name:"endpoint",required:!0,label:"Endpoint",type:"string",placeholder:"Enter Endpoint"},{name:"auth_token",required:!0,label:"Auth Token",type:"string",placeholder:"Enter Auth Token"}],audit_webhook:[{name:"endpoint",required:!0,label:"Endpoint",type:"string",placeholder:"Enter Endpoint"},{name:"auth_token",required:!0,label:"Auth Token",type:"string",placeholder:"Enter Auth Token"}]},v=function(e){return e.filter((function(e){return""!==e.value}))},y=function(e,t,r){var o=e.target,i=o.value,a=o.checked,l=(0,n.Z)(r);return a?l.push(i):l=l.filter((function(e){return e!==i})),t(l),l}},12720:function(e,t,r){var n=r(64119);t.Z=void 0;var o=n(r(66830)),i=r(62559),a=(0,o.default)((0,i.jsx)("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"}),"CallToAction");t.Z=a},30578:function(e,t,r){var n=r(64119);t.Z=void 0;var o=n(r(66830)),i=r(62559),a=(0,o.default)((0,i.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");t.Z=a},44229:function(e,t,r){var n=r(64119);t.Z=void 0;var o=n(r(66830)),i=r(62559),a=(0,o.default)((0,i.jsx)("path",{d:"M8 19h3v3h2v-3h3l-4-4-4 4zm8-15h-3V1h-2v3H8l4 4 4-4zM4 9v2h16V9H4zm0 3h16v2H4z"}),"Compress");t.Z=a},41845:function(e,t,r){var n=r(64119);t.Z=void 0;var o=n(r(66830)),i=r(62559),a=(0,o.default)((0,i.jsx)("path",{d:"M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"}),"FindReplace");t.Z=a},2494:function(e,t,r){var n=r(64119);t.Z=void 0;var o=n(r(66830)),i=r(62559),a=(0,o.default)((0,i.jsx)("path",{d:"M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"}),"LocalHospital");t.Z=a},89173:function(e,t,r){var n=r(64119);t.Z=void 0;var o=n(r(66830)),i=r(62559),a=(0,o.default)((0,i.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");t.Z=a},9639:function(e,t,r){var n=r(64119);t.Z=void 0;var o=n(r(66830)),i=r(62559),a=(0,o.default)((0,i.jsx)("path",{d:"M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}),"Login");t.Z=a},84386:function(e,t,r){var n=r(64119);t.Z=void 0;var o=n(r(66830)),i=r(62559),a=(0,o.default)((0,i.jsx)("path",{d:"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85-.7.71zM18 3h-3.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11c-.59-.57-1.07-1.25-1.42-2H6V5h2v3h8V5h2v5.08c.71.1 1.38.31 2 .6V5c0-1.1-.9-2-2-2zm-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}),"PendingActions");t.Z=a},75012:function(e,t,r){var n=r(64119);t.Z=void 0;var o=n(r(66830)),i=r(62559),a=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),"Public");t.Z=a},58267:function(e,t,r){var n=r(64119);t.Z=void 0;var o=n(r(66830)),i=r(62559),a=(0,o.default)((0,i.jsx)("path",{d:"M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"}),"SdStorage");t.Z=a},26068:function(e,t,r){var n=r(64119);t.Z=void 0;var o=n(r(66830)),i=r(62559),a=(0,o.default)((0,i.jsx)("path",{d:"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),"VpnKey");t.Z=a},18207:function(e,t,r){function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return n}})},46633:function(e,t,r){function n(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=1116.ed80449f.chunk.js.map