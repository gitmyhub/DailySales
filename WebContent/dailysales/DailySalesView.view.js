sap.ui.jsview("dailysales.DailySalesView", {
	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf bankcrud.bank
	 */
	getControllerName : function() {
		return "dailysales.DailySalesView";
	},
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf bankcrud.bank
	 */
	createContent : function(oController) {
		var layout = new sap.ui.commons.layout.MatrixLayout({
			id : 'matrix4',
			layoutFixed : false,
		});
		var appHeader = new sap.ui.commons.ApplicationHeader('appItemHeader',   {
			logoText : "Daily Sales Application",
			displayLogoff : false,
			displayWelcome : true,
			userName : "Welcome"
		});
		layout.createRow(appHeader);
		var rPannel = new sap.ui.commons.Panel('rItemPannel', {
			text : "Daily Sales List",
		});
		var oTable = new sap.ui.table.DataTable({
			id : "salesTableID",
			title: "Daily Sales Application",
			width : "100%",
			visibleRowCount: 20,
			selectionMode : sap.ui.table.SelectionMode.Single,
//			setEditable : false,
			rowSelectionChange : function(oEvent) {},
//			toolbar: new sap.ui.commons.Toolbar({
//				items: [
//				        new sap.ui.commons.Button({
//				        	text: "Create",
//				        	press: function() {
//				        		oController.Create();
//				        	}
//				        }),
//				        new sap.ui.commons.Button({
//				        	text: "Update",
//				        	press: function() {
//				        		oController.Update();
//				        	}
//				        }),
//				        new sap.ui.commons.Button({
//				        	text: "Delete",
//				        	press: function() {
//				        		oController.Delete();
//				        	}
//				        }),
//				        ]
//			})
		});
			oTable.addColumn(new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : "Sales Zone"
				}),
				template : new sap.ui.commons.TextField().bindProperty("value",
				"Header"),
				sortProperty : "Header"
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : "Daily Sales"
				}),
				template : new sap.ui.commons.TextField().bindProperty("value",
				"Dsls"),
				sortProperty : "Dsls"
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : "Monthly Sales"
				}),
				template : new sap.ui.commons.TextField().bindProperty("value",
				"Msls"),
				sortProperty : "Msls"
			}));
			oTable.addColumn(new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : "Budget"
				}),
				template : new sap.ui.commons.TextField().bindProperty("value",
				"Budget"),
				sortProperty : "Budget"
			}));
			oTable.addColumn(new sap.ui.table.Column({
				//visible: false,
				label : new sap.ui.commons.Label({
					text : "Percent"
				}),
				template : new sap.ui.commons.TextField().bindProperty("value",
				"Percent"),
				sortProperty : "Percent"
			}).setVisible(false));
			oTable.addColumn(new sap.ui.table.Column({
				//visible: false,
				label : new sap.ui.commons.Label({
					text : "Totaltype"
				}),
				template : new sap.ui.commons.TextField().bindProperty("value",
				"Totaltype", function(cellValue){ 
					//var backgroundColorChanged = false;
					switch(cellValue){  
                    case 'S':  
                              backgroundColor = 'yellow';
                              backgroundColorChanged = true;
                              break;
                    case 'T':  
                        backgroundColor = 'green';
                        backgroundColorChanged = true;
                        break;                              
                    default:  
                              backgroundColor = 'white'; 
					}
					//if (backgroundColorChanged == true){
	//					backgroundColorChanged = false;
					cellId = this.getId(); 
					//$("#"+cellId).parent().parent().css("background-color",backgroundColor); 
					//}
					$("#"+cellId).closest("tr").css("background-color",backgroundColor);
			          return cellValue; 
				}),
				sortProperty : "Totaltype"
			}));
//			Add table to the Panel
			rPannel.addContent(oTable);
//			Add panel to the Layout
			layout.createRow(rPannel);
//			Display Layout
			this.addContent(layout);
			
	}
});