Ext.define('RM.view.admin.employee.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.admin.employee.main',
    plain: true,
    defaults: {
        autoScroll: true
    },
    items: [
    {
        itemId: 'tab-employee',
        title: 'Skills',
        layout: 'fit',
        items: [
        { xtype: 'admin.employee.grid' }
        ]
    }
    ],
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {

        });
        me.callParent(arguments);
    }
});
