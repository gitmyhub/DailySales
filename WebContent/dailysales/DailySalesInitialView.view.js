sap.ui.jsview("dailysales.DailySalesInitialView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf dailysales.DailySalesInitialView
	*/ 
	getControllerName : function() {
		return "dailysales.DailySalesInitialView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf dailysales.DailySalesInitialView
	*/ 
	createContent : function(oController) {
		
		var layout = new sap.ui.commons.layout.MatrixLayout({
			id : 'matrix1',
			layoutFixed : true,
			width : '100%'
		});
		
		var innerLayout = new sap.ui.commons.layout.MatrixLayout({
			id : 'matrix2',
			layoutFixed : false,
		});		
		
		var appHeader = new sap.ui.commons.ApplicationHeader('appHeader',   {
			logoText : "Daily Sales Application",
			displayLogoff : false,
			displayWelcome : false,
			userName : "Welcome"
		});
		
		layout.createRow(appHeader);
		
		var rPannel = new sap.ui.commons.Panel('rHeaderPannel', {
			text : "Daily Sales List",
		});		
		
		var oLabel = new sap.ui.commons.Label({ id : "Label1", text:"Date", labelFor:"Date"});
		var oDatePicker = new sap.ui.commons.DatePicker('date1');
		oDatePicker.setYyyymmdd("20141229");
		oDatePicker.setLocale("en-US"); // Try with "de" or "fr" instead!
		oDatePicker.attachChange(
				function(oEvent){
					if(oEvent.getParameter("invalidValue")){
						oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
					}else{
						oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
					}
				}
		);
		 var oButton = new sap.ui.commons.Button({
			  text : "Submit",
			  enable: true,
			  press : function() {
				  oController.navigateToDailySalesView("DailySalesView");			  
			  }
			  });
		innerLayout.createRow(oLabel, oDatePicker);
		innerLayout.createRow(null, oButton);		
//		innerLayout.insertRow(oButton , 1);
		//rPannel.addContent(oLabel);
		//rPannel.addContent(oDatePicker);
		rPannel.addContent(innerLayout);
		layout.createRow(rPannel);
		this.addContent(layout);


	}

});