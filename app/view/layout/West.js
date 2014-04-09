Ext.define('RM.view.layout.West', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.west',
    region: 'west',
    title: 'Menu',
    width: 220,
    split: true,
    collapsible: true,
    tools: [{
        type: 'gear',
        regionTool: true
    }],

    layout: {
        // layout-specific configs go here
        type: 'accordion',
        titleCollapse: true,
        animate: true,
        activeOnTop: false
    },

    items: [
    {
        xtype: 'treepanel',
        title: 'Admin',
        rootVisible: false,
        useArrows: true,
        root: {
            expanded: true,
            children: [
            { id: 'admin-company-structure', text: 'Company Structure', leaf: true },
            { id: 'admin-jobs', text: 'Jobs', leaf: true },
            { id: 'admin-qualifications', text: 'Qualifications', leaf: true },
            { id: 'admin-employees', text: 'Employees', leaf: true },
            { id: 'admin-leaves', text: 'Leaves', leaf: true },
            { id: 'admin-document-types', text: 'Document Types', leaf: true },
            { id: 'admin-projects', text: 'Projects', leaf: true }
            ]
        }
    },
    {
        xtype: 'treepanel',
        title: 'Personal Information',
        rootVisible: false,
        useArrows: true,
        root: {
            expanded: true,
            children: [
            { id: 'basic-info', text: 'Basic Information', leaf: true },
            { id: 'qualifications', text: 'Qualifications', leaf: true },
            { id: 'salary', text: 'Salary', leaf: true },
            { id: 'dependents', text: 'Dependents', leaf: true },
            { id: 'emergency-contacts', text: 'Emergency Contacts', leaf: true },
            { id: 'projects', text: 'Projects', leaf: true },
            { id: 'immigrations', text: 'Immigrations', leaf: true }
            ]
        }
    },
    {
        xtype: 'treepanel',
        title: 'Leaves',
        rootVisible: false,
        useArrows: true,
        root: {
            expanded: true,
        }
    }
    ]
});
