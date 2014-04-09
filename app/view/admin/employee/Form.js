Ext.define('RM.view.admin.employee.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.admin.employee.form',
    requires: [
       'Ext.form.Panel',
     'Ext.form.FieldSet',
     'Ext.form.field.Text',
     'Ext.form.field.TextArea'
    ],

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            bodyPadding: 10,
            defaults: {
                labelWidth: 90,
                anchor: '100%'
            },
            items: [
            {
                xtype: 'textfield',
                name: 'Name',
                fieldLabel: 'Name'
            },
         {
             xtype: 'textarea',
             name: 'Description',
             fieldLabel: 'Description'
         }
            ]
        });

        me.callParent(arguments);
    }
});
