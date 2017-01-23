Ext.define('mgjsoc.view.signin.SignIn',{
	extend : 'Ext.form.Panel',
	//requires : ['Ext.field.Password'],
	xtype : 'signin',
	
	bodyPadding: 5,
    width: 350,
    
 // The form will submit an AJAX request to this URL when submitted
    url: 'userlogin',
    
	items: [{
    	xtype: 'fieldset',
    	title: 'Sign In',
        items: [{
        	xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email',
            vtype : 'email'
        },{
        	xtype: 'textfield',
        	fieldLabel: 'Password',
            name: 'password',
            inputType : 'password'
        }]
	}],
	buttons: [{
        text: 'Login',
        formBind: true, //only enabled once the form is valid
        //enabled: false,
        handler: function() {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                form.submit({
                    success: function(form, action) {
                       //Ext.Msg.alert('Success', action.result.msg);
                       Ext.Msg.alert('Success', 'Success Message Test');
                    },
                    failure: function(form, action) {
                        //Ext.Msg.alert('Failed', action.result.msg);
                    	if (action.result == null) {
                    		Ext.Msg.alert('Failure', 'No response from server');
                    	} else {
                    		Ext.Msg.alert('Failure', 'Unable to authenticate.');
                    	}
                    }
                });
            }
        }
    }, {
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }]
});