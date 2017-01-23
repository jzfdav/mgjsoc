Ext.define('mgjsoc.view.reports.Reports', {
	extend : 'Ext.panel.Panel',
	requires : [ 'mgjsoc.view.reports.ReportsController', 'Ext.form.Panel' ],
	xtype : 'mgjsoc-reports',
	controller : 'reports',
	layout : { // Layout for main panel
		type : 'hbox' // accordion
	},
	// viewModel : {type : 'reports'},
	border : 1,
	style : {
		borderStyle : 'solid',
		borderWidth : '1px'
	},
	title : 'Reporting and Scheduling',
	items : [ {
		xtype : 'form',
		title : 'Request Report',
		layout : {
			type : 'hbox' // Overrides form layout
		},
		// headerPosition : 'left',
		// width : 300,
		// width : '100%',
		// flex : 1,
		collapsible : true,
		border : 1,
		style : {
			borderStyle : 'solid',
			borderWidth : '1px'
		},
		items : [ {
			xtype : 'container',
			padding : '5 5 0 5',
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [ {
				name : 'group',
				xtype : 'combo',
				fieldLabel : 'Select Category',
				displayField : 'reportCategory',
				valueField : 'reportCategory',
				allowBlank : false,
				store : {
					storeId : 'reportCategoryStore',
					autoLoad : true,
					fields : [ 'reportCategory' ],
					proxy : {
						type : 'ajax',
						url : 'getReportCategory',
						reader : {
							rootProperty : 'repCatList',
							type : 'json'
						}
					}
				}
			// ,store : 'reportCategoryStore'
			// labelWidth : 60
			// store : groups,
			// queryMode : 'local',
			// displayField : 'name',
			// valueField : 'abbr'
			}, {
				name : 'report',
				xtype : 'combo',
				fieldLabel : 'Select Report',
				allowBlank : false,
				displayField : 'reportNames',
				valueField : 'reportNames',
				store : {
					storeId : 'reportNameStore',
					autoLoad : true,
					fields : [ 'reportNames' ],
					proxy : {
						type : 'ajax',
						url : 'getReportCategory',
						reader : {
							rootProperty : 'repCatList',
							type : 'json'
						}
					}
				}
			// labelWidth : 60
			// store : reports,
			// queryMode : 'local',
			// displayField : 'name',
			// valueField : 'abbr'
			} ]
		}, {
			xtype : 'container',
			padding : '5 5 0 5',
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [ {
				xtype : 'checkboxfield',
				boxLabel : 'Generate Offline',
				tooltip : 'Generate the report offline and send to your mail',
				name : 'chkGenOff',
				inputValue : '1',
				id : 'chkGenOff'
			// ,formBind : true
			}, {
				fieldLabel : 'CC-Emails',
				xtype : 'textfield',
				name : 'email',
				vtype : 'email'
			} ]
		} ],
		buttons : [ {
			text : 'Generate',
			formBind : true,
			docked : 'left',
			listeners : {
				click : 'onGenerateClick'
			}
		} ]
	}, {
		xtype : 'form',
		title : 'Schedule Report',
		layout : {
			type : 'hbox' // Overrides form layout
		},
		// headerPosition : 'left',
		// width : 300,
		// width : '100%',
		// flex : 2,
		collapsible : true,
		collapsed : false, // Setting this to true causes width to be set to
		// the length of the title of this panel
		border : 1,
		style : {
			borderStyle : 'solid',
			borderWidth : '1px'
		},
		items : [ {
			xtype : 'container',
			padding : '5 5 0 5',
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [ {
				name : 'group',
				xtype : 'combo',
				fieldLabel : 'Select Category',
				allowBlank : false,
				displayField : 'reportCategory',
				valueField : 'reportCategory',
				store : {
					storeId : 'reportCategoryStore1',
					autoLoad : true,
					fields : [ 'reportCategory' ],
					proxy : {
						type : 'ajax',
						url : 'getReportCategory',
						reader : {
							rootProperty : 'repCatList',
							type : 'json'
						}
					}
				}
			// labelWidth : 60
			// store : groups,
			// queryMode : 'local',
			// displayField : 'name',
			// valueField : 'abbr'
			}, {
				name : 'report',
				xtype : 'combo',
				fieldLabel : 'Select Report',
				allowBlank : false,
				displayField : 'reportNames',
				valueField : 'reportNames',
				store : {
					storeId : 'reportNameStore1',
					autoLoad : true,
					fields : [ 'reportNames' ],
					proxy : {
						type : 'ajax',
						url : 'getReportCategory',
						reader : {
							rootProperty : 'repCatList',
							type : 'json'
						}
					}
				}
			// labelWidth : 60
			// store : reports,
			// queryMode : 'local',
			// displayField : 'name',
			// valueField : 'abbr'
			} ]
		}, {
			xtype : 'container',
			padding : '5 5 0 5',
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [ {
				name : 'requestedTime',
				xtype : 'timefield',
				fieldLabel : 'Requested Time',
				allowBlank : false,
				minValue : '12:00am',
				maxValue : '11:59pm'
			// labelWidth : 60
			// store : groups,
			// queryMode : 'local',
			// displayField : 'name',
			// valueField : 'abbr'
			}, {
				name : 'reportFrequency',
				xtype : 'combo',
				fieldLabel : 'Frequency',
				allowBlank : false,
				store : Ext.create('Ext.data.Store', {
					fields : [ 'frequency' ],
					data : [ {
						"frequency" : "Once"
					}, {
						"frequency" : "Daily"
					}, {
						"frequency" : "Weekly"
					}, {
						"frequency" : "Monthly"
					} ]
				}),
				queryMode : 'local',
				displayField : 'frequency',
				valueField : 'frequency'
			// labelWidth : 60
			// store : reports,
			// queryMode : 'local',
			// displayField : 'name',
			// valueField : 'abbr'
			} ]
		}, {
			xtype : 'container',
			padding : '5 5 0 5',
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [ {
				name : 'requestedDate',
				xtype : 'datefield',
				fieldLabel : 'Requested Date',
				allowBlank : false
			// labelWidth : 60
			// store : reports,
			// queryMode : 'local',
			// displayField : 'name',
			// valueField : 'abbr'
			}, {
				name : 'endDate',
				xtype : 'datefield',
				fieldLabel : 'End Date',
				allowBlank : false
			// labelWidth : 60
			// store : reports,
			// queryMode : 'local',
			// displayField : 'name',
			// valueField : 'abbr'
			} ]
		} ],
		buttons : [ {
			text : 'Schedule',
			formBind : true,
			listeners : {
				click : 'onScheduleClick' // TODO
			}
		}, {
			text : 'View Scheduled Reports',
			formBind : false,
			listeners : {
				click : 'onScheduleClick' // TODO
			}
		} ]
	} ]
});
var reportFrequency = Ext.create('Ext.data.Store', {
	fields : [ 'frequency' ],
	data : [ {
		"frequency" : "Daily"
	}, {
		"frequency" : "Weekly"
	}, {
		"frequency" : "Monthly"
	} ]
});