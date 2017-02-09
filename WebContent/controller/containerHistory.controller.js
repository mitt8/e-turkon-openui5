sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	"sap/ui/core/routing/History",
	'sap/ui/model/json/JSONModel',
	'sap/m/Popover',
	'sap/m/Button'
], function (jQuery, Fragment, Controller, JSONModel, Popover, Button, History) {
	"use strict";
	
	var CController = Controller.extend("sap.ui.demo.toolpageapp.controller.containerHistory",{
		model: new sap.ui.model.json.JSONModel(),
		data:{
	
		},
		
		onInit: function(){
			this.model.setDate(this.data);
			this.getView().setModel(this.model);
		},
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		
		
		onNavBack: function(){
			var oItem = oEvent.getParameter('item');
			var sKey = oItem.getKey();
			this.getRouter().navTo("cntHistory");
			
		}
		
	
		
	});
	return CController;
});