Ext.define('RM.view.layout.North', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.north',
    region: 'north',
    bodyPadding: 5,
    height: 70,

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    html: '<h1>Car Tracker</h1>',
    cls: 'header',
    initComponent: function () {
        this.items = [
            {
                xtype: 'image',
                id: 'app-header-title',
                src: 'resources/images/sea.jpg',
                width: 200,
                height: 50,
                style: 'margin-left:10px'
            },
            {
                xtype: 'component',
                html: ''
            }

        ]
        var me = this;
        Ext.applyIf(me, {

        });
        me.callParent(arguments);
    }
});
