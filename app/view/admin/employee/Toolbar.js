Ext.define('RM.view.admin.employee.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.admin.employee.toolbar',
    style: {
        'background-color': '#E4E5E7'
    },
    items: [
       {
           //xt
           id: 'new-employees-btn',
           text: 'New',
           iconCls: 'tasks-new'
       }
    ]
});
