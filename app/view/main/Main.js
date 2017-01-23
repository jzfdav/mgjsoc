/**
 * This class is the main view for the application. It is specified in app.js as
 * the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('mgjsoc.view.main.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'mgjsoc.controller.MainController', 
	             'mgjsoc.model.MainModel' , 
	             'mgjsoc.view.standardtoolbar.StandardToolbar',
	             'mgjsoc.view.home.Home' ],

	xtype : 'mgjsoc-main',

	controller : 'main',
	plugins : 'viewport',

	viewModel : {
		type : 'main'
	},

	layout : {
		type : 'border'
	},

	items : [ {
		region : 'north',
		xtype : 'tabpanel',
		reference : 'mainTabPanel',
		title : 'Mor Gregorious Jacobite Syrian Orthodox Cathedral, Mettuguda',
		header: {
            titleAlign: 'center'
        },
		defaults: {
	        xtype: 'panel',
	        frame: true,
	        bodyPadding: 10
	    },
		items : [{
			xtype: 'home',
			title : 'MGJSOC Home',
			height : '100%',
			iconCls : 'fa fa-home fa-lg',
		},{
			title : 'Service Timings',
			iconCls : 'fa fa-clock-o fa-lg',
			html : '<p><b>All Sundays:</b> 09:00 AM to 11:00 AM</p><p><b>All Wednesdays:</b> 09:00 AM to 11:00 AM</p><p><b>All Saturdays:</b> 09:00 AM to 11:00 AM</p>'
		},{
			title : 'Events',
			iconCls : 'fa fa-calendar fa-lg',
			html : '<h4>Upcoming Events</h4>'
		},{
			title : 'Members',
			iconCls : 'fa fa-group fa-lg',
			html : '<h4>Congregation Members</h4>'
		},{
			title : 'Contact',
			iconCls : 'fa fa-address-book fa-lg',
			html : '<p><b>Address:</b><br>Mor Gregorious Jacobite Syrian Orthodox Cathedral<br/>Mettuguda, Secunderabad<br/>Telangana 500017</p>'
		},{
			title : 'About',
			iconCls : 'fa fa-info-circle fa-lg',
			html : '<p>The Mor Gregorious Jacobite Syrian Orthodox Cathedral serves the Jacobite Syrian Orthodox Malayalee congregation of Secunderabad and Hyderabad. This cathedral comes under the Mylapore diocese of the Jacobite Syrian Orthodox church.</p>'
		},{
			title : 'Forum',
			iconCls : 'fa fa-weixin fa-lg',
			
			dockedItems : [{
				xtype: 'std-tbar'
			}],
			
			items: [{
				xtype : 'toolbar',
				region : 'north',
				
				items : [ 'Welcome Joseph', '->', {
					text : 'Settings',
					iconCls : 'fa fa-cogs fa-lg',
					menu : {
						xtype : 'menu',
						plain : true,
						defaults : {
							handler : 'underConstruction',
							tooltip : {
								text : 'This screen will be available soon!'
							}
						},
						items : [ {
							text : 'My Account'
						}, {
							text : 'Messages'
						}, {
							text : 'Log Out'
						} ]
					}
				}]
			}]
		}]
	}, {
		xtype: 'panel',
		frame: false,
		region : 'south',
        title: 'Copyright - 2016 - MGJSOC',
        header: {
            titleAlign: 'center'
        }
		//html : '<h5>Copyright - 2016 - MGJSOC</h5>'
	} ]
});
