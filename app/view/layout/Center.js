Ext.define('RM.view.layout.Center', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.center',
    region: 'center',
    title: 'Center Content',

    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {

        });
        me.callParent(arguments);
    }
});
