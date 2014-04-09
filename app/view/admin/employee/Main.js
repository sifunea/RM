Ext.define('RM.view.admin.qualifications.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.admin.qualifications.main',
    plain: true,
    defaults: {
        autoScroll: true
    },
    items: [
    {
        itemId: 'tab-skills',
        title: 'Skills',
        layout: 'fit',
        items: [
        { xtype: 'admin.qualifications.skill.grid' }
        ]
    },
    {
        itemId: 'tab-education',
        title: 'Education',
        layout: 'fit',
        items: [
         { xtype: 'container' /*'admin.qualifications.education.grid'*/ }
        ]
    },
    {
        itemId: 'tab-certification',
        title: 'Certifications',
        layout: 'fit',
        items: [
        { xtype:'container'/* 'admin.qualifications.certification.grid' */}
        ]
    },
    {
        itemId: 'tab-language',
        title: 'Languages',
        layout: 'fit',
        items: [
        { xtype: 'container' }
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
