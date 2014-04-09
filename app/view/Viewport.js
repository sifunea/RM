Ext.define('RM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border'
        //'RM_demo.view.layout.North',
        //'RM_demo.view.layout.West',
        //'RM_demo.view.layout.Center'
    ],
    layout: {
        type: 'border'
    },
    items: [
        { xtype: 'layout.north' },
        { xtype: 'layout.west' },
        { xtype: 'layout.center' }
    ]
  
});

