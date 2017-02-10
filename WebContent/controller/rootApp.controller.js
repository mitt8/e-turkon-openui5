sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/Popover',
	'sap/m/Button'
], function (jQuery, Fragment, Controller, JSONModel, Popover, Button) {
	"use strict";

	var CController = Controller.extend("sap.ui.demo.toolpageapp.controller.rootApp", {
		model: new sap.ui.model.json.JSONModel(),
		data: {
			navigation: [{
				title: 'Dashboard',
				icon: 'sap-icon://grid',
				expanded: true,
				key: 'page1',
				items: [{
					title: 'My Shipments',
					key: 'page2'
					
				},{
					title: 'Tracking',
					key: 'tracking'
				}, {
					title: 'VGM',
					key: 'cntHistory'
				}]
			}, {
				title: 'Documents',
				icon: 'sap-icon://documents',
				key: 'page2',
				items:[{
					title:'Bill of Lading'
				},{
					title: 'Arrival Notice'
				}
				
				]		
					
			}, {
				title: 'My Account',
				icon: 'sap-icon://employee',
				key: 'page3'
			}],
			fixedNavigation: [{
				title: 'Fixed Item 1',
				icon: 'sap-icon://employee'
				}, {
					title: 'Fixed Item 2',
					icon: 'sap-icon://building'
				}, {
					title: 'Fixed Item 3',
					icon: 'sap-icon://card'
			}]
//			headerItems: [
//				{
//					text: "File"
//				}, {
//					text: "Edit"
//				}, {
//					text: "View"
//				}, {
//					text: "Settings"
//				}, {
//					text: "Help"
//				}]
		},
		onInit: function() {
			console.log("testttt");
			this.model.setData(this.data);
			this.getView().setModel(this.model);
//			this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);
		},

		/**
		 * Convenience method for accessing the router.
		 * @public
		 * @returns {sap.ui.core.routing.Router} the router for this component
		 */
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onItemSelect: function(oEvent) {
			var oItem = oEvent.getParameter('item');
			var sKey = oItem.getKey();
			this.getRouter().navTo(sKey);
		},

		handleUserNamePress: function(oEvent) {
			var oPopover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						text: 'Feedback',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Help',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Logout',
						type: sap.m.ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			oPopover.openBy(oEvent.getSource());
		},

		onSideNavButtonPress: function() {
			var sViewId = this.getView().getId();
			var oToolPage = sap.ui.getCore().byId(sViewId + "--rootApp");
			var bSideExpanded = oToolPage.getSideExpanded();
			this._setToggleButtonTooltip(bSideExpanded);
			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		},

		_setToggleButtonTooltip : function(bLarge) {
			var oToggleButton = this.getView().byId('sideNavigationToggleButton');
			if (bLarge) {
				oToggleButton.setTooltip('Large Size Navigation');
			} else {
				oToggleButton.setTooltip('Small Size Navigation');
			}
		}
	});
	return CController;
});
