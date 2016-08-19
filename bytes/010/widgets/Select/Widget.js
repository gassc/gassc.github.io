// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"jimu/dijit/FeatureSetChooserForMultipleLayers":function(){define("dojo/on dojo/sniff dojo/mouse dojo/query dojo/Evented dojo/_base/html dojo/_base/lang dojo/_base/array dojo/promise/all dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/popup dijit/TooltipDialog jimu/utils jimu/dijit/DrawBox jimu/dijit/_FeatureSetChooserCore".split(" "),function(f,b,d,h,e,g,c,k,n,q,r,s,t,p,l,m,a,v){return q([r,s,t,e],{baseClass:"jimu-multiple-layers-featureset-chooser",
templateString:'\x3cdiv class\x3d"jimu-not-selectable"\x3e\x3cdiv class\x3d"draw-item extent-icon" data-dojo-attach-point\x3d"extentIcon"\x3e\x3cdiv class\x3d"select-icon"\x3e\x3c/div\x3e\x3cdiv class\x3d"select-text"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"btn-clear" data-dojo-attach-point\x3d"btnClear"\x3e\x3cdiv class\x3d"clear-icon"\x3e\x3c/div\x3e\x3cdiv class\x3d"clear-text"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',drawBox:null,_instances:null,_tooltipDialogTimeoutId1:-1,_tooltipDialogClientX1:-1,
_tooltipDialogTimeoutId2:-1,_tooltipDialogClientX2:-1,_tooltipTimeout:1E3,map:null,updateSelection:!1,fullyWithin:!1,postMixInProperties:function(){this.inherited(arguments);this.nls=window.jimuNls.featureSetChooser},postCreate:function(){this.inherited(arguments);this._instances=[];h(".select-text",this.domNode)[0].innerHTML=window.jimuNls.featureSetChooser.select;h(".clear-text",this.domNode)[0].innerHTML=window.jimuNls.common.clear;this._initTooltipDialogs();this._initDrawBox()},_initTooltipDialogs:function(){var a=
b("mac")?"\u2318":"Ctrl",a=g.create("div",{innerHTML:'\x3cdiv class\x3d"title"\x3e'+this.nls.selectByRectangle+'\x3c/div\x3e\x3cdiv class\x3d"item"\x3e- '+this.nls.newSelectionTip+" ("+this.nls.dragMouse+')\x3c/div\x3e\x3cdiv class\x3d"item"\x3e- '+this.nls.addSelectionTip+" (Shift+"+this.nls.dragBox+')\x3c/div\x3e\x3cdiv class\x3d"item"\x3e- '+this.nls.removeSelectionTip+" ("+a+"+"+this.nls.dragBox+")\x3c/div\x3e","class":"dialog-content"});this.tooltipDialog1=new l({content:a});g.addClass(this.tooltipDialog1.domNode,
"jimu-multiple-layers-featureset-chooser-tooltipdialog");this.own(f(this.extentIcon,"mousemove",c.hitch(this,function(a){this._tooltipDialogClientX1=a.clientX})));this.own(f(this.extentIcon,d.enter,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);this._tooltipDialogTimeoutId1=-1;this._tooltipDialogTimeoutId1=setTimeout(c.hitch(this,function(){this.tooltipDialog1&&(p.open({parent:this.getParent(),popup:this.tooltipDialog1,around:this.extentIcon,position:["below"]}),0<=this._tooltipDialogClientX1&&
(this.tooltipDialog1.domNode.parentNode.style.left=this._tooltipDialogClientX1+"px"))}),this._tooltipTimeout)})));this.own(f(this.extentIcon,d.leave,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);this._tooltipDialogTimeoutId1=-1;this._hideTooltipDialog(this.tooltipDialog1)})));a=g.create("div",{innerHTML:this.nls.unselectAllSelectionTip,"class":"dialog-content"});this.tooltipDialog2=new l({content:a});g.addClass(this.tooltipDialog2.domNode,"jimu-multiple-layers-featureset-chooser-tooltipdialog");
this.own(f(this.btnClear,"mousemove",c.hitch(this,function(a){this._tooltipDialogClientX2=a.clientX})));this.own(f(this.btnClear,d.enter,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId2);this._tooltipDialogTimeoutId2=-1;this._tooltipDialogTimeoutId2=setTimeout(c.hitch(this,function(){this.tooltipDialog2&&(p.open({parent:this.getParent(),popup:this.tooltipDialog2,around:this.btnClear,position:["below"]}),0<=this._tooltipDialogClientX2&&(this.tooltipDialog2.domNode.parentNode.style.left=
this._tooltipDialogClientX2+"px"))}),this._tooltipTimeout)})));this.own(f(this.btnClear,d.leave,c.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId2);this._tooltipDialogTimeoutId2=-1;this._hideTooltipDialog(this.tooltipDialog2)})))},_initDrawBox:function(){this.drawBox=new a({map:this.map,showClear:!0,keepOneGraphic:!0,deactivateAfterDrawing:!1,geoTypes:["EXTENT"]});this.own(f(this.drawBox,"user-clear",c.hitch(this,this._onDrawBoxUserClear)));this.own(f(this.drawBox,"draw-end",c.hitch(this,
this._onDrawEnd)));this.own(f(this.drawBox,"draw-activate",c.hitch(this,function(){this.map.infoWindow.hide();g.addClass(this.extentIcon,"selected")})));this.own(f(this.drawBox,"draw-deactivate",c.hitch(this,function(){g.removeClass(this.extentIcon,"selected")})));this.own(f(this.extentIcon,"click",c.hitch(this,function(){m.simulateClickEvent(this.drawBox.extentIcon)})));this.own(f(this.btnClear,"click",c.hitch(this,function(){m.simulateClickEvent(this.drawBox.btnClear)})))},disable:function(){this.drawBox.disable();
g.addClass(this.domNode,"disabled")},enable:function(){this.drawBox.enable();g.removeClass(this.domNode,"disabled")},deactivate:function(){this.drawBox.deactivate()},setFeatureLayers:function(a){var b=k.filter(this._instances,c.hitch(this,function(b){return 0>a.indexOf(b.featureLayer)}));k.forEach(b,c.hitch(this,function(a){this._removeInstance(a)}));var m=k.map(this._instances,c.hitch(this,function(a){return a.featureLayer}));k.forEach(a,c.hitch(this,function(a){0>m.indexOf(a)&&this.addFeatureLayer(a)}))},
addFeatureLayer:function(a){"esri.layers.FeatureLayer"===a.declaredClass&&!this._findInstanceByLayer(a)&&(a=new v({map:this.map,featureLayer:a,drawBox:this.drawBox,updateSelection:this.updateSelection,fullyWithin:this.fullyWithin}),this._instances.push(a))},removeFeatureLayer:function(a){"esri.layers.FeatureLayer"===a.declaredClass&&(a=this._findInstanceByLayer(a))&&this._removeInstance(a)},_removeInstance:function(a){if(a){var b=this._instances.indexOf(a);0<=b&&(a.destroy(),this._instances.splice(b,
1))}},_findInstanceByLayer:function(a){var b=null;k.some(this._instances,c.hitch(this,function(m){return m.featureLayer===a?(b=m,!0):!1}));return b},clear:function(a){k.forEach(this._instances,c.hitch(this,function(b){b.clear(a)}))},destroy:function(){this._hideTooltipDialog(this.tooltipDialog1);this._hideTooltipDialog(this.tooltipDialog2);k.forEach(this._instances,c.hitch(this,function(a){a.destroy()}));this._instances=[];this.drawBox&&this.drawBox.destroy();this.drawBox=null;this.inherited(arguments)},
_hideTooltipDialog:function(a){a&&p.close(a)},_onDrawBoxUserClear:function(){this.clear(!0);this.emit("user-clear")},_onDrawEnd:function(){this.drawBox.clear();0<this._instances.length&&setTimeout(c.hitch(this,function(){if(0<this._instances.length){this.emit("loading");this.disable();var a=k.map(this._instances,c.hitch(this,function(a){return a.getFeatures()}));n(a).always(c.hitch(this,function(){this.enable();m.simulateClickEvent(this.drawBox.extentIcon);this.emit("unloading")}))}}),50)}})})},"jimu/dijit/_FeatureSetChooserCore":function(){define("dojo/on dojo/sniff dojo/Evented dojo/Deferred dojo/_base/lang dojo/_base/array dojo/_base/declare jimu/utils jimu/symbolUtils jimu/SelectionManager jimu/LayerInfos/LayerInfos esri/graphic esri/tasks/query esri/tasks/QueryTask esri/layers/FeatureLayer".split(" "),
function(f,b,d,h,e,g,c,k,n,q,r,s,t,p,l){return c([d],{baseClass:"jimu-featureset-chooser-core",_middleFeatureLayer:null,_isLoading:!1,_def:null,_isDestroyed:!1,_handles:null,selectionManager:null,layerInfosObj:null,map:null,featureLayer:null,drawBox:null,updateSelection:!1,fullyWithin:!1,constructor:function(b){e.mixin(this,b);this.layerInfosObj=r.getInstanceSync();this.selectionManager=q.getInstance();this.featureLayer.getSelectionSymbol()||this.selectionManager.setSelectionSymbol(this.featureLayer);
b=k.getFeatureLayerDefinition(this.featureLayer);delete b.id;this._middleFeatureLayer=new l({layerDefinition:b,featureSet:null},{id:"featureLayer_"+k.getRandomString()});b=null;var a=this._middleFeatureLayer.geometryType;"esriGeometryPoint"===a?b=n.getDefaultMarkerSymbol():"esriGeometryPolyline"===a?b=n.getDefaultLineSymbol():"esriGeometryPolygon"===a&&(b=n.getDefaultFillSymbol());this._middleFeatureLayer.setSelectionSymbol(b);b=f(this.drawBox,"user-clear",e.hitch(this,this._onDrawBoxUserClear));
a=f(this.drawBox,"draw-end",e.hitch(this,this._onDrawEnd));this._handles=[b,a]},clear:function(b){this.drawBox.clear();this._clearMiddleFeatureLayer();b&&this.selectionManager.clearSelection(this.featureLayer)},getFeatures:function(){var b=new h,a=e.hitch(this,function(){var a=this.syncGetFeatures();b.resolve(a)}),c=e.hitch(this,function(a){b.reject(a)});1===this._getDeferredStatus(this._def)?this._def.then(a,c):a();return b},syncGetFeatures:function(){return(this.updateSelection?this.featureLayer:
this._middleFeatureLayer).getSelectedFeatures()},isLoading:function(){return 1===this._getDeferredStatus(this._def)},_onLoading:function(){this.drawBox.deactivate();this.emit("loading")},_onUnloading:function(){this.emit("unloading")},_getDeferredStatus:function(b){var a=0;return a=b?b.isResolved()?2:b.isRejected()?-1:1:0},_onDrawEnd:function(c,a,v,d,f,g){console.log(a,v);if(this.isLoading())throw"should not draw when loading";if(this.featureLayer.visible){var w=new h;this._def=w;var u=l.SELECTION_NEW;
d&&(u=l.SELECTION_ADD);b("mac")?g&&(u=l.SELECTION_SUBTRACT):f&&(u=l.SELECTION_SUBTRACT);this._onLoading();this._getFeaturesByGeometry(c.geometry).then(e.hitch(this,function(a){this.selectionManager.updateSelectionByFeatures(this.updateSelection?this.featureLayer:this._middleFeatureLayer,a,u);this._onUnloading();w.resolve(a)}),e.hitch(this,function(a){console.error(a);this._onUnloading();w.reject(a)}))}},_getFeaturesByGeometry:function(b){var a=new h,c=[];if(this.featureLayer.getMap())b=this.selectionManager.getClientFeaturesByGeometry(this.featureLayer,
b,this.fullyWithin),0<b.length&&(c=g.map(b,e.hitch(this,function(a){return new s(a.toJson())}))),a.resolve(c);else{c=new t;c.geometry=b;c.outSpatialReference=this.map.spatialReference;c.returnGeometry=!0;(b=this.featureLayer.getDefinitionExpression())||(b="1\x3d1");var d=this.layerInfosObj.getLayerInfoById(this.featureLayer.id);d&&(d=d.getFilter())&&(b="("+b+") AND ("+d+")");b&&(c.where=b);c.outFields=["*"];(new p(this.featureLayer.url)).execute(c).then(e.hitch(this,function(b){a.resolve(b.features)}),
e.hitch(this,function(b){a.reject(b)}))}return a},_onDrawBoxUserClear:function(){this.clear()},_clearMiddleFeatureLayer:function(){this._middleFeatureLayer&&(this._middleFeatureLayer.clear(),this.selectionManager.clearSelection(this._middleFeatureLayer))},destroy:function(){this._isDestroyed||(g.forEach(this._handles,e.hitch(this,function(b){b.remove()})),this._handles=null,this.clear());this._isDestroyed=!0}})})},"widgets/Select/layerUtil":function(){define(["dojo/_base/array","dojo/promise/all",
"dojo/Deferred"],function(f,b,d){return{getLayerInfoArray:function(h){var e=new d,g=[];h.traversal(function(b){g.push(b)});h=f.map(g,function(b){return b.getLayerType()});b(h).then(function(b){var d=[];f.forEach(b,function(b,c){"FeatureLayer"===b&&d.push(g[c])});e.resolve(d)});return e}}})},"widgets/Select/SelectableLayerItem":function(){define("dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/_base/array dojo/_base/event dojo/on dojo/Evented dojo/dom-geometry jimu/FeatureActionManager jimu/utils jimu/dijit/PopupMenu dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SelectableLayerItem.html ./ClearSelectionAction".split(" "),
function(f,b,d,h,e,g,c,k,n,q,r,s,t,p,l,m){return f([s,t,p,c],{baseClass:"selectable-layer-item",templateString:l,layerName:"layer",layerVisible:!0,checked:!1,allowExport:!1,inited:!1,postCreate:function(){this.inherited(arguments);this.popupMenu=r.getInstance();this.layerInfo.getLayerObject().then(d.hitch(this,function(a){a&&this._init(a)}))},_init:function(a){if(this.featureLayer=a)a=this.featureLayer.getSelectedFeatures().length,this.layerName=this.layerInfo.title||"layer",this.selectedCountNode.innerHTML=
a,0<a?b.removeClass(this.domNode,"no-action"):b.addClass(this.domNode,"no-action"),this.own(g(this.featureLayer,"selection-complete",d.hitch(this,function(){var a=this.featureLayer.getSelectedFeatures().length;this.selectedCountNode.innerHTML=a;0===a?b.addClass(this.domNode,"no-action"):b.removeClass(this.domNode,"no-action")}))),this.own(g(this.featureLayer,"selection-clear",d.hitch(this,function(){this.selectedCountNode.innerHTML=0;b.addClass(this.domNode,"no-action")}))),this.layerNameNode.innerHTML=
this.layerName,this.layerNameNode.title=this.layerName,this.layerVisible||b.addClass(this.domNode,"invisible"),this.checked?b.addClass(this.selectableCheckBox,"checked"):b.removeClass(this.selectableCheckBox,"checked"),this.own(g(this.selectableCheckBox,"click",d.hitch(this,this._toggleChecked))),this.own(g(this.layerContent,"click",d.hitch(this,this._toggleContent))),this.own(g(this.actionBtn,"click",d.hitch(this,this._showActions))),this.inited=!0,this.emit("inited")},isLayerVisible:function(){return this.layerVisible},
isChecked:function(){return this.checked},updateLayerVisibility:function(){var a=this.layerInfo.isShowInMap()&&this.layerInfo.isInScale();a!==this.layerVisible&&((this.layerVisible=a)?b.removeClass(this.domNode,"invisible"):b.addClass(this.domNode,"invisible"),this.emit("stateChange",{visible:this.layerVisible,layerInfo:this.layerInfo}))},_toggleChecked:function(a){e.stop(a);b.toggleClass(this.selectableCheckBox,"checked");this.checked=b.hasClass(this.selectableCheckBox,"checked");this.emit("stateChange",
{checked:this.checked,layerInfo:this.layerInfo})},_toggleContent:function(a){e.stop(a);b.hasClass(this.domNode,"no-action")||this.emit("switchToDetails",this)},_createActions:function(){var a=n.getInstance(),b=this.featureLayer.getSelectedFeatures(),c=q.toFeatureSet(b);return a.getSupportedActions(c).then(d.hitch(this,function(a){h.forEach(a,function(a){a.data=c},this);0<b.length&&a.push(new m({folderUrl:this.folderUrl,data:this.featureLayer}));this.allowExport||(a=h.filter(a,function(a){return 0!==
a.name.indexOf("Export")}));this.popupMenu.setActions(a)}))},_showActions:function(a){e.stop(a);b.hasClass(this.domNode,"no-action")||this._createActions().then(d.hitch(this,function(){var b=k.position(a.target);this.popupMenu.show(b,this.nls.actionsTitle)}))}})})},"widgets/Select/ClearSelectionAction":function(){define(["dojo/_base/declare","jimu/BaseFeatureAction","jimu/SelectionManager"],function(f,b,d){return f(b,{name:"ClearSelection",iconClass:"icon-clear-selection",constructor:function(){this.label=
window.jimuNls.featureActions.ClearSelection},isFeatureSupported:function(b){return 0<b.features.length&&b.geometryType},onExecute:function(b){d.getInstance().clearSelection(b)},getIcon:function(b){return this.folderUrl+"images/"+this.name+"_"+b+"."+this.iconFormat}})})},"widgets/Select/FeatureItem":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/event dojo/on dojo/dom-geometry dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./FeatureItem.html jimu/FeatureActionManager jimu/utils jimu/symbolUtils jimu/dijit/PopupMenu jimu/featureActions/PanTo jimu/featureActions/ShowPopup".split(" "),
function(f,b,d,h,e,g,c,k,n,q,r,s,t,p,l,m){return f([k,n],{baseClass:"graphic-item",templateString:q,allowExport:!1,postCreate:function(){this.inherited(arguments);var a;this.featureLayer&&this.featureLayer.renderer&&this.featureLayer.renderer.getSymbol?a=this.featureLayer.renderer.getSymbol(this.graphic):this.graphic.symbol&&(a=this.graphic.symbol);a&&(a=t.createSymbolNode(a,{width:36,height:36}),h.place(a,this.iconNode));this.popupMenu=p.getInstance();this.nameNode.innerHTML=this.graphic.attributes[this.displayField]||
this.graphic.attributes[this.objectIdField];this.nameNode.title=this.graphic.attributes[this.displayField]||this.graphic.attributes[this.objectIdField];this.own(g(this.actionBtn,"click",b.hitch(this,this._showActions)));this.own(g(this.iconNode,"click",b.hitch(this,this._highlight)));this.own(g(this.nameNode,"click",b.hitch(this,this._highlight)))},_highlight:function(){var a=s.toFeatureSet([this.graphic]),b=new l({map:this.map});(new m({map:this.map})).onExecute(a);b.onExecute(a)},_showActions:function(a){e.stop(a);
this._createActions().then(b.hitch(this,function(){var b=c.position(a.target);this.popupMenu.show(b)}))},_createActions:function(){var a=r.getInstance(),c=s.toFeatureSet([this.graphic]);return a.getSupportedActions(c).then(b.hitch(this,function(a){d.forEach(a,function(a){a.data=c});this.allowExport||(a=d.filter(a,function(a){return 0!==a.name.indexOf("Export")}));this.popupMenu.setActions(a)}))}})})},"widgets/Select/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css",
"dojo/i18n!./nls/strings"],function(){})},"url:widgets/Select/SelectableLayerItem.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-row" data-dojo-attach-point\x3d"layerContent"\x3e\r\n    \x3cdiv class\x3d"selectable-check" title\x3d"${nls.toggleSelectability}"\r\n         data-dojo-attach-point\x3d"selectableCheckBox"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-name" data-dojo-attach-point\x3d"layerNameNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"selected-num" data-dojo-attach-point\x3d"selectedCountNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"popup-menu-button" title\x3d"${nls.showActions}"\r\n    data-dojo-attach-point\x3d"actionBtn"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Select/FeatureItem.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"feature-item-row"\x3e\r\n    \x3cdiv class\x3d"feature-icon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"light-label label-node" data-dojo-attach-point\x3d"nameNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"action-btn popup-menu-button" title\x3d"${nls.showActions}"\r\n     data-dojo-attach-point\x3d"actionBtn"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',"url:widgets/Select/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-node" data-dojo-attach-point\x3d"layerListNode"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cdiv class\x3d"select-dijit-container" data-dojo-attach-point\x3d"selectDijitNode"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"seperator"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-nodes" \x3e\r\n      \x3cdiv class\x3d"layer-items" data-dojo-attach-point\x3d"layerItemsNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"details-node" data-dojo-attach-point\x3d"detailsNode"\x3e\r\n    \x3cdiv class\x3d"header"\x3e\r\n      \x3cdiv class\x3d"switch-back jimu-float-leading" data-dojo-attach-point\x3d"switchBackBtn"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"layer-name" data-dojo-attach-point\x3d"selectedLayerName"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"content" data-dojo-attach-point\x3d"featureContent"\x3e\r\n\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Select/css/style.css":'.jimu-widget-select {width: 100%; height: 100%; overflow: hidden;}.jimu-widget-select .jimu-viewstack {height: 100%;}.jimu-widget-select .jimu-viewstack .view {position: relative;}.jimu-widget-select .seperator {width: 100%; height: 1px; background: #D7D7D7; margin: 20px 0;}.jimu-widget-select .title {font-family: "Avenir-Light"; font-size: 12px; line-height: 16px; color: #000000; margin: 20px 0;}.jimu-widget-select .normal-label, .jimu-widget-select .light-label, .jimu-widget-select .selectable-layer-item .layer-row .layer-name, .jimu-widget-select .selectable-layer-item .layer-row .selected-num, .jimu-widget-select .medium-label {line-height: 36px; height: 36px; font-size: 12px; color: #000000;}.jimu-widget-select .trim, .jimu-widget-select .selectable-layer-item .layer-row .layer-name, .jimu-widget-select .details-node .content .graphic-item .feature-item-row .label-node {text-overflow: ellipsis; overflow: hidden; white-space: nowrap;}.jimu-widget-select .light-label, .jimu-widget-select .selectable-layer-item .layer-row .layer-name, .jimu-widget-select .selectable-layer-item .layer-row .selected-num {font-family: "Avenir-Light";}.jimu-widget-select .medium-label {font-family: "Avenir-Medium";}.jimu-widget-select .layer-nodes {position: absolute; top: 65px; bottom: 0; width: 100%; overflow: auto;}.jimu-widget-select .jimu-multiple-layers-featureset-chooser .draw-item {padding: 0; width: 60%;}.jimu-widget-select .jimu-multiple-layers-featureset-chooser .btn-clear {padding: 0; width: 30%; float: right;}.jimu-rtl .jimu-widget-select .jimu-multiple-layers-featureset-chooser .btn-clear {float: left;}.jimu-widget-select .selectable-layer-item {width: 100%; height: 36px; position: relative;}.jimu-widget-select .selectable-layer-item .layer-row {height: 36px; position: relative; cursor: pointer;}.jimu-widget-select .selectable-layer-item .layer-row \x3e div {display: inline-block;}.jimu-widget-select .selectable-layer-item .layer-row .selectable-check {width: 36px; height: 36px; cursor: pointer; background: url(images/unchecked.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item .layer-row .selectable-check:hover {background: url(images/unchecked_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item .layer-row .selectable-check.checked {background: url(images/checked.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item .layer-row .selectable-check.checked:hover {background: url(images/checked_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item .layer-row .layer-name {margin: 0 5px; position: absolute; left: 36px; right: 72px;}.jimu-rtl .jimu-widget-select .selectable-layer-item .layer-row .layer-name {left: 72px; right: 36px;}.jimu-widget-select .selectable-layer-item .layer-row .selected-num {width: 36px; margin: 0 5px; text-align: center; position: absolute; right: 36px;}.jimu-rtl .jimu-widget-select .selectable-layer-item .layer-row .selected-num {right: auto; left: 36px;}.jimu-widget-select .selectable-layer-item .layer-row .popup-menu-button {position: absolute; right: 0;}.jimu-rtl .jimu-widget-select .selectable-layer-item .layer-row .popup-menu-button {right: auto; left: 0;}.jimu-widget-select .selectable-layer-item:hover {background-color: #E5E5E5;}.jimu-widget-select .selectable-layer-item:hover .selected-num {font-weight: bold;}.jimu-widget-select .selectable-layer-item.no-action .selected-num {font-weight: normal;}.jimu-widget-select .selectable-layer-item.no-action:hover {background-color: #FFFFFF;}.jimu-widget-select .selectable-layer-item.no-action .layer-row {cursor: default;}.jimu-widget-select .selectable-layer-item.no-action .selected-num {color: #B7B7B7;}.jimu-widget-select .selectable-layer-item.no-action .selected-num:hover {font-weight: normal;}.jimu-widget-select .selectable-layer-item.no-action .popup-menu-button {background: url(images/more_disabled.svg) no-repeat center; cursor: default; background-color: #FFFFFF;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check {background: url(images/unchecked_invisible.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check:hover {background: url(images/unchecked_invisible_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check.checked {background: url(images/checked_invisible.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check.checked:hover {background: url(images/checked_invisible_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .layer-name {color: #B7B7B7;}.jimu-widget-select .details-node {widows: 100%;}.jimu-widget-select .details-node .header {height: 40px; text-align: center;}.jimu-widget-select .details-node .header .switch-back {width: 40px; height: 40px; background: url(images/arrow-back_normal.svg) no-repeat center; cursor: pointer;}.jimu-widget-select .details-node .header .switch-back:hover {background: url(images/arrow-back_hover.svg) no-repeat center;}.jimu-rtl .jimu-widget-select .details-node .header .switch-back {background: url(images/arrow-forward_normal.svg) no-repeat center;}.jimu-rtl .jimu-widget-select .details-node .header .switch-back:hover {background: url(images/arrow-forward_hover.svg) no-repeat center;}.jimu-widget-select .details-node .header .layer-name {font-family: "Avenir-Medium"; font-size: 14px; font-size: 14px; color: #000000; height: 40px; line-height: 40px;}.jimu-widget-select .details-node .content {position: absolute; top: 40px; bottom: 0; width: 100%; overflow: auto;}.jimu-widget-select .details-node .content .graphic-item {height: 36px; width: 100%; position: relative;}.jimu-widget-select .details-node .content .graphic-item:hover {background: #E5E5E5;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row {position: relative; height: 36px; cursor: pointer;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row .feature-icon {position: absolute; left: 0; width: 36px; height: 36px;}.jimu-rtl .jimu-widget-select .details-node .content .graphic-item .feature-item-row .feature-icon {left: auto; right: 0;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row .action-btn {position: absolute; right: 0;}.jimu-rtl .jimu-widget-select .details-node .content .graphic-item .feature-item-row .action-btn {right: auto; left: 0;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row .label-node {position: absolute; left: 36px; right: 36px; margin: 0 10px;}',
"*now":function(f){f(['dojo/i18n!*preload*widgets/Select/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","hr","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/promise/all dojo/Deferred dijit/_WidgetsInTemplateMixin esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/symbols/jsonUtils esri/Color jimu/BaseWidget jimu/dijit/ViewStack jimu/dijit/FeatureSetChooserForMultipleLayers jimu/LayerInfos/LayerInfos jimu/SelectionManager ./layerUtil ./SelectableLayerItem ./FeatureItem".split(" "),function(f,b,d,h,e,g,c,k,n,q,r,s,t,p,l,
m,a,v,x,y,z){return f([p,k],{baseClass:"jimu-widget-select",postMixInProperties:function(){this.inherited(arguments);b.mixin(this.nls,window.jimuNls.common)},postCreate:function(){this.inherited(arguments);var c=new t(this.config.selectionColor);this.defaultPointSymbol=new n(n.STYLE_CIRCLE,16,null,c);this.defaultLineSymbol=new q(q.STYLE_SOLID,c,2);this.defaultFillSymbol=new r(r.STYLE_SOLID,this.defaultLineSymbol,new t([c.r,c.g,c.b,0.3]));this.layerMapper={};this.layerInfoArray=[];this.layerItems=
[];this.selectDijit=new m({map:this.map,updateSelection:!0,fullyWithin:"wholly"===this.config.selectionMode});d.place(this.selectDijit.domNode,this.selectDijitNode);this.selectDijit.startup();this.own(e(this.selectDijit,"user-clear",b.hitch(this,this._clearAllSelections)));this.own(e(this.selectDijit,"loading",b.hitch(this,function(){this.shelter.show()})));this.own(e(this.selectDijit,"unloading",b.hitch(this,function(){this.shelter.hide()})));this.viewStack=new l({viewType:"dom",views:[this.layerListNode,
this.detailsNode]});d.place(this.viewStack.domNode,this.domNode);this.own(e(this.switchBackBtn,"click",b.hitch(this,this._switchToLayerList)));this._switchToLayerList();this.shelter.show();var u=a.getInstanceSync();x.getLayerInfoArray(u).then(b.hitch(this,function(a){this._initLayers(a)}));this.own(e(u,"layerInfosChanged",b.hitch(this,function(){this.shelter.show();x.getLayerInfoArray(u).then(b.hitch(this,function(a){this._initLayers(a)}))})));this.own(e(u,"layerInfosIsShowInMapChanged",b.hitch(this,
this._layerVisibilityChanged)));this.own(e(this.map,"zoom-end",b.hitch(this,this._layerVisibilityChanged)))},onDeActive:function(){this.selectDijit.deactivate();this._restoreSelectionSymbol()},onActive:function(){this._setSelectionSymbol()},onDestroy:function(){this._clearAllSelections()},_initLayers:function(a){this.layerInfoArray=a;this.layerItems=[];this.selectionSymbols={};d.empty(this.layerItemsNode);h.forEach(a,b.hitch(this,function(a){var c=a.isShowInMap()&&a.isInScale();a=new y({layerInfo:a,
checked:c,layerVisible:c,folderUrl:this.folderUrl,allowExport:this.config?this.config.allowExport:!1,map:this.map,nls:this.nls});this.own(e(a,"switchToDetails",b.hitch(this,this._switchToDetails)));this.own(e(a,"stateChange",b.hitch(this,function(){this.shelter.show();this._getSelectableLayers().then(b.hitch(this,function(a){this.selectDijit.setFeatureLayers(a);this.shelter.hide()}))})));d.place(a.domNode,this.layerItemsNode);a.startup();this.layerItems.push(a)}));this._getSelectableLayers().then(b.hitch(this,
function(a){this.selectDijit.setFeatureLayers(a);this.shelter.hide()}));this._getLayerObjects().then(b.hitch(this,function(a){h.forEach(a,function(a){a.getSelectionSymbol()||this._setDefaultSymbol(a);var b=a.getSelectionSymbol();this.selectionSymbols[a.id]=b.toJson()},this);this._setSelectionSymbol()}))},_setSelectionSymbol:function(){this._getLayerObjects().then(b.hitch(this,function(a){h.forEach(a,function(a){this._setDefaultSymbol(a)},this)}))},_setDefaultSymbol:function(a){"esriGeometryPoint"===
a.geometryType||"esriGeometryMultipoint"===a.geometryType?a.setSelectionSymbol(this.defaultPointSymbol):"esriGeometryPolyline"===a.geometryType?a.setSelectionSymbol(this.defaultLineSymbol):"esriGeometryPolygon"===a.geometryType?a.setSelectionSymbol(this.defaultFillSymbol):console.warn("unknown geometryType: "+a.geometryType)},_restoreSelectionSymbol:function(){this._getLayerObjects().then(b.hitch(this,function(a){h.forEach(a,function(a){var b=this.selectionSymbols[a.id];b&&a.setSelectionSymbol(s.fromJson(b))},
this)}))},_layerVisibilityChanged:function(){h.forEach(this.layerItems,function(a){a.updateLayerVisibility()},this)},_getSelectableLayers:function(){var a=new c,b=[];h.forEach(this.layerItems,function(a){a.isLayerVisible()&&a.isChecked()&&b.push(a.layerInfo)},this);this._getLayerObjects(b).then(function(b){a.resolve(b)});return a},_clearAllSelections:function(){var a=v.getInstance();this._getLayerObjects().then(function(b){h.forEach(b,function(b){a.clearSelection(b)})})},_getLayerObjects:function(a){var b=
new c;a||(a=this.layerInfoArray);a=h.map(a,function(a){return a.getLayerObject()});g(a).then(function(a){b.resolve(a)});return b},_switchToDetails:function(a){d.empty(this.featureContent);this.viewStack.switchView(1);this.selectedLayerName.innerHTML=a.layerName;a.layerInfo.getLayerObject().then(b.hitch(this,function(a){var c=a.getSelectedFeatures();0<c.length&&h.forEach(c,b.hitch(this,function(b){b=new z({graphic:b,map:this.map,featureLayer:a,displayField:a.displayField,objectIdField:a.objectIdField,
allowExport:this.config?this.config.allowExport:!1,nls:this.nls});d.place(b.domNode,this.featureContent);b.startup()}))}))},_switchToLayerList:function(){this.viewStack.switchView(0)}})});