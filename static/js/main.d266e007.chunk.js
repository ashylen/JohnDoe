(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/discography-bg.6b0cdff0.png"},101:function(e,t,a){e.exports=a.p+"static/media/discography-button-1-bg.636fc433.png"},102:function(e,t,a){e.exports=a.p+"static/media/discography-button-2-bg.2c4aea41.png"},103:function(e,t,a){e.exports=a.p+"static/media/discography-button-3-bg.c12ed136.png"},104:function(e,t,a){e.exports=a.p+"static/media/title-1-bg.ca390be1.png"},105:function(e,t,a){e.exports=a.p+"static/media/tours-bg.5d070c86.png"},130:function(e,t,a){e.exports=a(176)},172:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(46),i=a.n(o),l=a(93),c=a(129),s=a(32),m=a(33),d=a(38),u=a(34),p=a(39),h=r.a.createContext(),v=a(12),g=a(94),_=a.n(g),b=a(15),f=a(23),E=a(5),x=a.n(E),N=function(e){var t=e.navOnClickFn;Object(b.a)(e,["navOnClickFn"]);return r.a.createElement("aside",{className:x.a.wrapper},r.a.createElement("ul",{className:x.a.inner},r.a.createElement("li",{className:x.a.navItem},r.a.createElement(f.HashLink,{exact:!0,activeClassName:x.a.navItemLinkActive,className:x.a.navItemLink,to:"/about",onClick:function(){return t("about")}},"About")),r.a.createElement("li",{className:x.a.navItem},r.a.createElement(f.HashLink,{activeClassName:x.a.navItemLinkActive,className:x.a.navItemLink,to:"/discography",onClick:function(){return t("discography")}},"Discography")),r.a.createElement("li",{className:x.a.navItem},r.a.createElement(f.HashLink,{activeClassName:x.a.navItemLinkActive,className:x.a.navItemLink,to:"/concert-tours",onClick:function(){return t("concert-tours")}},"Concert Tours")),r.a.createElement("li",{className:x.a.navItem},r.a.createElement(f.HashLink,{activeClassName:x.a.navItemLinkActive,className:x.a.navItemLink,to:"/latter-compositions",onClick:function(){return t("latter-compositions")}},"Latter Compositions")),r.a.createElement("li",{className:x.a.navItem},r.a.createElement(f.HashLink,{activeClassName:x.a.navItemLinkActive,className:x.a.navItemLink,to:"/new-tracks",onClick:function(){return t("new-tracks")}},"New tracks")),r.a.createElement("li",{className:x.a.navItem},r.a.createElement(f.HashLink,{activeClassName:x.a.navItemLinkActive,className:x.a.navItemLink,to:"/upcoming-events",onClick:function(){return t("upcoming-events")}},"Upcoming Events")),r.a.createElement("li",{className:x.a.navItem},r.a.createElement(f.HashLink,{activeClassName:x.a.navItemLinkActive,className:x.a.navItemLink,to:"/history",onClick:function(){return t("history")}},"History")),r.a.createElement("li",{className:x.a.navItem},r.a.createElement(f.HashLink,{activeClassName:x.a.navItemLinkActive,className:x.a.navItemLink,to:"/contact",onClick:function(){return t("contact")}},"Contact"))))},k=a(7),I=a.n(k),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1,location:null,isMobile:window.innerWidth<1024},a.componentDidMount=function(){var e=window.location.pathname;setTimeout(function(){var t=e.replace("/",""),a=document.getElementById(t);a&&a.scrollIntoView({behavior:"smooth"})},0)},a.handleResize=function(){a.setState(function(){return{isMobile:window.innerWidth<1024}})},a.menuClicked=function(){a.setState(function(e){return{isOpen:!e.isOpen}})},a.closeMenu=function(){a.setState(function(){return{isOpen:!1}})},a.navOnClick=function(e){""!==e&&(setTimeout(function(){var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})},0),a.closeMenu())},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return window.addEventListener("resize",this.handleResize),r.a.createElement("nav",{className:I.a.sticky},this.state.isMobile&&r.a.createElement("div",{className:I.a.burger},r.a.createElement(_.a,{width:25,height:20,strokeWidth:3,color:"#a1a1a1",isOpen:this.state.isOpen,menuClicked:this.menuClicked})),this.state.isOpen&&this.state.isMobile&&r.a.createElement(N,{isSideBarOpen:this.state.isOpen,navOnClickFn:this.navOnClick}),this.state.isOpen&&r.a.createElement("div",{onClick:this.closeMenu,className:I.a.overlay}),!this.state.isOpen&&!this.state.isMobile&&r.a.createElement("ul",{className:I.a.wrapper},r.a.createElement("li",{className:I.a.navItem},r.a.createElement(v.NavLink,{exact:!0,className:I.a.navItemLink,to:"/about",onClick:function(){return e.navOnClick("about")}},"About")),r.a.createElement("li",{className:I.a.navItem},r.a.createElement(v.NavLink,{className:I.a.navItemLink,to:"/discography",onClick:function(){return e.navOnClick("discography")}},"Discography")),r.a.createElement("li",{className:I.a.navItem},r.a.createElement(v.NavLink,{className:I.a.navItemLink,to:"/concert-tours",onClick:function(){return e.navOnClick("concert-tours")}},"Concert Tours")),r.a.createElement("li",{className:I.a.navItem},r.a.createElement(v.NavLink,{className:I.a.navItemLink,to:"/latter-compositions",onClick:function(){return e.navOnClick("latter-compositions")}},"Latter Compositions")),r.a.createElement("li",{className:I.a.navItem},r.a.createElement(v.NavLink,{className:I.a.navItemLink,to:"/new-tracks",onClick:function(){return e.navOnClick("new-tracks")}},"New tracks")),r.a.createElement("li",{className:I.a.navItem},r.a.createElement(v.NavLink,{className:I.a.navItemLink,to:"/upcoming-events",onClick:function(){return e.navOnClick("upcoming-events")}},"Upcoming Events")),r.a.createElement("li",{className:I.a.navItem},r.a.createElement(v.NavLink,{className:I.a.navItemLink,to:"/history",onClick:function(){return e.navOnClick("history")}},"History")),r.a.createElement("li",{className:I.a.navItem},r.a.createElement(v.NavLink,{className:I.a.navItemLink,to:"/contact",onClick:function(){return e.navOnClick("contact")}},"Contact"))))}}]),t}(r.a.Component),w=a(67),C=a.n(w),L=a(96),S=a.n(L),T=a(97),B=a.n(T),O=function(e){e.openModalFn;return r.a.createElement("header",{id:"about",style:{backgroundImage:"url(".concat(S.a,")")},className:C.a.wrapper},r.a.createElement(y,null),r.a.createElement("div",{className:C.a.logoWrapper},r.a.createElement("img",{className:C.a.logo,src:B.a,alt:"Logo"})))},M=a(50),F=a.n(M),H=function(e){var t=e.children,a=e.textCustomize,n="gradient"!==a?{backgroundImage:"url(".concat(a,")")}:null,o="gradient"===a?F.a.gradient:a?F.a.clippingMask:F.a.title;return r.a.createElement("div",{className:F.a.wrapper},r.a.createElement("h1",{className:o,style:n},t))},A=a(98),j=a.n(A),D=function(e){var t=e.children;return r.a.createElement("h2",{className:j.a.description},t)},V=a(30),R=a.n(V),P=function(e){var t=e.children,a=e.href,n=e.secondary,o=e.buttonBg,i=e.invertTextColor,l=e.openModalFn,c=e.fixed,s=Object(b.a)(e,["children","href","secondary","buttonBg","invertTextColor","openModalFn","fixed"]),m=n?c?R.a.secondaryFixed:R.a.secondary:c?R.a.buttonFixed:R.a.button,d=i?R.a.invertText:R.a.text;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("a",{href:a,target:"_blank",className:m,rel:"noopener noreferrer"},t):r.a.createElement("button",Object.assign({onClick:l,style:o?{backgroundImage:"url(".concat(o,")")}:null,className:m},s),r.a.createElement("span",{className:d},t)))},z=a(81),U=a.n(z),q=a(58),W=function(e){var t=e.count,a=e.icon;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:U.a.wrapper},r.a.createElement(q.a,{icon:a,color:"#abacac",size:"1x"}),r.a.createElement("span",{className:U.a.text},t)))},K=a(99),Y=a.n(K),G=function(e){var t=e.socialBoxContent,a=Object.entries(t).map(function(e,t){return r.a.createElement(W,{key:t,icon:e[1].icon,count:e[1].count})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Y.a.wrapper},a))},X=a(51),J=a.n(X),Z=function(e){var t=e.header,a=e.text,n=e.buttonText,o=e.buttonBg,i=e.buttonClass,l=e.buttonHref,c=e.invertTextColor,s=e.socialBoxContent;Object(b.a)(e,["header","text","buttonText","buttonBg","buttonClass","buttonHref","invertTextColor","socialBoxContent"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:J.a.wrapper},r.a.createElement("div",{className:J.a.header},t),r.a.createElement("div",{className:J.a.text},a),r.a.createElement("div",{className:J.a.additionalContent},r.a.createElement(P,{href:l,secondary:"secondary"===i,buttonBg:o,invertTextColor:c},n),s&&r.a.createElement(G,{socialBoxContent:s}))))},Q=a(41),$=a.n(Q),ee=function(e){var t=e.date,a=e.children,n=e.secondary,o=(Object(b.a)(e,["date","children","secondary"]),n?$.a.secondaryWrapper:$.a.wrapper);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o},r.a.createElement("div",{className:$.a.date},t),r.a.createElement("hr",{className:$.a.spacer}),r.a.createElement("div",{className:$.a.text},a)))},te=a(42),ae=a.n(te),ne=a(100),re=a.n(ne),oe=a(101),ie=a.n(oe),le=a(102),ce=a.n(le),se=a(103),me=a.n(se),de=a(104),ue=a.n(de),pe=a(28),he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{id:"discography",className:ae.a.article,style:{backgroundImage:"url(".concat(re.a,")")}},r.a.createElement("div",{className:ae.a.wrapper},r.a.createElement(H,{textCustomize:ue.a},"Discography"),r.a.createElement(D,null,pe.sectionDescription),r.a.createElement("div",{className:ae.a.track},r.a.createElement(ee,{date:2010},"HELL AND SILENCE"),r.a.createElement(Z,{header:pe.box1.header,text:pe.box1.text,buttonText:"PLAY",buttonBg:ie.a,buttonClass:"secondary"})),r.a.createElement("div",{className:ae.a.track},r.a.createElement(ee,{date:2012},"NIGHT VISIONS"),r.a.createElement(Z,{header:pe.box2.header,text:pe.box2.text,buttonText:"PLAY",buttonBg:ce.a,buttonClass:"secondary",invertTextColor:!0})),r.a.createElement("div",{className:ae.a.track},r.a.createElement(ee,{date:2015},"SMOKE + MIRRORS"),r.a.createElement(Z,{header:pe.box3.header,text:pe.box3.text,buttonText:"PLAY",buttonBg:me.a,buttonClass:"secondary",invertTextColor:!0})))))},ve=a(68),ge=a.n(ve),_e=a(105),be=a.n(_e),fe=a(69),Ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{id:"concert-tours",className:ge.a.article,style:{backgroundImage:"url(".concat(be.a,")")}},r.a.createElement("div",{className:ge.a.wrapper},r.a.createElement(H,{textCustomize:"gradient"},"Concert Tours"),r.a.createElement(D,null,fe.sectionDescription),r.a.createElement("div",{className:ge.a.track},r.a.createElement(ee,{date:"03.08.2015"},"SMOKE + MIRRORS TOUR"),r.a.createElement(Z,{header:fe.box1.header,text:fe.box1.text,buttonText:"Buy online"})))))},xe=a(106),Ne=a(31),ke=a.n(Ne),Ie=a(43),ye=a(40),we={auditions:{icon:Ie.e,count:Math.floor(1e3*Math.random())},likes:{icon:Ie.b,count:Math.floor(1e3*Math.random())},shares:{icon:Ie.d,count:Math.floor(1e3*Math.random())},comments:{icon:Ie.a,count:Math.floor(1e3*Math.random())}},Ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Consumer,null,function(e){return r.a.createElement("article",{id:"latter-compositions",className:ke.a.article},r.a.createElement("div",{className:ke.a.wrapper},r.a.createElement(H,null,"Latter Compositions "),r.a.createElement(D,null,ye.sectionDescription),e.compositions.length?e.compositions.map(function(e){return r.a.createElement("div",{className:ke.a.inner},r.a.createElement("div",{className:ke.a.description},r.a.createElement(ee,{secondary:!0,date:e.date},e.subText),r.a.createElement(Z,{header:e.header,text:e.text,buttonText:"Visit on iTunes",buttonHref:e.href,socialBoxContent:we})),r.a.createElement("div",{className:ke.a.video},e.videoId&&r.a.createElement(xe.a,{videoId:e.videoId})))}):r.a.createElement("h1",{className:ke.a.noItems},"There's nothing here yet, please add some items!"),r.a.createElement(P,{fixed:!0,openModalFn:e.openModalFn},r.a.createElement(q.a,{icon:Ie.c,color:"#abacac",size:"1x"}))))}))},Le=a(70),Se=a.n(Le),Te=a(57),Be=a(109),Oe=a(29),Me=a(45),Fe=a.n(Me),He=function(e){var t=e.tag,a=e.name,n=e.label,o=e.maxLength,i=Object(b.a)(e,["tag","name","label","maxLength"]);return r.a.createElement("div",{className:Fe.a.formItem},r.a.createElement(t,Object.assign({className:"textarea"===t?Fe.a.textarea:Fe.a.input,type:"text",name:a,id:a,required:!0,maxLength:o,placeholder:" "},i)),r.a.createElement("label",{className:Fe.a.label,htmlFor:a},n),r.a.createElement("div",{className:Fe.a.formItemBar}))};He.defaultProps={tag:"input",maxLength:200};var Ae=He,je=a(26),De=a.n(je),Ve={header:"",href:"",text:"",date:"",dateObj:null,subText:"",videoId:"",goToPreviousStep:!1},Re=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state=Ve,a.handleGoToPreviousStep=function(){a.setState({goToPreviousStep:!0})},a.handleDateChange=function(e){if(e){var t=Object(Oe.a)(e,"dd.MM.yyyy",{awareOfUnicodeTokens:!0});a.setState({date:t,dateObj:e})}},a.handleInputChange=function(e){if(a.setState(Object(Te.a)({},e.target.name,e.target.value)),"videoId"===e.target.name){var t,n=e.target.value.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);n&&11===n[7].length?(t=n,a.setState({videoId:t[0]})):(t="You have to paste valid URL",a.setState({videoId:t}))}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.Consumer,null,function(t){return 2!==t.step?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:De.a.formHeader},"Add a new composition!"),r.a.createElement("div",{className:De.a.wrapper},r.a.createElement("form",{autoComplete:"off",className:De.a.form,onSubmit:function(a){return t.goToNextStep(a,e.state)}},r.a.createElement(Ae,{onChange:e.handleInputChange,value:e.state.header,name:"header",label:"Composition header"}),r.a.createElement(Ae,{onChange:e.handleInputChange,value:e.state.href,name:"href",label:"Link"}),r.a.createElement(Ae,{onChange:e.handleInputChange,value:e.state.subText,name:"subText",label:"Album"}),r.a.createElement(Ae,{onChange:e.handleInputChange,value:e.state.videoId,name:"videoId",label:"Paste Youtube Url"}),r.a.createElement(Be.a,{required:!0,selected:e.state.dateObj,onSelect:function(t){return e.handleDateChange(t)},name:"date",dateFormat:"dd.MM.yyyy",placeholderText:"Click to select date",className:De.a.datepicker}),r.a.createElement(Ae,{onChange:e.handleInputChange,value:e.state.text,tag:"textarea",name:"text",label:"Description"}),r.a.createElement(P,null,"Next")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:De.a.wrapper},r.a.createElement("div",{className:De.a.formHeader},"Summary"),r.a.createElement(D,null,"\xa0"),r.a.createElement("div",{className:De.a.form},r.a.createElement(D,null,r.a.createElement("strong",null,"Composition header:")),r.a.createElement(D,null,e.state.header),r.a.createElement(D,null,r.a.createElement("strong",null,"Link:")),r.a.createElement(D,null,e.state.href),r.a.createElement(D,null,r.a.createElement("strong",null,"Date:")),r.a.createElement(D,null,e.state.date),r.a.createElement(D,null,r.a.createElement("strong",null,"Album:")),r.a.createElement(D,null,e.state.subText),r.a.createElement(D,null,r.a.createElement("strong",null,"YouTube URL:")),r.a.createElement(D,null,e.state.videoId),r.a.createElement(D,null,r.a.createElement("strong",null,"Description:")),r.a.createElement(D,null,e.state.text),r.a.createElement("div",{className:De.a.modalNavigation},r.a.createElement(P,{secondary:!0,onClick:function(a){return t.goToPreviousStep(a,e.state)}},"Back"),r.a.createElement(P,{onClick:function(a){return t.addItem(a,e.state)}},"Add composition!")))))})}}]),t}(r.a.Component),Pe=function(e){var t=e.closeModalFn;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Se.a.wrapper},r.a.createElement("button",{className:Se.a.closeButton,onClick:t}),r.a.createElement(Re,null)),r.a.createElement("div",{onClick:t,className:Se.a.overlay}))},ze=(a(172),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={compositions:[ye.box,ye.box,ye.box],isModalOpen:!1,step:1,goToPreviousStep:!1},a.goToNextStep=function(e,t){e.preventDefault(),a.setState({step:2})},a.goToPreviousStep=function(e,t){e.preventDefault(),a.setState({step:1})},a.addItem=function(e,t){if(t.videoId){var n=t.videoId.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/),r=n&&11===n[7].length?n[7]:"";t.videoId=r}a.setState(function(e){return{compositions:[].concat(Object(c.a)(e.compositions),[t])}}),a.setState({step:1}),a.closeModal()},a.openModal=function(){a.setState({isModalOpen:!0})},a.closeModal=function(){a.setState({isModalOpen:!1,step:1})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.isModalOpen,t=Object(l.a)({},this.state,{addItem:this.addItem,goToNextStep:this.goToNextStep,goToPreviousStep:this.goToPreviousStep,openModalFn:this.openModal,closeModalFn:this.closeModal});return r.a.createElement(v.BrowserRouter,null,r.a.createElement(h.Provider,{value:t},r.a.createElement(O,{openModalFn:this.openModal}),r.a.createElement("section",null,r.a.createElement(he,null),r.a.createElement(Ee,null),r.a.createElement(Ce,null)),e&&r.a.createElement(Pe,{closeModalFn:this.closeModal})))}}]),t}(r.a.Component));i.a.render(r.a.createElement(ze,null),document.getElementById("root"))},26:function(e,t,a){e.exports={wrapper:"Form_wrapper__3zJzv",fadeIn:"Form_fadeIn__2RaU-",form:"Form_form__2oqgz",modalNavigation:"Form_modalNavigation__IwWy5",formHeader:"Form_formHeader__29Ffz",datepicker:"Form_datepicker__20hoc"}},28:function(e){e.exports={sectionDescription:"September 4 world heard Night Visions, the first full album. He reached the 2 position in the chart Billboard 200. The single \xabIt's Time\xbb took 22 th place in the Billboard Hot 100, 4th in the Billboard Alternative and Billboard Rock, and now went platinum.",box1:{header:"Hell and Silence is an EP by Las Vegas rock group",text:"Hell and Silence is an EP by Las Vegas rock group , released in March 2010 in the United States. It was recorded at Battle Born Studios. All songs were written by Imagine Dragons and self-produced. The EP was in part mixed by Grammy nominated engineer Mark Needham. To promote the album the band performed five shows at SXSW 2010 including at the BMI Official Showcase.While at SXSW they were endorsed by Blue Microphones. They also toured the western United States with Nico Vega and Saint Motel. They also performed at Bite of Las Vegas Festival 2010, New Noise Music Festival, Neon Reverb Festival, and Fork Fest."},box2:{header:"Night Visions is the debut studio album by American rock band",text:"It was released on September 4, 2012 through Interscope Records. The extended track was released on February 12, 2013, adding three more songs. Recorded between 2010 and 2012, the album was primarily produced by the band themselves, as well as English hip-hop producer Alex da Kid and Brandon Darner from the American indie rock group The Envy Corps. It was mastered by Joe LaPorta. According to frontman Dan Reynolds, the album took three years to finish of the album's tracks being previously released on multiple EPs. Musically, Night Visions exhibits influences of folk, hip hop and pop."},box3:{header:"The album was recorded during 2014 at the band's home studio in Las Vegas, Nevada",text:"Self-produced by members of the band along with English hip-hop producer Alexander Grant, known by his moniker Alex da Kid, the album was released by Interscope Records and Grant's KIDinaKORNER label on February 17, 2015, in the United States."}}},30:function(e,t,a){e.exports={button:"Button_button__1YLOd",buttonFixed:"Button_buttonFixed__bLSIw",slidingBg:"Button_slidingBg__2fP0b",text:"Button_text__31m-o",invertText:"Button_invertText__2X2up",secondary:"Button_secondary__1Y85i",secondaryFixed:"Button_secondaryFixed__3BPyD",pulse:"Button_pulse__UXE73"}},31:function(e,t,a){e.exports={article:"LatterCompositionsView_article__2NXoG",wrapper:"LatterCompositionsView_wrapper__166y1",inner:"LatterCompositionsView_inner__147HH",video:"LatterCompositionsView_video__3lU7a",description:"LatterCompositionsView_description__31z4k",noVideo:"LatterCompositionsView_noVideo__DIBtq"}},40:function(e){e.exports={sectionDescription:"\"It's Time\" was released as the lead single from Continued Silence and It's Time, both extended plays preceding Night Visions' release.",box:{header:"Sam Feldt ft. Kimberly Anne - Show Me Love (EDX's Indian Summer Remix)",text:'"Radioactive" is a song recorded by American rock band Imagine Dragons for their major-label debut EP Continued Silence and later on their debut studio album, Night Visions (2012), as the opening track. "Radioactive" was',videoId:"ZTEHNRGqcxA",href:"https://google.pl",subText:"INDIAN SAMMER",date:"03.04.2015"}}},41:function(e,t,a){e.exports={wrapper:"TimelineHeader_wrapper__1Swv9",secondaryWrapper:"TimelineHeader_secondaryWrapper__K5qOh",date:"TimelineHeader_date__3pcfy",text:"TimelineHeader_text__1-iPt"}},42:function(e,t,a){e.exports={article:"DiscographyView_article__1mp2B",wrapper:"DiscographyView_wrapper__24Qbc",track:"DiscographyView_track__17vfp"}},45:function(e,t,a){e.exports={formItem:"Input_formItem__1ASnG",formItemBar:"Input_formItemBar__2mgZB",label:"Input_label__BCyGk",input:"Input_input__1oIqh",textarea:"Input_textarea__1qA_v"}},5:function(e,t,a){e.exports={wrapper:"SideBarNavigation_wrapper__12ql6",slideInLeft:"SideBarNavigation_slideInLeft__3gb_B",inner:"SideBarNavigation_inner__2Oq8i",navItem:"SideBarNavigation_navItem__KmOvY",navItemLink:"SideBarNavigation_navItemLink__FxKlh",navItemLinkActive:"SideBarNavigation_navItemLinkActive__3MFQo"}},50:function(e,t,a){e.exports={wrapper:"SectionTitle_wrapper__rgxgz",title:"SectionTitle_title__3RJ2f",clippingMask:"SectionTitle_clippingMask__1BiVq",gradient:"SectionTitle_gradient__3yeH1"}},51:function(e,t,a){e.exports={wrapper:"Box_wrapper__iCriu",header:"Box_header__2ircl",text:"Box_text__3kSXI",additionalContent:"Box_additionalContent__21atr"}},67:function(e,t,a){e.exports={wrapper:"Header_wrapper__ivljd",fadeIn:"Header_fadeIn__3lyUC",logoWrapper:"Header_logoWrapper__m7Nm6",fadeSlideIn:"Header_fadeSlideIn__2RMes",logo:"Header_logo__3jfZX"}},68:function(e,t,a){e.exports={article:"ToursView_article__31riZ",wrapper:"ToursView_wrapper__2o3pz",track:"ToursView_track__3_B6I"}},69:function(e){e.exports={sectionDescription:'Before the release of Night Visions, Imagine Dragons made appearances on American radio and television to promote their extended play, Continued Silence and debut single It\'s Time. The band performed "It\'s Time" on the July 16, 2012 airing of NBC late-night talk show The Tonight Show with Jay Leno"',box1:{header:"2015 - present",text:'At Lollapalooza in Sao Paulo, Brazil, the last date on the Into the Night Tour, the band announced a rest, and complemented saying, "This is our last show for a while, and had no better place to end this tour".[51] The conclusion of the Into the Night Tour signaled the end of the Night Visions album cycle. Lead singer Dan Reynolds joked about the end of the Night Visions cycle, saying that "We\'re always writing on the road, [so] that second album will come, unless we die.\nnext year. Hopefully we don\'t die and there will be a second album. I don\'t know when it will be, but it may come"'}}},7:function(e,t,a){e.exports={sticky:"HeaderNavigation_sticky__Kd1Ca",burger:"HeaderNavigation_burger__3aByy",wrapper:"HeaderNavigation_wrapper__3LG6Y",navItem:"HeaderNavigation_navItem__67fZq",navItemLink:"HeaderNavigation_navItemLink__2J6S1",slideIn:"HeaderNavigation_slideIn__XmYxr",overlay:"HeaderNavigation_overlay__2mb48",fadeIn:"HeaderNavigation_fadeIn__32kXM"}},70:function(e,t,a){e.exports={wrapper:"Modal_wrapper__3gqHs",fadeSlideIn:"Modal_fadeSlideIn__1-oUH",closeButton:"Modal_closeButton__2oj7g",overlay:"Modal_overlay__1f3y9",fadeIn:"Modal_fadeIn__3ebFZ"}},81:function(e,t,a){e.exports={wrapper:"SocialBoxItem_wrapper__16_cT",text:"SocialBoxItem_text__3PLHw"}},96:function(e,t,a){e.exports=a.p+"static/media/header-bg.1c4001d3.png"},97:function(e,t,a){e.exports=a.p+"static/media/header-logo.2d644319.png"},98:function(e,t,a){e.exports={description:"SectionDescription_description__3amqC"}},99:function(e,t,a){e.exports={wrapper:"SocialBox_wrapper__2fmDZ"}}},[[130,2,1]]]);
//# sourceMappingURL=main.d266e007.chunk.js.map