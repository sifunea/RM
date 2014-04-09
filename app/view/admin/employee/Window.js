/*
 * Window for adding/editing {@link RM.model.CompanyStructure} record
 */
Ext.define('RM.view.admin.qualifications.skill.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.admin.qualifications.skill.window',
    requires: ['RM.view.admin.qualifications.skill.Form'],
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
                xtype: 'admin.qualifications.skill.form',
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
                    itemId: 'cancel-skills-btn',
                    text: 'Cancel'
                },
                '->',
                {
                    xtype: 'button',
                    itemId: 'save-skills-btn',
                    text: 'Save'
                }
                ]
            }
            ]
        });

        this.callParent(arguments);
    }
});
