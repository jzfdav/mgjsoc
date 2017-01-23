Ext.define('mgjsoc.view.signup.SignUp',{
	extend : 'Ext.form.Panel',
	xtype : 'signup',
	items : [{
		xtype : 'form',
		title : 'Sign Up',
		collapsible : true,
		items : [{
			xtype : 'container',
			columns : 2,
			items : [ {
			xtype : 'container',
			padding : '5 5 5 5',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'First Name'
			},{
				xtype : 'textfield',
				fieldLabel : 'Middle Name'
			},{
				xtype : 'textfield',
				fieldLabel : 'Last Name'
			},{
				name : 'group',
				xtype : 'combo',
				fieldLabel : 'Gender',
				allowBlank : false,
				store : Ext.create('Ext.data.Store', {
					fields : [ 'gender' ],
					data : [ {
						"gender" : "Male"
					}, {
						"gender" : "Female"
					} ]
				}),
				queryMode : 'local',
				displayField : 'gender',
				valueField : 'gender'
			},{
				xtype : 'datefield',
				fieldLabel : 'Date of Birth'
			} ]
		}]
		}],
		tbar : [{
			text : 'Sign In'
		},{
			text : 'Sign Up'
		}],
		bbar : [{
			text : 'Register'
		},{
			text : 'Reset'
		}]
	}],
	
	url: 'add_user',
	buttons: [
	          {
	              text: 'Submit',
	              handler: function() {
	                  var form = this.up('form'); // get the form panel
	                  if (form.isValid()) { // make sure the form contains valid data before submitting
	                      form.submit({
	                          success: function(form, action) {
	                             Ext.Msg.alert('Success', action.result.msg);
	                          },
	                          failure: function(form, action) {
	                              Ext.Msg.alert('Failed', action.result.msg);
	                          }
	                      });
	                  } else { // display error alert if the data is invalid
	                      Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
	                  }
	              }
	          }
	      ]
});