sap.ui.controller("dailysales.DailySalesInitialView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf dailysales.DailySalesInitialView
*/
	onInit: function() {
		this.myModel = new sap.ui.model.json.JSONModel();
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf dailysales.DailySalesInitialView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf dailysales.DailySalesInitialView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf dailysales.DailySalesInitialView
*/
//	onExit: function() {
//
//	}
	
	navigateToDailySalesView: function(view){
		var json = {};
		json.date = sap.ui.getCore().byId("date1").getValue();
//		  var vall = new sap.ui.getCore().byId("date1").getValue();
		console.log("this is the date:",json.date);
		this.myModel.setData(json);
		sap.ui.getCore().setModel(this.myModel);
		
		  var app = sap.ui.getCore().byId("myApp"); 
		  app.to("idDailySalesView2");
		
	}

});