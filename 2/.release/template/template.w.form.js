define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/button');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/LH_Team/2/template'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cEVFNRv';
	this._flag_='ff67f8ffe07d1e09cab78fca890d787d';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"content":{"define":"content","label":"content","name":"content","relation":"content","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"title":{"define":"title","label":"title","name":"title","relation":"title","type":"String"},"wDate":{"define":"wDate","label":"wDate","name":"wDate","relation":"wDate","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"data"});
}}); 
return __result;});