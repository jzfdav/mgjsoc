Ext.define('mgjsoc.view.reports.ReportsController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.reports',
	onGenerateClick : function() {
		Ext.Msg.alert('Report Queued', 'The report has been queued for generation.');
	}
});