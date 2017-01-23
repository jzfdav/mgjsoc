Ext.define('mgjsoc.view.home.Home',{
	extend : 'Ext.panel.Panel',
	xtype : 'home',
	requires : ['Ext.container.Container','mgjsoc.view.signin.SignIn','mgjsoc.view.signup.SignUp'],
	
	title : 'MGJSOC Home',
	
	layout: {
        type: 'hbox'
    },
	
	height : '100%',
	iconCls : 'fa fa-home fa-lg',
	
	items : [{
		xtype : 'signin',
	}]
});