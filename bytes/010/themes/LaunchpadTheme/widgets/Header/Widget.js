// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/LaunchpadTheme/widgets/Header/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/LaunchpadTheme/widgets/Header/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"logo jimu-float-leading" data-dojo-attach-point\x3d"logoWrapperNode"\x3e\r\n    \x3cimg data-dojo-attach-point\x3d"logoNode"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n    \x3cdiv class\x3d"jimu-title jimu-float-leading" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-subtitle jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"subtitleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cspan class\x3d"links-icon" data-dojo-attach-point\x3d"linksIconNode"\x3e\r\n    \x3cimg data-dojo-attach-point\x3d"linksIconImageNode"\x3e\r\n    \x3cdiv class\x3d"links hidden" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cspan class\x3d"dynamic-section" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/span\x3e\r\n      \x3ca class\x3d"link" href\x3d"#" data-dojo-attach-point\x3d"aboutNode" data-dojo-attach-event\x3d"onclick:_onAboutClick"\x3e${nls.about}\x3c/a\x3e\r\n    \x3c/div\x3e  \r\n  \x3c/span\x3e  \r\n\x3c/div\x3e',
"url:themes/LaunchpadTheme/widgets/Header/css/style.css":".jimu-widget-header .header-section{height: 100%; float: left;}.jimu-widget-header .container-section{height: 100%; float: left;}.jimu-widget-header .hide-logo{display: none;}.jimu-widget-header .logo {padding: 0 10px;}.jimu-widget-header .logo \x3e img {margin: 0 auto;}.jimu-widget-header .titles{height: 100%;}.jimu-widget-header .jimu-title{text-align: center; height: 100%;}.jimu-widget-header .jimu-subtitle{text-align: center; height: 100%;}.jimu-widget-header .links{position: absolute; background-color: #fff;}.jimu-widget-header .links.hidden {display: none;}.jimu-widget-header .links-icon{margin: 10px; padding: 5px; position: absolute; right: 0;}.jimu-rtl .jimu-widget-header .links-icon{right: auto; left: 0;}.jimu-widget-header .links-icon img{width: 16px;}.jimu-widget-header .links .link{height: 100%; display: block;}.jimu-rtl .jimu-widget-header .links .link{margin-left: auto;}.jimu-widget-header .signin-section .link{color: #d9dde0;}.jimu-widget-header .group-icon-node{float: right; cursor: pointer; opacity: 0.4; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header .group-icon-node:first-child{border: none;}.jimu-widget-header .group-icon-node:hover{opacity: 1;}.jimu-widget-header .group-icon-node.jimu-state-selected{background-color: #697a8c; opacity: 1; border: none; border-top: 2px solid #8491a1;}.popup-links{background-color: #252824;}.popup-links .popup-title{}.popup-links .title{color:#fff; text-align: center; font-size: 24px;}.popup-links .line{width: 100%; height: 4px; border-top: 1px solid #14161a; border-bottom: 1px solid #393c40;}.popup-links .link-section{width: 100%; height: 66px; background-color: #252824;}.popup-links a{color: #6d7685; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; display: inline-block;}.jimu-rtl .popup-links a {margin-right: 20px; margin-left: auto;}.popup-links .link-section.signin a{color: #d9dde0;}",
"*now":function(k){k(['dojo/i18n!*preload*themes/LaunchpadTheme/widgets/Header/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","hr","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/dom-class dojo/_base/window dojo/window dojo/query dojo/on dojo/Deferred jimu/BaseWidget jimu/WidgetManager jimu/LayoutManager jimu/utils dojo/NodeList-dom dojo/NodeList-manipulate".split(" "),function(k,f,p,c,m,h,q,l,n,r,s,t,u,g){return k([s],{baseClass:"jimu-widget-header jimu-main-background",name:"Header",switchableElements:{},_boxSizes:null,moveTopOnActive:!1,constructor:function(){this.height=this.getHeaderHeight()+
"px";this.widgetManager=t.getInstance();this.LayoutManager=u.getInstance()},postCreate:function(){this.inherited(arguments);this.own(n(this.widgetManager,"widget-created",f.hitch(this,function(a){"Search"===a.name&&(a=this.widgetManager.getWidgetsByName("Search")[0],c.addClass(a.domNode,"has-transition"),a&&!a.searchDijit?this._searchDijitDomReady(a).then(f.hitch(this,function(){this.resize()})):this.resize())})));var a=this.getLogoWidth()+"px";this.position&&this.position.height&&(this.height=this.position.height);
this.switchableElements.logo=l(".logo",this.domNode);this.switchableElements.title=l(".jimu-title",this.domNode);this.switchableElements.subtitle=l(".jimu-subtitle",this.domNode);this.switchableElements.logo.style({height:a});this._setElementsSize()},startup:function(){this.inherited(arguments);this.appConfig&&this.appConfig.logo?(this.logoNode.src=this.appConfig.logo,c.removeClass(this.logoWrapperNode,"hide-logo")):(this.logoNode.src="",c.addClass(this.logoWrapperNode,"hide-logo"));this.switchableElements.title.innerHTML(g.sanitizeHTML(this.appConfig.title?
this.appConfig.title:""));this.switchableElements.subtitle.innerHTML(g.sanitizeHTML(this.appConfig.subtitle?this.appConfig.subtitle:""));this._createDynamicLinks(this.appConfig.links);this.appConfig.about?c.setStyle(this.aboutNode,"display",""):c.setStyle(this.aboutNode,"display","none");this._determineLinksButtonVisibility(this.appConfig.links);this._updateBoxsizes();this.resize()},_searchDijitDomReady:function(a){var b=0,c=new r,e=setInterval(f.hitch(this,function(){5E3<b||a.searchDijit?(clearInterval(e),
c.resolve()):b+=200}),200);return c},onAppConfigChanged:function(a,b,c){switch(b){case "attributeChange":this._onAttributeChange(a,c);this._updateBoxsizes();this.resize();break;case "widgetChange":"Search"===c.name&&this.resize();break;default:return}this.appConfig=a},_onAttributeChange:function(a,b){"title"in b&&b.title!==this.appConfig.title&&this.switchableElements.title.innerHTML(g.sanitizeHTML(b.title));"subtitle"in b&&b.subtitle!==this.appConfig.subtitle&&this.switchableElements.subtitle.innerHTML(g.sanitizeHTML(b.subtitle));
"logo"in b&&b.logo!==this.appConfig.logo&&(b.logo?(c.setAttr(this.logoNode,"src",b.logo),c.removeClass(this.logoWrapperNode,"hide-logo")):(c.removeAttr(this.logoNode,"src"),c.addClass(this.logoWrapperNode,"hide-logo")));"links"in b&&(this._createDynamicLinks(b.links),this._determineLinksButtonVisibility(b.links))},_setElementsSize:function(){c.setStyle(this.logoNode,{height:"30px",marginTop:(this.getLogoWidth()-30)/2+"px"});c.setStyle(this.titleNode,{lineHeight:this.height+"px"});c.setStyle(this.subtitleNode,
{lineHeight:this.height+"px"})},_createDynamicLinks:function(a){c.empty(this.dynamicLinksNode);p.forEach(a,function(a){c.create("a",{href:a.url,target:"_blank",innerHTML:g.sanitizeHTML(a.label),"class":"link"},this.dynamicLinksNode)},this)},_determineLinksButtonVisibility:function(a){a.length||this.appConfig.about?this._showLinksIcon():this._hideLinksIcon()},_showLinksIcon:function(){c.setAttr(this.linksIconImageNode,"src",this.folderUrl+"images/link_icon.png");c.setStyle(this.linksIconNode,"display",
"block");c.addClass(h.body(),"header-has-links");var a=this.domNode.clientWidth+this.getLinksWidth();c.setStyle(this.domNode,"width",a+"px");this.linksIconClicked||(this.linksIconClicked=n(this.linksIconNode,"click",f.hitch(this,function(){this._toggleLinksMenu()})))},_hideLinksIcon:function(){c.setStyle(this.linksIconNode,"display","none");c.removeClass(h.body(),"header-has-links")},_toggleLinksMenu:function(){c.toggleClass(this.linksNode,"hidden")},_onAboutClick:function(){this.widgetManager.loadWidget({id:this.appConfig.about+
"_1",uri:this.appConfig.about,label:"About"}).then(f.hitch(this,function(a){c.place(a.domNode,jimuConfig.layoutId);a.startup()}))},_updateBoxsizes:function(){var a=c.getMarginSize(this.logoWrapperNode),b={w:0,h:0};this.switchableElements.title.innerHTML()?(b=c.getMarginSize(this.titleNode),m.add(this.subtitleNode,"jimu-leading-margin2")):m.remove(this.subtitleNode,"jimu-leading-margin2");var d={w:0,h:0};this.switchableElements.subtitle.innerHTML()&&(d=c.getMarginSize(this.subtitleNode));var e={l:0,
t:0,w:10,h:0};"none"!==this.linksIconNode.style.display&&(e=c.getMarginSize(this.linksIconNode));this._boxSizes={logoBox:a,titleBox:b,subTitleBox:d,searchWidgetBox:{l:0,t:0,w:0,h:0},LinksIconBox:e}},setPosition:function(a,b){this.position=a;var d=g.getPositionStyle(this.position);d.position="absolute";b||(b="map"===a.relativeTo?this.map.id:window.jimuConfig.layoutId);c.place(this.domNode,b);c.setStyle(this.domNode,d);this.started&&setTimeout(f.hitch(this,this.resize),200)},resize:function(){var a=
this._boxSizes;if(window.appInfo.isRunInMobile)c.addClass(h.body(),"is-mobile");else{c.removeClass(h.body(),"is-mobile");var b=q.getBox(),d=this.widgetManager.getWidgetsByName("Search")[0];d&&(a.searchWidgetBox=c.getMarginSize(d.domNode));var e=a.logoBox.w+a.titleBox.w+a.subTitleBox.w+20+a.searchWidgetBox.w+a.LinksIconBox.w;15+e+250<b.w?(this.domNode.style.width=e+"px",b=20,0===a.titleBox.w+a.subTitleBox.w&&(b=15),d&&(window.isRTL?d.domNode.style.right=a.logoBox.w+a.titleBox.w+a.subTitleBox.w+15+
b+"px":d.domNode.style.left=a.logoBox.w+a.titleBox.w+a.subTitleBox.w+15+b+"px"),this.titlesNode.style.visibility="visible",this.subtitleNode.style.visibility="visible"):(15+e-a.subTitleBox.w+250<b.w?(b=a.logoBox.w+10+a.searchWidgetBox.w+a.titleBox.w+a.LinksIconBox.w,this.domNode.style.width=b+"px",d&&(a=15+b-a.LinksIconBox.w-a.searchWidgetBox.w,window.isRTL?d.domNode.style.right=a+10+"px":d.domNode.style.left=a+10+"px"),this.titlesNode.style.visibility="visible"):(b=a.logoBox.w+10+a.searchWidgetBox.w+
a.LinksIconBox.w,this.domNode.style.width=b+"px",d&&(window.isRTL?d.domNode.style.right=15+a.logoBox.w+10+"px":d.domNode.style.left=15+a.logoBox.w+10+"px"),this.titlesNode.style.visibility="hidden"),this.subtitleNode.style.visibility="hidden")}},getHeaderHeight:function(){return 44},getLogoWidth:function(){return 50},getLinksWidth:function(){return 36},destroy:function(){this.inherited(arguments)}})});