sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/Popover',
	'sap/m/Button'
], function (jQuery, Fragment, Controller, JSONModel, Popover, Button) {
	"use strict";
	
	var CController = Controller.extend("sap.ui.demo.toolpageapp.controller.tracking", {
		
		
	onInit: function(){
		var oModel = new JSONModel("model/mock.json");
		this.getView().setModel(oModel);
		
	},
	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
	},
	
	onCntHistoryPress: function(){
		this.getRouter().navTo("cntHistory");
		
	}
	
	
	})
}
)