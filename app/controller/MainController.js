/**
 * This class is the main view for the application. It is specified in app.js as
 * the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('mgjsoc.controller.MainController', {
	extend : 'Ext.app.ViewController',

	//requires : [ 'Ext.window.MessageBox', 'mgjsoc.view.reports.Reports' ],
	requires : [ 'mgjsoc.view.reports.Reports' ],

	alias : 'controller.main',

	onButtonClick : function() {
		Ext.Msg.confirm('Log Out?', 'Do you want to log out?', 'onConfirm', this);
	},

	onConfirm : function(choice) {
		if (choice === 'yes') {
			localStorage.removeItem("loggedIn");
			this.getView().destroy();
			Ext.widget('login');
		}
	},

	underConstruction : function(btn) {
		Ext.Msg.show({
			title : 'Screen Unavailable',
			message : btn.text + ' screen is under development!',
			buttons : Ext.Msg.OK,
			icon : Ext.Msg.INFO
		});
	},

	openTab : function(btn) {
		var mainTabPanel = Ext.getCmp('mainTabPanel');
		if (Ext.getCmp('panel-' + btn.id) === undefined) {

			console.log('Opening tab id: panel-' + btn.id);

			var addIndex = mainTabPanel.items.length;
			console.log('Adding tab at index : ' + addIndex);

			// mainTabPanel.insert(addIndex, {title : btn.text,id : 'panel-' +
			// btn.id,closable : true});
			// var mgjsocReports =
			// Ext.create('mgjsoc.view.reports.Reports',{title : btn.text,id :
			// 'panel-' + btn.id,closable : true});
			// mainTabPanel.insert(addIndex,mgjsocReports);

			// console.debug('btn.id : ' + btn.id);
			mainTabPanel.insert(addIndex + 1, {
				xtype : btn.id,
				// title : btn.text, // Overrided title defined in View
				id : 'panel-' + btn.id,
				closable : true
			});
			console.log('Tab added');

			console.log('Setting tab as active');
			mainTabPanel.setActiveTab(addIndex);

		} else {
			console.log(btn.text + ' tab is already open.');
			mainTabPanel.setActiveTab(mainTabPanel.items.findIndex('id', 'panel' + btn.text.replace(/ +/g, "")));
		}
	}
});
