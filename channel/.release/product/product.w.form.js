define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/button');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/LH_Team/channel/product'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cRnuem2';
	this._flag_='c0e58d4e4e6525eebc0a3c8eb7564986';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imgSrc":{"define":"imgSrc","label":"imgSrc","name":"imgSrc","relation":"imgSrc","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"imgSrc\":\"./img/pic1.jpg\"},{\"id\":\"2\",\"imgSrc\":\"./img/pic2.jpg\"},{\"id\":\"3\",\"imgSrc\":\"./img/pic3.jpg\"},{\"id\":\"4\",\"imgSrc\":\"./img/pic4.jpg\"},{\"id\":\"5\",\"imgSrc\":\"./img/pic5.jpg\"},{\"id\":\"6\",\"imgSrc\":\"./img/pic6.jpg\"},{\"id\":\"7\",\"imgSrc\":\"./img/pic7.jpg\"},{\"id\":\"8\",\"imgSrc\":\"./img/pic8.jpg\"},{\"id\":\"9\",\"imgSrc\":\"./img/pic9.jpg\"}]","limit":20,"xid":"data"});
}}); 
return __result;});