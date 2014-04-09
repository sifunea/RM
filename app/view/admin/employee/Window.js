/*
 * Window for adding/editing {@link RM.model.CompanyStructure} record
 */
Ext.define('RM.view.admin.employee.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.admin.employee.window',
    requires: ['RM.view.admin.employee.Form'],
    modal: true,
    width: 500,
    height: 250,
    minWidth: 500,
    minHeight: 200,
    layout: 'fit',
    border: false,

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
            {
                xtype: 'admin.employee.form',
                border: false
            }
            ],
            dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                items: [
                {
                    xtype: 'button',
                    itemId: 'cancel-employees-btn',
                    text: 'Cancel'
                },
                '->',
                {
                    xtype: 'button',
                    itemId: 'save-employees-btn',
                    text: 'Save'
                }
                ]
            }
            ]
        });

        this.callParent(arguments);
    }
});
