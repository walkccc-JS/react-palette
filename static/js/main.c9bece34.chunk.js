(this["webpackJsonpreact-palette"]=this["webpackJsonpreact-palette"]||[]).push([[0],{228:function(e,a,t){e.exports=t.p+"static/media/logo.74e82c65.svg"},250:function(e,a,t){e.exports=t(489)},255:function(e,a,t){},489:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(7),l=t.n(r),c=t(30),i=(t(255),t(32)),m=t(17),s=t(57),u=t(5),d=t(81),p=t(47),f=t(535),h=t(530),g=t(534),b=t(532),v=t(533),E=t(531),C=function(e){var a=Object(o.useState)(e),t=Object(m.a)(a,2),n=t[0],r=t[1];return{value:n,setValue:r,reset:function(){return r("")},bind:{value:n,onChange:function(e){return r(e.target.value)}}}},y=t(233);t(267);var x=function(e){var a=e.palettes,t=e.handleSubmit,r=e.hideForm,l=Object(o.useState)("form"),c=Object(m.a)(l,2),i=c[0],s=c[1],u=C(""),d=u.value,x=u.bind;return Object(o.useEffect)((function(){p.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(e){return a.every((function(a){return a.paletteName.toLowerCase()!==e.toLowerCase()}))}))})),n.a.createElement("div",null,n.a.createElement(h.a,{open:"emoji"===i,onClose:r},n.a.createElement(E.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),n.a.createElement(y.a,{title:"Pick a Palette Emoji",onSelect:function(e){var a={paletteName:d,emoji:e.native};t(a)}})),n.a.createElement(h.a,{"aria-labelledby":"form-dialog-title",open:"form"===i,onClose:r},n.a.createElement(E.a,{id:"form-dialog-title"},"Choose a Palette Name"),n.a.createElement(p.ValidatorForm,{onSubmit:function(){return s("emoji")}},n.a.createElement(b.a,null,n.a.createElement(v.a,null,"Please enter a name for your new beautiful palette. Make sure it's unique!"),n.a.createElement(p.TextValidator,Object.assign({fullWidth:!0,margin:"normal",label:"Palette Name",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]},x))),n.a.createElement(g.a,null,n.a.createElement(f.a,{color:"primary",onClick:r},"Cancel"),n.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit"},"Save Palette")))))},w=t(4),j=t(536),O=t(537),N=t(538),B=t(236),S=t(539),k=t(220),F=t.n(k),P=t(219),D=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px"}[e],")")},I=Object(P.a)((function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{height:"64px",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),alignItem:"center",flexDirection:"row",justifyContent:"space-between"},appBarShift:{width:"calc(100% - ".concat(300,"px)"),marginLeft:300,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},createPaletteText:Object(u.a)({},D("sm"),{display:"none"}),navButtons:{marginRight:"1rem","& a":{textDecoration:"none"},display:"flex",alignItems:"center"},button:{margin:"0 0.5rem"}}}));var A=function(e){var a=e.palettes,t=e.open,r=e.handleSubmit,l=e.handleDrawerOpen,i=I(),s=Object(o.useState)(!1),d=Object(m.a)(s,2),p=d[0],h=d[1];return n.a.createElement("div",{className:i.root},n.a.createElement(j.a,null),n.a.createElement(O.a,{color:"default",position:"fixed",className:Object(w.a)(i.appBar,Object(u.a)({},i.appBarShift,t))},n.a.createElement(N.a,null,n.a.createElement(S.a,{"aria-label":"open drawer",color:"inherit",edge:"start",onClick:l,className:Object(w.a)(i.menuButton,Object(u.a)({},i.hide,t))},n.a.createElement(F.a,null)),n.a.createElement(B.a,{variant:"h6",noWrap:!0,className:i.createPaletteText},"Create a palette")),n.a.createElement("div",{className:i.navButtons},n.a.createElement(c.b,{to:"/"},n.a.createElement(f.a,{color:"secondary",variant:"contained",className:i.button},"Back")),n.a.createElement(f.a,{color:"primary",variant:"contained",onClick:function(){return h(!0)},className:i.button},"Save"))),p&&n.a.createElement(x,{palettes:a,hideForm:function(){return h(!1)},handleSubmit:r}))},G=t(222),L=t.n(G),R=t(6);var M,z=Object(R.a)({picker:{width:"100% !important"},colorNameInput:{width:"100%"},addColorButton:{width:"100%",height:"2rem",fontSize:"1rem"}})((function(e){var a=e.classes,t=e.colors,r=e.isPaletteFull,l=e.addColor,c=Object(o.useState)("teal"),i=Object(m.a)(c,2),s=i[0],u=i[1],d=C(""),h=d.value,g=d.bind,b=d.reset;return Object(o.useEffect)((function(){p.ValidatorForm.addValidationRule("isColorNameUnique",(function(e){return t.every((function(a){return a.name.toLowerCase()!==e.toLowerCase()}))})),p.ValidatorForm.addValidationRule("isColorUnique",(function(){return t.every((function(e){return e.color!==s}))}))})),n.a.createElement("div",null,n.a.createElement(L.a,{color:s,onChangeComplete:function(e){u(e.hex)},className:a.picker}),n.a.createElement(p.ValidatorForm,{onSubmit:function(){l({color:s,name:h}),b()}},n.a.createElement(p.TextValidator,Object.assign({margin:"normal",placeholder:"Color name",validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already be used"],className:a.colorNameInput},g)),n.a.createElement(f.a,{color:"primary",type:"submit",variant:"contained",disabled:r,style:{backgroundColor:r?"gray":s},className:a.addColorButton},r?"Palette is full":"Add color")))})),U=t(79),T=t.n(U),H=Object(P.a)({root:(M={width:"20%",height:"25%",margin:"0 auto",marginBottom:"-5px",cursor:"pointer",display:"inline-block",position:"relative","&:hover svg":{color:"white",transform:"scale(1.2)"}},Object(u.a)(M,D("lg"),{width:"25%",height:"20%"}),Object(u.a)(M,D("md"),{width:"50%",height:"10%"}),Object(u.a)(M,D("sm"),{width:"100%",height:"5%"}),M),boxContent:{width:"100%",left:"0",bottom:"0",padding:"10px",color:"rgba(0, 0, 0, 0.5)",fontSize:"12px",letterSpacing:"1px",position:"absolute",textTransform:"uppercase",display:"flex",justifyContent:"space-between"},deleteIcon:{color:"rgba(0, 0, 0, 0.5)",transition:"all 0.3s ease-in-out"}}),V=Object(d.b)((function(e){var a=e.color,t=e.name,o=e.handleClick,r=H();return n.a.createElement("div",{style:{backgroundColor:a},className:r.root},n.a.createElement("div",{className:r.boxContent},n.a.createElement("span",null,t),n.a.createElement(T.a,{className:r.deleteIcon,onClick:o})))})),q=Object(d.a)((function(e){var a=e.colors,t=e.removeColor;return n.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return n.a.createElement(V,{index:a,color:e.color,name:e.name,key:e.name,handleClick:function(){return t(e.name)}})})))})),W=t(542),J=t(223),Y=t.n(J),K=t(224),Q=t.n(K);function X(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function $(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?X(t,!0).forEach((function(a){Object(u.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var Z=Object(P.a)((function(e){return{root:{display:"flex"},drawer:{width:300,flexShrink:0,height:"100vh"},drawerPaper:{width:300,display:"flex",alignItems:"center"},drawerHeader:$({width:"100%",display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{height:"calc(100vh - 64px)",flexGrow:1,padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-300},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"90%",display:"flex",alignItems:"flex-start",flexDirection:"column",justifyContent:"space-between"},buttons:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-around"},button:{}}}));function _(e){var a=e.maxColors,t=e.palettes,r=e.savePalette,l=e.history,c=Z(),s=Object(o.useState)(!0),p=Object(m.a)(s,2),f=p[0],h=p[1],g=Object(o.useState)([]),b=Object(m.a)(g,2),v=b[0],E=b[1],C=v.length>=a;return n.a.createElement("div",{className:c.root},n.a.createElement(A,{palettes:t,open:f,handleDrawerOpen:function(){return h(!0)},handleSubmit:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=v,r(e),l.push("/")}}),n.a.createElement(W.a,{anchor:"left",variant:"persistent",open:f,classes:{paper:c.drawerPaper},className:c.drawer},n.a.createElement("div",{className:c.drawerHeader},n.a.createElement(S.a,{onClick:function(){return h(!1)}},n.a.createElement(Y.a,null))),n.a.createElement("div",{className:c.container},n.a.createElement(B.a,{variant:"h2",gutterBottom:!0},"Design your palette"),n.a.createElement(z,{colors:v,isPaletteFull:C,addColor:function(e){return E([].concat(Object(i.a)(v),[e]))}}),n.a.createElement("div",{className:c.buttons},n.a.createElement(T.a,{color:"secondary",variant:"contained",onClick:function(){return E([])},className:c.button}),n.a.createElement(Q.a,{color:"primary",variant:"contained",disabled:C,onClick:function(){var e=t.map((function(e){return e.colors})).flat(),a=e[Math.floor(Math.random()*e.length)];E([].concat(Object(i.a)(v),[a]))},className:c.button})))),n.a.createElement("main",{className:Object(w.a)(c.content,Object(u.a)({},c.contentShift,f))},n.a.createElement("div",{className:c.drawerHeader}),n.a.createElement(q,{axis:"xy",colors:v,removeColor:function(e){return E(v.filter((function(a){return a.name!==e})))},onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex;return E(Object(d.c)(v,a,t))}})))}_.defaultProps={maxColors:20};var ee=_,ae=Object(P.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{width:"100%",height:"150px",backgroundColor:"#dae1e4",borderRadius:"5px",overflow:"hidden"},title:{margin:"0",paddingTop:"0.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",color:"black",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{width:"20%",height:"25%",margin:"0 auto",marginBottom:"-3.5px",display:"inline-block",position:"relative"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}});var te=function(e){var a=e.id,t=e.colors,o=e.paletteName,r=e.emoji,l=e.handleClick,c=e.handleDelete,i=ae(),m=t.map((function(e){return n.a.createElement("div",{key:e.name,style:{backgroundColor:e.color},className:i.miniColor})}));return n.a.createElement("div",{className:i.root,onClick:l},n.a.createElement("div",{className:i.delete},n.a.createElement(T.a,{onClick:function(e){e.stopPropagation(),c(a)},style:{transition:"all 0.3s ease-in-out"},className:i.deleteIcon})),n.a.createElement("div",{className:i.colors},m),n.a.createElement("h5",{className:i.title},o," ",n.a.createElement("span",{className:i.emjoi},r)))},oe=Object(P.a)({root:{height:"100vh",backgroundColor:"blue",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},nav:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",color:"white","& a":{color:"white"}},palettes:{width:"100%",boxSizing:"border-box",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"5%"}});var ne=function(e){var a=e.palettes,t=e.deletePalette,o=e.history,r=oe();return n.a.createElement("div",{className:r.root},n.a.createElement("div",{className:r.container},n.a.createElement("nav",{className:r.nav},n.a.createElement("h1",null,"React Palette"),n.a.createElement(c.b,{to:"/palette/new"},"Create palette")),n.a.createElement("div",{className:r.palettes},a.map((function(e){return n.a.createElement(te,Object.assign({},e,{key:e.id,id:e.id,handleClick:function(){return a=e.id,o.push("/palette/".concat(a));var a},handleDelete:t}))})))))},re=t(232),le=t(228),ce=t.n(le),ie=t(540),me=t(544),se=t(541),ue=t(117),de=t.n(ue),pe=t(490),fe=Object(u.a)({Navbar:{height:"5%",display:"flex",alignItems:"center",justifyContent:"flex-start"},logo:{height:"100%",display:"flex",alignItems:"center",fontFamily:"Montserrat",fontSize:"22px",fontWeight:"600",color:"black",textDecoration:"none"},siteName:Object(u.a)({},D("sm"),{display:function(e){return e.showingAllColors?"none":""}}),slider:Object(u.a)({width:"300px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{outline:"none",boxShadow:"none"}},D("sm"),{width:"200px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}},D("sm"),{display:"none"});t(485);var he,ge=Object(pe.a)(fe)((function(e){var a=e.classes,t=e.level,r=e.showingAllColors,l=e.changeLevel,i=e.changeFormat,s=Object(o.useState)("hex"),u=Object(m.a)(s,2),d=u[0],p=u[1],f=Object(o.useState)(!1),h=Object(m.a)(f,2),g=h[0],b=h[1],v=function(){return b(!1)};return n.a.createElement("header",{className:a.Navbar},n.a.createElement(c.b,{to:"/",className:a.logo},n.a.createElement("img",{src:ce.a,alt:"logo",width:"30",height:"30",style:{marginLeft:"0.5rem",marginRight:"0.5rem"}}),n.a.createElement("span",{className:a.siteName},"React Palette")),r&&n.a.createElement("div",null,n.a.createElement("span",{style:{fontFamily:"Montserrat",marginLeft:"1rem"}},"Level: ",t),n.a.createElement(re.a,{defaultValue:t,min:100,max:900,step:100,onAfterChange:l,className:a.slider})),n.a.createElement("div",{className:a.selectContainer},n.a.createElement(ie.a,{value:d,onChange:function(e){p(e.target.value),b(!0),i(e.target.value)}},n.a.createElement(me.a,{value:"hex"},"HEX"),n.a.createElement(me.a,{value:"rgb"},"RGB"),n.a.createElement(me.a,{value:"rgba"},"RGBA"))),n.a.createElement(se.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:3e3,ContentProps:{"aria-describedby":"message-id"},message:n.a.createElement("span",{id:"message-id"},"Format changed to ",d.toUpperCase()),open:g,onClose:v,action:[n.a.createElement(S.a,{onClick:v,color:"inherit",key:"close","aria-label":"close"},n.a.createElement(de.a,null))]}))})),be=t(229),ve=t(230),Ee=t.n(ve),Ce=t(231),ye=t.n(Ce),xe=t(59),we=t.n(xe),je={ColorBox:(he={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},cursor:"pointer",display:"inline-block",position:"relative","&:hover svg":{opacity:1}},Object(u.a)(he,D("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3%"}}),Object(u.a)(he,D("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(u.a)(he,D("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),he),buttons:Object(u.a)({left:"40%",right:"40%",top:"40%",bottom:"40%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"space-around"},D("xs"),{left:"80%",right:"5%"}),moreButton:{color:function(e){return we()(e.background).luminance()>=.5?"rgba(0, 0, 0, 0.5)":"white"},fontSize:"1.2rem",opacity:0,"&:hover":{transform:"scale(1.3)",transition:"all 0.2s ease-in-out"}},copyButton:{color:function(e){return we()(e.background).luminance()>=.5?"rgba(0, 0, 0, 0.5)":"white"},fontSize:"1.2rem",opacity:0,"&:hover":{transform:"scale(1.3)",transition:"all 0.2s ease-in-out"}},boxContent:{width:"70%",left:"0",bottom:"0",padding:"10px",color:"black",fontSize:"12px",letterSpacing:"1px",position:"absolute",textTransform:"uppercase"}};var Oe=Object(pe.a)(je)((function(e){var a=e.classes,t=e.name,r=e.background,l=e.moreUrl,i=e.showingFullPalette,s=Object(o.useState)(!1),u=Object(m.a)(s,2),d=u[0],p=u[1],f=function(){return p(!1)};return n.a.createElement(be.CopyToClipboard,{text:r,onCopy:function(){return p(!0)}},n.a.createElement("div",{style:{background:r},className:a.ColorBox},n.a.createElement("div",null,n.a.createElement("div",{className:a.boxContent},n.a.createElement("span",{className:a.colorName},t)),n.a.createElement("div",{className:a.buttons},n.a.createElement(Ee.a,{className:a.copyButton}),i&&n.a.createElement(c.b,{to:l,onClick:function(e){return e.stopPropagation()}},n.a.createElement(ye.a,{className:a.moreButton}))),n.a.createElement(se.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:1200,ContentProps:{"aria-describedby":"message-id"},message:n.a.createElement("span",{id:"message-id"},r," copied"),open:d,onClose:f,action:[n.a.createElement(S.a,{"aria-label":"close",color:"inherit",key:"close",onClick:f},n.a.createElement(de.a,null))]}))))})),Ne=Object(P.a)({Footer:{height:"5%",background:"white",display:"flex",alignItems:"center",justifyContent:"flex-end",fontWeight:"bold"},emoji:{margin:"0rem",paddingLeft:"1rem",paddingRight:"1rem",fontSize:"1.5rem"}});var Be,Se=function(e){var a=e.paletteName,t=e.emoji,o=Ne();return n.a.createElement("footer",{className:o.Footer},a,n.a.createElement("span",{className:o.emoji},t))},ke=Object(P.a)({Palette:{height:"100%",width:"100%",display:"flex",flexDirection:"column"},colorBoxesContainer:{height:"90%",display:"flex",alignContent:"flex-start",flexWrap:"wrap"},goBack:(Be={width:"20%",height:"50%",margin:"0 auto",marginBottom:"-3.5px",cursor:"pointer",display:"inline-block",opacity:1,position:"relative",background:"rgba(0, 0, 0, 0.9)","& a":{color:"white",width:"100px",height:"30px",marginLeft:"-50px",marginTop:"-15px",left:"50%",top:"50%",background:"rgba(255, 255, 255, 0.3)",border:"none",display:"inline-block",fontSize:"1rem",lineHeight:"30px",outline:"none",position:"absolute",textAlign:"center",textDecoration:"none",textTransform:"uppercase"}},Object(u.a)(Be,D("lg"),{width:"75%",height:"33.3%"}),Object(u.a)(Be,D("md"),{width:"50%",height:"20%"}),Object(u.a)(Be,D("xs"),{width:"100%",height:"10%"}),Be)});var Fe=function(e){var a=e.palette,t=ke(),r=a.colors,l=a.paletteName,c=a.emoji,i=a.id,s=Object(o.useState)(500),u=Object(m.a)(s,2),d=u[0],p=u[1],f=Object(o.useState)("hex"),h=Object(m.a)(f,2),g=h[0],b=h[1],v=r[d].map((function(e){return n.a.createElement(Oe,{showingFullPalette:!0,key:e.id,name:e.name,background:e[g],moreUrl:"/palette/".concat(i,"/").concat(e.id)})}));return n.a.createElement("div",{className:t.Palette},n.a.createElement(ge,{showingAllColors:!0,level:d,changeLevel:function(e){return p(e)},changeFormat:function(e){return b(e)}}),n.a.createElement("div",{className:t.colorBoxesContainer},v),n.a.createElement(Se,{paletteName:l,emoji:c}))},Pe=function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)};var De=function(e){var a=e.palette,t=e.colorId,r=ke(),l=a.paletteName,i=a.emoji,s=a.id,u=Object(o.useState)("hex"),d=Object(m.a)(u,2),p=d[0],f=d[1],h=Pe(a,t).map((function(e){return n.a.createElement(Oe,{showingFullPalette:!1,key:e.hex,name:e.name,background:e[p]})}));return n.a.createElement("div",{className:r.Palette},n.a.createElement(ge,{showingAllColors:!1,changeFormat:function(e){return f(e)}}),n.a.createElement("div",{className:r.colorBoxesContainer},h,n.a.createElement("div",{className:r.goBack},n.a.createElement(c.b,{to:"/palette/".concat(s)},"Go back"))),n.a.createElement(Se,{paletteName:l,emoji:i}))},Ie=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Ae=[50,100,200,300,400,500,600,700,800,900];function Ge(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=!0,o=!1,n=void 0;try{for(var r,l=Ae[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var c=r.value;a.colors[c]=[]}}catch(v){o=!0,n=v}finally{try{t||null==l.return||l.return()}finally{if(o)throw n}}var i,m,s=!0,u=!1,d=void 0;try{for(var p,f=e.colors[Symbol.iterator]();!(s=(p=f.next()).done);s=!0){var h=p.value,g=(i=h.color,m=10,we.a.scale(function(e){return[we()(e).darken(1.4).hex(),e,"#fff"]}(i)).mode("lab").colors(m)).reverse();for(var b in g)a.colors[Ae[b]].push({name:"".concat(h.name," ").concat(Ae[b]),id:h.name.toLowerCase().replace(/ /g,"-"),hex:g[b],rgb:we()(g[b]).css(),rgba:we()(g[b]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(v){u=!0,d=v}finally{try{s||null==f.return||f.return()}finally{if(u)throw d}}return a}var Le=function(){var e=Object(o.useState)(Ie),a=Object(m.a)(e,2),t=a[0],r=a[1],l=function(e){return t.find((function(a){return a.id===e}))},c=function(e){r([].concat(Object(i.a)(t),[e]))},u=function(e){r(t.filter((function(a){return a.id!==e})))};return n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/palette/new",render:function(e){return n.a.createElement(ee,Object.assign({savePalette:c,palettes:t},e))}}),n.a.createElement(s.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(ne,Object.assign({palettes:t,deletePalette:u},e))}}),n.a.createElement(s.a,{exact:!0,path:"/palette/:id",render:function(e){return n.a.createElement(Fe,{palette:Ge(l(e.match.params.id))})}}),n.a.createElement(s.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(e){return n.a.createElement(De,{colorId:e.match.params.colorId,palette:Ge(l(e.match.params.paletteId))})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(c.a,{basename:"/react-palette"},n.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[250,1,2]]]);
//# sourceMappingURL=main.c9bece34.chunk.js.map