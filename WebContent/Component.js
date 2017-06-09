// space for this custom componenet controller
jQuery.sap.declare("brother.reports.Component");

sap.ui.core.UIComponent.extend("brother.reports.Component", {
	//defining root view
	createContent : function(){
		
		var app = new sap.m.App("myApp",{initialPage:"idDailySalesView1"});
		var page1 = sap.ui.view({id:"idDailySalesView1", viewName:"dailysales.DailySalesInitialView", type:sap.ui.core.mvc.ViewType.JS});
		var page2 = sap.ui.view({id:"idDailySalesView2", viewName:"dailysales.DailySalesView", type:sap.ui.core.mvc.ViewType.JS});
		app.addPage(page1).addPage(page2);
	
	/*	return sap.ui.view({
			id : "app",
			viewName : "smax.empinfo7.view.App",
			type : sap.ui.core.mvc.ViewType.XML
				
		}); */

	} 
	
});