// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/_base/array","esri/geometry/Extent"],function(g,f,h){return{checkIfFieldAliasAlreadyExists:function(a,b){return 0<=a.split(",").indexOf(b)},pointToExtent:function(a,b,c){var d=a.extent.getWidth()/a.width;c*=d;return new h(b.x-c,b.y-c,b.x+c,b.y+c,a.spatialReference)},filterOnlyUpdatedAttributes:function(a,b,c){var d={},e;for(e in a)if(a.hasOwnProperty(e)&&(a[e]!==b[e]||e===c.objectIdField||e===c.globalIdField))d[e]=a[e];return d},getFieldInfosFromWebmap:function(a,b){var c=
null,d=b.getLayerInfoByTopLayerId(a.id);d&&(d=d.getPopupInfo())&&d.fieldInfos&&(c=g.clone(d.fieldInfos));f.forEach(c,function(c){var b=f.filter(a.fields,function(a){if(a.name===c.fieldName)return!0});b&&0<b.length&&(c.nullable=b[0].nullable)});return c},isObjectEmpty:function(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}}});