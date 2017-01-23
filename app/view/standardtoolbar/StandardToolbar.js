Ext.define('mgjsoc.view.standardtoolbar.StandardToolbar', {
	extend : 'Ext.Toolbar',
	
	xtype : 'std-tbar',
	
	dock : 'top',
	
	items : [{ 
				xtype: 'button',
				text : 'Add',
				iconCls : 'fa fa-plus-circle fa-lg',
			},{ 
				xtype: 'button',
				text : 'Edit',
				iconCls : 'fa fa-pencil fa-lg',
			},{ 
				xtype: 'button',
				text : 'Delete',
				iconCls : 'fa fa-trash fa-lg',
			},{ 
				xtype: 'button',
				text : 'Export to Excel',
				iconCls : 'fa fa-file-excel-o fa-lg',
			},{ 
				xtype: 'button',
				text : 'Export to PDF',
				iconCls : 'fa fa-file-pdf-o fa-lg',
			},{
				xtype: 'button',
				text : 'Upload',
				iconCls : 'fa fa-upload fa-lg',
			}]
});
			