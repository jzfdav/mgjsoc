/**
 * The main application class. An instance of this class is created by app.js
 * when it calls Ext.application(). This is the ideal place to handle
 * application launch and initialization details.
 */
Ext.define('mgjsoc.Application', {
	extend : 'Ext.app.Application',

	name : 'mgjsoc',

	stores : [
		// TODO: add global / shared stores here
	],

	views : ['mgjsoc.view.login.Login', 'mgjsoc.view.main.Main'],

	launch : function () {
		//var loggedIn = localStorage.getItem("loggedIn");
		//Ext.widget(loggedIn ? 'iedb-main' : 'login');
		Ext.widget('mgjsoc-main');
	}
});
