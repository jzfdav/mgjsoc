/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('mgjsoc.view.reports.ReportsViewModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.reports',

	data : {
		name : 'mgjsoc'
	},
	stores:{
		reportCategoryStore : {
			model : '',
			autoLoad : true,
			proxy : {
				type : 'ajax',
				api : {
					read : 'getReportCategory',
					update : 'updateReportCategory'
				},
				reader : {
					type : 'json',
					rootProperty : ''
				},
				writer : {
					type : 'json',
					rootProperty : '',
					writeAllFields : true,
					allowSingle : false
				}
			}
		}
	}

});
