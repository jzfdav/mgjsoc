Ext.define('mgjsoc.view.login.LoginController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.login',
	onLoginClick : function() {
		localStorage.setItem("loggedIn", true);
		this.getView().destroy();
		Ext.widget('mgjsoc-main');
	}
});