sap.ui.define([
               "sap/ui/core/UIComponent",
               "sap/ui/model/json/JSONModel",
               "sap/ui/Device"
],function(UIComponent, JSONModel, Device){
	"use strict";
	
	return UIComponent.extend("com.tutorial.Component",{
		
		metadata: {
			manifest: "json"
		},
		init:function(){
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
			var oModel=new JSONModel();
			var oModel1=new JSONModel();
			
		}
	});
});