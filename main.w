<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data" idColumn="id">
      <column label="id" name="id" type="String" xid="xid1"/>  
      <column label="title" name="title" type="String" xid="xid2"/>  
      <column label="imgName" name="imgName" type="String" xid="xid3"/>  
      <column label="pageName" name="pageName" type="String" xid="xid4"/>  
      <data xid="default1">[{"id":"1","title":"关于我们","imgName":"menu1Pic1.png","pageName":"aboutUs"},{"id":"2","title":"美食美景","imgName":"menu1Pic2.png","pageName":"product"},{"id":"3","title":"美推荐","imgName":"menu1Pic3.png","pageName":"cases"},{"id":"4","title":"促销活动","imgName":"menu1Pic4.png","pageName":"promotion"},{"id":"5","title":"最新动态","imgName":"menu1Pic5.png","pageName":"dynamic"},{"id":"6","title":"联系我们","imgName":"menu1Pic6.png","pageName":"contactUs"}]</data>
    </div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top" height="48"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          </div>  
        <div class="x-titlebar-title  text-success"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-fork">
   <i xid="i1" class="icon-fork"></i>
   <span xid="span1"></span></a>
  <span xid="span2">家乡情</span></div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content x-bgImg"> 
      <ul component="$UI/system/components/justep/list/list" class="x-list x-list-template"
        xid="list2" data="data"> 
        <li xid="li2" class="col-xs-6 text-center">
        	<div bind-click="openPageClick"> 
            <img bind-attr-src="$model.transUrl($object)"
              class="x-img2"/>  
            <h5 class="text-white" bind-text="ref('title')"><![CDATA[关于我们]]></h5>
          </div>
        </li>
      </ul>
    </div> 
  </div> 
</div>